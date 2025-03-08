'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { useSidebar } from '@/contexts/SidebarContext'
import comitLogo from '@/lib/comit.png'

const navigation = [
  { name: '홈', href: '/', icon: '🏠' },
  { name: '내 활동', href: '/my-activities', icon: '📋' },
  { name: '개설 현황', href: '/courses', icon: '📚' },
  { name: '시설 예약', href: '/facilities', icon: '🏢' },
  { name: '도서 대출', href: '/books', icon: '📖' },
  { name: '공지사항', href: '/notices', icon: '📢' }
]

export default function Sidebar() {
  const pathname = usePathname()
  const { isOpen, close } = useSidebar()

  return (
    <>
      {/* 오버레이 */}
      {isOpen && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={close} />}

      {/* 사이드바 */}
      <div
        className={clsx(
          'fixed bottom-0 top-0 z-40 w-[80vw] border-r bg-white shadow-sm transition-transform duration-300 md:w-[min(256px,25vw)]',
          'md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="h-16 border-b p-5">
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <Image src={comitLogo} alt="COMIT Logo" width={100} height={28} className="h-7 w-auto" />
            <span className="bg-clip-text text-base font-semibold text-black/85">CoMit</span>
          </Link>
        </div>

        <nav className="mt-4 px-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={close}
              className={clsx(
                'my-1 flex items-center gap-3 rounded-lg px-4 py-2.5 text-[13px] transition-all duration-200',
                pathname === item.href
                  ? 'bg-primary/10 font-medium text-primary'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
          <Link
            href="/my-page"
            className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-gray-50"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-medium text-primary">
              박
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-medium">박코딩</p>
              <p className="text-[11px] text-gray-500">컴퓨터공학과</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
