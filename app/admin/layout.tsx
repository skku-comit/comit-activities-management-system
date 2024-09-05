import Header from '@/components/admin/Header'
import SideBar from '@/components/admin/Sidebar'
import Footer from '@/components/common/Footer'
import { Toaster } from '@/components/ui/toaster'
import AuthProvider from '@/lib/auth/AuthProvider'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const headerHeight = '5rem'
  const footerHeight = '5rem'

  return (
    <div className="h-screen">
      <AuthProvider>
        <Header height={headerHeight} />
        <div
          className="flex"
          style={{
            paddingTop: headerHeight,
            minHeight: '100%',
            paddingBottom: footerHeight
          }}
        >
          <SideBar className="w-1/5" />
          <div className="w-4/5">{children}</div>
        </div>
        <Footer height={footerHeight} />
        <Toaster />
      </AuthProvider>
    </div>
  )
}
