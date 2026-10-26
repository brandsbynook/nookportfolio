/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioProject, OperationalStandard, BackgroundMetric } from './types';

export const BUILDER_NAME = 'Samriddhi Dutta';
export const BUILDER_TITLE = 'Independent Digital Product Builder & Interface Designer';

export const AVAILABILITY_STATUS = 'Available for select turnkey client builds · Asynchronous workflow preferred';

export const CORE_STATEMENT = 
  'Designing and deploying fast, minimalist business websites and mobile applications.';

export const EDUCATION_TEXT = 'Sociology, psychology.';
export const EXPERIENCE_TEXT = '2 live apps, 2 hackathons, one live website.';

export const WORKFLOW_PIPELINE = 
  'I follow a layered AI assisted work pipeline after detailed research and clear understanding about the assignment.';

export const CONTACT_EMAIL = 'brandsbynook@gmail.com';
export const GOOGLE_PLAY_DEV_URL = 'https://play.google.com/store/apps/dev?id=7114110275510848713';
export const CONTACT_NOTE = 
  'Accepting select web design and implementation projects. Responses sent within 24 hours with a scope assessment.';

export const FEATURED_PROJECTS: PortfolioProject[] = [
  {
    id: 'vanaspati-co',
    title: 'The Vanaspati Co.',
    tag: 'B2B Web Platform · Live',
    description: 
      'Direct-to-farm commercial wholesale nursery platform built to bypass middlemen. Features structured indent document uploads, scion/variety specifications, and direct WhatsApp buyer routing.',
    link: 'https://vanaspati-co.vercel.app',
    linkType: 'web',
    platformLabel: 'vanaspati-co.vercel.app',
    keyFeatures: [
      'Direct-to-farm procurement bypassing middlemen margins',
      'Structured indent document uploading & verification',
      'Plant scion and variety lineage specifications',
      'Direct WhatsApp click-to-route buyer orders'
    ],
    techStack: ['Next.js', 'Vercel Edge', 'Tailwind CSS', 'WhatsApp Business API']
  },
  {
    id: 'nook-games',
    title: 'nook games',
    tag: 'Android Application · Google Play',
    description: 
      'A quiet, ad-free collection of 20 offline logic and strategy puzzles (Chess, Sudoku, Nonogram, Slitherlink, 2048). Designed with an OLED dark palette, zero notifications, and offline-first state persistence.',
    link: 'https://play.google.com/store/apps/details?id=app.nook.games',
    linkType: 'google-play',
    platformLabel: 'Google Play Store',
    keyFeatures: [
      '20 classic logic puzzles (Chess, Sudoku, Nonogram, Slitherlink, 2048)',
      '100% offline-first with zero tracking & zero ads',
      'Deep OLED true-black dark palette for zero eye strain',
      'Zero push notifications, streaks, or artificial urgency'
    ],
    techStack: ['Kotlin', 'Android Jetpack', 'OLED UI Engine', 'Local SQLite Persistence']
  },
  {
    id: 'nook-sanctuary',
    title: 'nook sanctuary',
    tag: 'Android Application · Google Play',
    description: 
      'A low-stimulation digital companion providing tactile timers, unformatted brain-dumping, and ambient soundscapes engineered for focus and sensory regulation.',
    link: 'https://play.google.com/store/apps/details?id=app.vercel.nook_sanctuary',
    linkType: 'google-play',
    platformLabel: 'Google Play Store',
    keyFeatures: [
      'Tactile haptic timers calibrated for sensory calming',
      'Unformatted stream-of-consciousness brain-dumping scratchpad',
      'Zero-compression offline ambient acoustic loops',
      'Low-stimulation interface engineered for neurodivergent focus'
    ],
    techStack: ['Android', 'Audio Synthesis', 'Sensory Architecture', 'Local Cache']
  }
];

export const OPERATIONAL_STANDARDS: OperationalStandard[] = [
  {
    id: 'turnkey-delivery',
    number: '01',
    title: 'Turnkey Delivery',
    description: '3 to 5 page static sites delivered live in 4–5 days for a flat project fee.',
    subtext: 'No scope creep, surprise billable hours, or endless agency revisions. Transparent upfront pricing with production-ready live URL deployment.'
  },
  {
    id: 'strictly-asynchronous',
    number: '02',
    title: 'Strictly Asynchronous',
    description: 'Production, scope briefs, and reviews handled entirely in writing via email. No unscheduled calls.',
    subtext: 'Documented, thoughtful communication gives both client and builder deep focus time, eliminating calendar friction and ambiguous requirements.'
  },
  {
    id: 'high-performance',
    number: '03',
    title: 'High Performance',
    description: 'Lightweight, static edge deployment with instant load times and zero tracking bloat.',
    subtext: 'Sub-second paint times, clean semantic markup, and zero heavy analytics scripts. Your customers experience immediate responsiveness.'
  },
  {
    id: 'cognitive-restraint',
    number: '04',
    title: 'Cognitive Restraint',
    description: 'Interfaces designed around clarity, typography, and human focus rather than visual clutter.',
    subtext: 'Rooted in sociology and psychology: interfaces that respect human cognitive bandwidth, eliminate sensory fatigue, and direct attention to the core action.'
  }
];

export const BACKGROUND_STATS: BackgroundMetric[] = [
  {
    value: '02',
    label: 'Live Android Applications',
    detail: 'Published on Google Play with offline-first architecture'
  },
  {
    value: '01',
    label: 'Live B2B Web Platform',
    detail: 'Commercial nursery logistics platform with direct farmer routing'
  },
  {
    value: '02',
    label: 'Hackathons',
    detail: 'Rapid prototype building and high-pressure interface delivery'
  },
  {
    value: '100%',
    label: 'Sensory-Conscious',
    detail: 'Zero ad networks, zero notification spam, zero artificial cognitive noise'
  }
];