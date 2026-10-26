/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { User } from 'firebase/auth';
import {
  initAuth,
  googleSignIn,
  logout,
  getAccessToken,
} from '../services/googleDriveAuth';
import {
  DriveFile,
  fetchDriveFiles,
  formatBytes,
  getMimeCategory,
} from '../services/googleDriveService';
import ScrollReveal from './ScrollReveal';

interface GoogleDriveExplorerProps {
  onAttachFileToScope?: (file: DriveFile) => void;
  attachedFileId?: string | null;
}

export const GoogleDriveExplorer: React.FC<GoogleDriveExplorerProps> = ({
  onAttachFileToScope,
  attachedFileId,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Files state
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>(undefined);

  // Filter & search state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'documents' | 'sheets' | 'pdfs' | 'images'>('all');
  const [copiedFileId, setCopiedFileId] = useState<string | null>(null);

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, accessToken) => {
        setUser(currentUser);
        setToken(accessToken);
        setAuthError(null);
      },
      () => {
        setUser(null);
        setToken(null);
        setFiles([]);
      }
    );
    return () => unsubscribe();
  }, []);

  // Fetch files when token, filter, or search changes
  const loadFiles = useCallback(async (currToken: string, queryText = '', filter = activeFilter, pageToken?: string) => {
    setIsLoadingFiles(true);
    setFetchError(null);
    try {
      const response = await fetchDriveFiles(currToken, {
        searchQuery: queryText,
        filterType: filter,
        pageToken,
      });

      if (pageToken) {
        setFiles(prev => [...prev, ...response.files]);
      } else {
        setFiles(response.files);
      }
      setNextPageToken(response.nextPageToken);
    } catch (err: any) {
      console.error('Error fetching Drive files:', err);
      setFetchError(err.message || 'Unable to load files from Google Drive.');
    } finally {
      setIsLoadingFiles(false);
    }
  }, [activeFilter]);

  useEffect(() => {
    if (token) {
      loadFiles(token, searchQuery, activeFilter);
    }
  }, [token, activeFilter, loadFiles, searchQuery]);

  const handleSignIn = async () => {
    setIsSigningIn(true);
    setAuthError(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
        loadFiles(result.accessToken, searchQuery, activeFilter);
      }
    } catch (err: any) {
      console.error('Sign-in failed:', err);
      setAuthError(err.message || 'Authentication with Google Drive was cancelled or failed.');
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setFiles([]);
  };

  const handleCopyLink = (file: DriveFile) => {
    const link = file.webViewLink || `https://drive.google.com/file/d/${file.id}/view`;
    navigator.clipboard.writeText(link);
    setCopiedFileId(file.id);
    setTimeout(() => setCopiedFileId(null), 2000);
  };

  return (
    <section id="drive" className="py-20 md:py-28 max-w-[1200px] mx-auto px-6 md:px-10 border-b border-[#1b222c]">
      {/* Section Header with Scroll Reveal */}
      <ScrollReveal distance={20} duration={0.6}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1b222c] mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#7d8b99] uppercase tracking-wider mb-2">
              <span>Google Workspace Integration</span>
              <span aria-hidden="true">·</span>
              <span>Asset Vault &amp; Scope Specs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#e6e2da] tracking-tight">
              Google Drive Files Explorer
            </h2>
          </div>
          <p className="text-sm text-[#7d8b99] max-w-md font-sans">
            Connect your Google Drive with secure client-side tokens to inspect briefs, project specs, brand assets, and attach them directly to your scope inquiry.
          </p>
        </div>
      </ScrollReveal>

      {!user ? (
        /* Unauthenticated State with Official GSI Material Button */
        <div className="p-8 md:p-12 bg-[#0b0d11] rounded-lg border border-[#1b2127] text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 mx-auto mb-4 bg-[#141a22] border border-[#232c37] rounded-full flex items-center justify-center text-xl">
            <svg className="w-6 h-6 text-[#e6e2da]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
            </svg>
          </div>

          <h3 className="text-2xl font-serif font-normal text-[#e6e2da] mb-3">
            Access Your Google Drive Files
          </h3>

          <p className="text-sm text-[#7d8b99] leading-relaxed mb-8 max-w-md mx-auto font-sans">
            Review the card below to connect Google Drive to Nook Studio &amp; Co. Once enabled, you can browse project documents, review indent spreadsheets, and attach specifications with permission from your Google account.
          </p>

          {/* Official Google Sign-In Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSignIn}
              disabled={isSigningIn}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#141a22] hover:bg-[#1c2430] text-[#e6e2da] border border-[#232c37] hover:border-[#384656] rounded-md font-sans text-sm font-medium shadow-sm transition-all hover:shadow cursor-pointer disabled:opacity-60"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-5 h-5 block">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <span>{isSigningIn ? 'Connecting to Drive...' : 'Sign in with Google'}</span>
            </button>
          </div>

          {authError && (
            <p className="mt-4 text-xs font-mono text-rose-400 bg-rose-950/40 p-2 rounded border border-rose-900/60">
              {authError}
            </p>
          )}

          <p className="text-[11px] font-mono text-[#7d8b99] mt-6">
            Tokens cached strictly in-memory · Zero external tracking · Disconnect anytime
          </p>
        </div>
      ) : (
        /* Authenticated State: Drive File Browser */
        <div className="space-y-6">
          {/* User Account Bar */}
          <div className="p-4 bg-[#0b0d11] rounded-lg border border-[#1b2127] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'Google Account'}
                  className="w-8 h-8 rounded-full border border-[#232c37]"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#141a22] border border-[#232c37] text-[#e6e2da] flex items-center justify-center font-mono text-xs">
                  {user.email?.charAt(0).toUpperCase() || 'G'}
                </div>
              )}
              <div>
                <span className="text-xs font-mono font-medium text-[#e6e2da] block">
                  {user.displayName || 'Connected User'}
                </span>
                <span className="text-[11px] font-mono text-[#7d8b99]">
                  {user.email} · Google Drive Connected
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => token && loadFiles(token, searchQuery, activeFilter)}
                disabled={isLoadingFiles}
                className="px-3 py-1.5 text-xs font-mono text-[#7d8b99] hover:text-[#e6e2da] bg-[#141a22] hover:bg-[#1c2430] border border-[#232c37] rounded transition-colors cursor-pointer"
                title="Refresh file list"
              >
                {isLoadingFiles ? 'Refreshing...' : 'Refresh ↻'}
              </button>
              <button
                onClick={handleSignOut}
                className="px-3 py-1.5 text-xs font-mono text-rose-400 hover:text-rose-300 bg-rose-950/40 hover:bg-rose-900/40 rounded border border-rose-900/60 transition-colors cursor-pointer"
              >
                Disconnect Drive
              </button>
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {(
                [
                  { id: 'all', label: 'All Files' },
                  { id: 'documents', label: 'Docs & Text' },
                  { id: 'sheets', label: 'Spreadsheets' },
                  { id: 'pdfs', label: 'PDFs' },
                  { id: 'images', label: 'Images' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-mono rounded whitespace-nowrap transition-colors cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#e6e2da] text-[#090b0e] font-medium'
                      : 'bg-[#141a22] text-[#7d8b99] hover:bg-[#1c2430] hover:text-[#e6e2da] border border-[#232c37]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="relative min-w-[260px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search file name in Drive..."
                className="w-full text-xs font-sans bg-[#141a22] text-[#e6e2da] placeholder-[#7d8b99] px-3.5 py-2 rounded border border-[#232c37] focus:outline-none focus:border-[#384656]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[#7d8b99] hover:text-[#e6e2da] cursor-pointer"
                >
                  x
                </button>
              )}
            </div>
          </div>

          {fetchError && (
            <div className="p-4 bg-rose-950/40 border border-rose-900/60 text-rose-400 text-xs font-mono rounded">
              {fetchError}
            </div>
          )}

          {/* Files List / Grid */}
          {isLoadingFiles && files.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-[#1b2127] rounded-lg">
              <div className="w-6 h-6 border-2 border-[#e6e2da] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-xs font-mono text-[#7d8b99]">Querying Google Drive files...</p>
            </div>
          ) : files.length > 0 ? (
            <div className="border border-[#1b2127] rounded-lg overflow-hidden bg-[#0b0d11] divide-y divide-[#1b2127]">
              {files.map((file) => {
                const category = getMimeCategory(file.mimeType);
                const isAttached = attachedFileId === file.id;
                const isCopied = copiedFileId === file.id;

                return (
                  <div
                    key={file.id}
                    className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#10141a] transition-colors"
                  >
                    {/* File metadata */}
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-8 h-8 rounded bg-[#141a22] border border-[#232c37] text-[#e6e2da] flex items-center justify-center shrink-0 font-mono text-xs uppercase mt-0.5">
                        {category.charAt(0)}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-xs font-mono text-[#7d8b99]">
                            {category}
                          </span>
                          <span className="text-[#7d8b99]">·</span>
                          <span className="text-xs font-mono text-[#7d8b99] tabular-nums">
                            {formatBytes(file.size)}
                          </span>
                          {file.modifiedTime && (
                            <>
                              <span className="text-[#7d8b99]">·</span>
                              <span className="text-xs font-mono text-[#7d8b99] tabular-nums">
                                {new Date(file.modifiedTime).toLocaleDateString()}
                              </span>
                            </>
                          )}
                        </div>

                        <h4 className="text-sm font-medium text-[#e6e2da] truncate font-sans">
                          {file.name}
                        </h4>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
                      {onAttachFileToScope && (
                        <button
                          onClick={() => onAttachFileToScope(file)}
                          className={`px-3 py-1.5 text-xs font-mono rounded transition-colors cursor-pointer ${
                            isAttached
                              ? 'bg-emerald-600 text-white'
                              : 'bg-[#141a22] border border-[#232c37] text-[#7d8b99] hover:text-[#e6e2da] hover:bg-[#1c2430]'
                          }`}
                        >
                          {isAttached ? 'Attached to Brief' : 'Attach to Brief +'}
                        </button>
                      )}

                      <button
                        onClick={() => handleCopyLink(file)}
                        className="px-3 py-1.5 text-xs font-mono text-[#7d8b99] hover:text-[#e6e2da] border border-[#232c37] rounded bg-[#141a22] hover:bg-[#1c2430] transition-colors cursor-pointer"
                        title="Copy Google Drive view link"
                      >
                        {isCopied ? 'Link Copied' : 'Copy Link'}
                      </button>

                      {file.webViewLink && (
                        <a
                          href={file.webViewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 text-xs font-mono font-medium text-[#090b0e] bg-[#e6e2da] hover:bg-white rounded transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>Open</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center border border-dashed border-[#1b2127] rounded-lg">
              <p className="font-serif text-lg text-[#e6e2da] mb-1">No files found matching criteria</p>
              <p className="text-xs font-mono text-[#7d8b99]">
                {searchQuery ? `No files containing "${searchQuery}"` : 'Your Google Drive has no files under this category.'}
              </p>
            </div>
          )}

          {/* Pagination */}
          {nextPageToken && token && (
            <div className="text-center pt-4">
              <button
                onClick={() => loadFiles(token, searchQuery, activeFilter, nextPageToken)}
                disabled={isLoadingFiles}
                className="px-5 py-2 text-xs font-mono text-[#e6e2da] border border-[#232c37] bg-[#141a22] hover:bg-[#1c2430] hover:text-white rounded transition-colors cursor-pointer"
              >
                {isLoadingFiles ? 'Loading More...' : 'Load More Drive Files ↓'}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default GoogleDriveExplorer;
