'use client'

import { env } from '@/lib/env'

export function EnvBadge() {
  if (env.isProduction) return null

  const isLocal = env.isLocal
  const label = isLocal ? 'LOCAL' : 'STAGING'

  return (
    <div
      className={`fixed top-2 right-2 z-[9999] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${
        isLocal
          ? 'bg-yellow-400 text-yellow-900'
          : 'bg-orange-500 text-white'
      }`}
    >
      {label}
    </div>
  )
}
