'use client'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'

import { mockSessions,mockStudies } from '@/lib/mockData'

type ActivityType = 'all' | 'study' | 'project' | 'session'

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<ActivityType>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const allActivities = [...mockStudies, ...mockSessions]

  const filteredActivities = allActivities.filter((activity) => {
    const matchesType = activeTab === 'all' || activity.type === activeTab
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  return (
    <div className="mx-auto max-w-6xl px-0 py-4 md:px-2 md:py-6 lg:px-8">
      <div className="mb-6 px-0 md:mb-8">
        <h1 className="mb-3 px-4 text-xl font-bold md:mb-4 md:text-2xl">개설 현황</h1>
        <p className="px-4 text-[13px] text-gray-600">현재 모집 중인 스터디와 프로젝트를 확인해보세요.</p>

        <div className="mt-4 md:mt-6">
          <Link
            href="/courses/create"
            className="hover:text-primary-dark inline-flex items-center gap-0 text-[13px] text-primary hover:underline"
          >
            <span className="pl-4">원하는 활동이 없으신가요? 새로운 스터디/세션 만들기</span>
            <svg className="relative -top-[1px] h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="scrollbar-hide mt-2 flex gap-2 overflow-x-auto border-b md:mt-4 md:gap-4">
          <button
            onClick={() => setActiveTab('all')}
            className={clsx(
              'whitespace-nowrap px-3 py-2 text-[13px] md:px-4 md:text-[14px]',
              activeTab === 'all' ? 'border-b-2 border-black font-medium' : 'text-gray-500'
            )}
          >
            전체
          </button>
          <button
            onClick={() => setActiveTab('study')}
            className={clsx(
              'whitespace-nowrap px-3 py-2 text-[13px] md:px-4 md:text-[14px]',
              activeTab === 'study' ? 'border-b-2 border-black font-medium' : 'text-gray-500'
            )}
          >
            스터디
          </button>
          <button
            onClick={() => setActiveTab('project')}
            className={clsx(
              'whitespace-nowrap px-3 py-2 text-[13px] md:px-4 md:text-[14px]',
              activeTab === 'project' ? 'border-b-2 border-black font-medium' : 'text-gray-500'
            )}
          >
            프로젝트
          </button>
          <button
            onClick={() => setActiveTab('session')}
            className={clsx(
              'whitespace-nowrap px-3 py-2 text-[13px] md:px-4 md:text-[14px]',
              activeTab === 'session' ? 'border-b-2 border-black font-medium' : 'text-gray-500'
            )}
          >
            세션
          </button>
        </div>
      </div>

      {filteredActivities.length === 0 ? (
        <div className="py-12 text-center">
          <p className="mb-4 text-gray-500">검색 결과가 없습니다</p>
          <Link href="/courses/create" className="hover:text-primary-dark inline-flex items-center gap-1 text-primary">
            <span className="hover:bg-purple-700 hover:text-white">
              원하는 활동이 없으시다면 새로운 스터디/세션을 개설하러 가요(제발 한번만..)
            </span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="h-[130px] rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md md:h-[140px] md:p-5"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">{activity.icon}</span>
                    <div>
                      <h3 className="line-clamp-1 text-[14px] font-medium md:text-[15px]">{activity.title}</h3>
                      <div className="mt-1 flex flex-wrap gap-2 text-[12px] text-gray-500 md:text-[13px]">
                        <span
                          className={clsx(
                            'rounded px-1.5 py-0.5',
                            activity.level === 'easy' && 'bg-green-100 text-green-800',
                            activity.level === 'medium' && 'bg-yellow-100 text-yellow-800',
                            activity.level === 'hard' && 'bg-red-100 text-red-800'
                          )}
                        >
                          {activity.level === 'easy' ? '초급' : activity.level === 'medium' ? '중급' : '고급'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={clsx(
                      'min-w-12 rounded-full px-2 py-1 text-[12px]',
                      activity.status === '모집중' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    )}
                  >
                    {activity.status}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[12px] text-gray-500 md:text-[13px]">
                  <span>
                    👥 {activity.currentMembers}/{activity.maxMembers}명
                  </span>
                  <button
                    onClick={() => alert('아직 클릭가능한 버튼이 아닙니다.')}
                    className={clsx(
                      'rounded-md px-2 py-1 text-primary transition-colors',
                      activity.status === '모집중'
                        ? 'text-primary-dark hover:bg-primary/10'
                        : 'bg-gray-100 text-gray-900'
                    )}
                  >
                    참여하기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
