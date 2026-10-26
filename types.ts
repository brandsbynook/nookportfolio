/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioProject {
  id: string;
  title: string;
  tag: string;
  description: string;
  link: string;
  linkType: 'web' | 'google-play';
  platformLabel: string;
  keyFeatures: string[];
  techStack: string[];
}

export interface OperationalStandard {
  id: string;
  number: string;
  title: string;
  description: string;
  subtext: string;
}

export interface BackgroundMetric {
  value: string;
  label: string;
  detail: string;
}
