/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  modifiedTime?: string;
  webViewLink?: string;
  webContentLink?: string;
  iconLink?: string;
  thumbnailLink?: string;
  owners?: Array<{ displayName: string; emailAddress?: string }>;
}

export interface DriveListResponse {
  files: DriveFile[];
  nextPageToken?: string;
}

export const formatBytes = (bytesStr?: string): string => {
  if (!bytesStr) return '—';
  const bytes = parseInt(bytesStr, 10);
  if (isNaN(bytes) || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};

export const getMimeCategory = (mimeType: string): string => {
  if (mimeType.includes('folder')) return 'Folder';
  if (mimeType.includes('document') || mimeType.includes('text') || mimeType.includes('pdf')) return 'Document';
  if (mimeType.includes('spreadsheet') || mimeType.includes('sheet')) return 'Spreadsheet';
  if (mimeType.includes('presentation') || mimeType.includes('slide')) return 'Presentation';
  if (mimeType.includes('image')) return 'Image';
  if (mimeType.includes('video') || mimeType.includes('audio')) return 'Media';
  return 'File';
};

export const fetchDriveFiles = async (
  token: string,
  options?: {
    searchQuery?: string;
    filterType?: 'all' | 'documents' | 'sheets' | 'images' | 'pdfs';
    pageSize?: number;
    pageToken?: string;
  }
): Promise<DriveListResponse> => {
  const queryParts: string[] = ['trashed = false'];

  if (options?.searchQuery && options.searchQuery.trim()) {
    const escaped = options.searchQuery.replace(/'/g, "\\'");
    queryParts.push(`name contains '${escaped}'`);
  }

  if (options?.filterType && options.filterType !== 'all') {
    switch (options.filterType) {
      case 'documents':
        queryParts.push("(mimeType = 'application/vnd.google-apps.document' or mimeType = 'text/plain' or mimeType = 'application/pdf')");
        break;
      case 'sheets':
        queryParts.push("(mimeType = 'application/vnd.google-apps.spreadsheet' or mimeType = 'text/csv')");
        break;
      case 'images':
        queryParts.push("mimeType contains 'image/'");
        break;
      case 'pdfs':
        queryParts.push("mimeType = 'application/pdf'");
        break;
    }
  }

  const q = encodeURIComponent(queryParts.join(' and '));
  const pageSize = options?.pageSize || 24;
  const fields = encodeURIComponent('nextPageToken, files(id, name, mimeType, size, modifiedTime, webViewLink, webContentLink, iconLink, thumbnailLink, owners)');

  let url = `https://www.googleapis.com/drive/v3/files?q=${q}&pageSize=${pageSize}&fields=${fields}&orderBy=modifiedTime desc`;
  if (options?.pageToken) {
    url += `&pageToken=${encodeURIComponent(options.pageToken)}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    let message = 'Failed to fetch files from Google Drive';
    try {
      const parsed = JSON.parse(errorText);
      message = parsed.error?.message || message;
    } catch {
      // fallback
    }
    throw new Error(`${response.status}: ${message}`);
  }

  return response.json();
};
