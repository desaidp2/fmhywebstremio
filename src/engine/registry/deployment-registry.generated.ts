import type { SourceRegistryState } from './source-registry';

export const deploymentSourceRegistry: SourceRegistryState = {
  records: [
    {
      id: 'atlantic:atlantic.bz',
      canonicalDomain: 'atlantic.bz',
      aliases: [
        'fprime.at',
      ],
      fmhy: {
        name: 'Atlantic',
        section: '▷ Stream Aggregators',
        tags: [],
        firstSeenAt: new Date(0),
        lastSeenAt: new Date(0),
      },
      family: {
        id: 'atlantic',
        confidence: 1,
        evidence: [
          {
            type: 'script-signature',
            fingerprint: 'atlantic-brand',
          },
          {
            type: 'dom-shape',
            fingerprint: 'atlantic-title',
          },
          {
            type: 'asset-path',
            value: 'atlantic-vite-client',
          },
        ],
        lastProbedAt: new Date(0),
      },
      probe: {
        outcome: 'matched',
        observedAt: new Date(0),
        finalUrl: 'https://atlantic.bz/',
      },
      status: 'supported',
    },
    {
      id: 'bingebang:bingebang.sx',
      canonicalDomain: 'bingebang.sx',
      aliases: [],
      fmhy: {
        name: 'BingeBang',
        section: '▷ Stream Aggregators',
        tags: [],
        firstSeenAt: new Date(0),
        lastSeenAt: new Date(0),
      },
      status: 'supported',
      family: {
        id: 'bingebang',
        confidence: 1,
        evidence: [
          {
            type: 'script-signature',
            fingerprint: 'bingebang-client',
          },
          {
            type: 'api-shape',
            fingerprint: 'bingebang-explore-search',
          },
          {
            type: 'route-shape',
            value: '/movie|tv/watch/{slug}',
          },
        ],
        lastProbedAt: new Date(0),
      },
      probe: {
        outcome: 'matched',
        observedAt: new Date(0),
        finalUrl: 'https://bingebang.sx/',
      },
    },
    {
      id: 'cineruv:cineruv.website',
      canonicalDomain: 'cineruv.website',
      aliases: [],
      fmhy: {
        name: 'cineruv',
        section: '▷ Stream Aggregators',
        tags: [],
        firstSeenAt: new Date(0),
        lastSeenAt: new Date(0),
      },
      status: 'supported',
      family: {
        id: 'cineruv',
        confidence: 1,
        evidence: [
          {
            type: 'script-signature',
            fingerprint: 'cineruv-brand',
          },
          {
            type: 'dom-shape',
            fingerprint: 'cineruv-catalog-identity',
          },
          {
            type: 'asset-path',
            value: 'cineruv-vite-client',
          },
        ],
        lastProbedAt: new Date(0),
      },
      probe: {
        outcome: 'matched',
        observedAt: new Date(0),
        finalUrl: 'https://cineruv.website/',
      },
    },
    {
      id: 'arrowtv:arrowtv.net',
      canonicalDomain: 'arrowtv.net',
      aliases: ['neonflix.st', 'cinezo.st', 'flikhub.net'],
      fmhy: { name: 'ArrowTV', section: '▷ Stream Aggregators', tags: [], firstSeenAt: new Date(0), lastSeenAt: new Date(0) },
      family: { id: 'arrowtv', confidence: 1, evidence: [{ type: 'script-signature', fingerprint: 'arrowtv-player-catalog' }], lastProbedAt: new Date(0) },
      probe: { outcome: 'matched', observedAt: new Date(0), finalUrl: 'https://arrowtv.net/' },
      status: 'supported',
    },
    {
      id: 'flyflix:flyflix.cc',
      canonicalDomain: 'flyflix.cc',
      aliases: [],
      fmhy: { name: 'Flyflix', section: '▷ Stream Aggregators', tags: [], firstSeenAt: new Date(0), lastSeenAt: new Date(0) },
      family: { id: 'flyflix', confidence: 1, evidence: [{ type: 'script-signature', fingerprint: 'flyflix-player-catalog' }], lastProbedAt: new Date(0) },
      probe: { outcome: 'matched', observedAt: new Date(0), finalUrl: 'https://flyflix.cc/' },
      status: 'supported',
    }
  ],
  health: [
    {
      sourceId: 'atlantic:atlantic.bz',
      lastOutcome: 'healthy',
      recentSuccesses: 3,
      recentFailures: 0,
      observedAt: new Date(0),
    },
    {
      sourceId: 'bingebang:bingebang.sx',
      lastOutcome: 'healthy',
      recentSuccesses: 7,
      recentFailures: 0,
      observedAt: new Date(0),
    },
    {
      sourceId: 'cineruv:cineruv.website',
      lastOutcome: 'healthy',
      recentSuccesses: 3,
      recentFailures: 0,
      observedAt: new Date(0),
    },
    {
      sourceId: 'arrowtv:arrowtv.net',
      lastOutcome: 'healthy',
      recentSuccesses: 1,
      recentFailures: 0,
      observedAt: new Date(0),
    },
    {
      sourceId: 'flyflix:flyflix.cc',
      lastOutcome: 'healthy',
      recentSuccesses: 1,
      recentFailures: 0,
      observedAt: new Date(0),
    }
  ],
};
