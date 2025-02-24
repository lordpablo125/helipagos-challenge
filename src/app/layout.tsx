import type { Metadata } from 'next'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import Navbar from '@/shared/NavBar'
import QueryProvider from '@/providers/QueryProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <AppRouterCacheProvider>
        <QueryProvider>
          <body>
            <Navbar />
            <div className='w-3/4 mx-auto'>{children}</div>
            <ReactQueryDevtools />
          </body>
        </QueryProvider>
      </AppRouterCacheProvider>
    </html>
  )
}
