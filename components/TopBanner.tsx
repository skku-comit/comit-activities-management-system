'use client'
import Link from 'next/link'
import React from 'react'

import { useSidebar } from '@/contexts/SidebarContext'

export default function TopBanner() {
  const { toggle } = useSidebar()

  return (
    <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center justify-between border-b border-gray-200/80 bg-white/80 px-4 backdrop-blur-sm md:left-[min(256px,25vw)] md:px-6">
      <div className="flex items-center gap-6">
        {/* 햄버거 메뉴 (모바일) */}
        <button onClick={toggle} className="-ml-1 p-1 md:hidden" aria-label="메뉴 열기">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link href="/" className="flex flex-col">
          <span className="text-base font-medium text-gray-900 md:text-lg">코밋 활동관리시스템</span>
          <span className="text-[11px] text-gray-500 md:text-[12px]">Comit Activities Management System</span>
        </Link>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden items-center gap-1.5 text-[13px] text-gray-500 md:flex">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
          <span>온라인</span>
        </div>
        <div className="hidden h-4 w-px bg-gray-200 md:block"></div>
        <div className="flex items-center gap-2">
          <Link
            href="/my-page"
            className="flex items-center gap-2 rounded-lg px-3 py-1.5 transition-colors hover:bg-gray-50"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[13px] font-medium text-primary">
              박
            </span>
            <span className="text-[13px]">박코딩님</span>
          </Link>
          <button
            onClick={() => alert('아직 클릭가능한 버튼이 아닙니다.')}
            className="hidden text-[13px] text-gray-600 hover:text-gray-900 md:block"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  )
}
