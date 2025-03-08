'use client'

import Link from 'next/link'

import { mockNotices } from '@/lib/mockData'

export default function NoticesPage() {
  return (
    <div className="mx-auto max-w-5xl px-0 py-4 md:px-6 md:py-6 lg:px-8">
      <h1 className="mb-3 px-4 text-xl font-bold md:mb-4 md:text-2xl">공지사항</h1>
      <p className="mb-6 px-4 text-[13px] text-gray-600 md:mb-8">COMIT 내 활동 관련 운영 정책들을 확인해보세요!</p>

      <div className="border-t border-gray-200">
        {mockNotices.map((notice) => (
          <Link
            href={`/notices/${notice.id}`}
            key={notice.id}
            className="flex items-center border-b border-gray-200 px-2 py-3 transition-colors hover:bg-gray-50 md:py-4"
          >
            <span className="w-12 text-[14px] text-gray-500 md:w-16 md:text-[15px]">
              {String(notice.id).padStart(2, '0')}
            </span>
            <span className="line-clamp-1 flex-1 text-[14px] md:text-[15px]">{notice.title}</span>
            <span className="w-20 text-right text-[12px] text-gray-500 md:text-[13px]">
              {new Date(notice.createdAt).toLocaleDateString('ko-KR', {
                year: '2-digit',
                month: '2-digit'
              })}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
