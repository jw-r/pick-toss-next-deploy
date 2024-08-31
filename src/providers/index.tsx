'use client'

import { ReactNode, useState } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from '@/shared/lib/tanstack-query/client'
import AmplitudeContextProvider from '@/contexts/amplitude-context'
import { SessionProvider } from 'next-auth/react'
import { ApiClientProvider } from '@/shared/lib/api-client-provider'

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => getQueryClient())

  return (
    <AmplitudeContextProvider>
      <SessionProvider>
        <ApiClientProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </ApiClientProvider>
      </SessionProvider>
    </AmplitudeContextProvider>
  )
}
