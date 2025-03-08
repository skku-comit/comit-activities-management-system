import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import Sidebar from '@/components/Sidebar'
import TopBanner from '@/components/TopBanner'
import { SidebarProvider } from '@/contexts/SidebarContext'
import { SessionProvider } from '@/lib/auth/SessionProvider'
import { cn } from '@/lib/utils'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  title: '코밋 활동관리시스템',
  description: 'Comit Activities Management System',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico'
  },
  keywords: ['SKKU', 'COMIT', 'Official'],
  robots: 'index, follow'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={cn(pretendard.variable, 'font-pretendard')}>
        <SessionProvider>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <Sidebar />
              <div className="flex-1 md:ml-[min(256px,25vw)]">
                <TopBanner />
                <main className="mt-16 p-4 md:p-6 lg:p-8">{children}</main>
              </div>
            </div>
          </SidebarProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
