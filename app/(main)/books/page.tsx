'use client'
import React, { useState } from 'react'

import { mockBooks } from '@/lib/mockData'

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredBooks = mockBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="mx-auto max-w-6xl px-4 py-4 md:px-6 md:py-6 lg:px-8">
      <div className="mb-6 md:mb-8">
        <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">도서 대출</h1>
        <p className="text-[13px] text-gray-600">COMIT이 보유한 IT 관련 도서들을 검색하고 대출할 수 있습니다.</p>
      </div>

      {/* 검색 영역 */}
      <div className="mb-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-lg border bg-white px-3 py-2 text-sm md:w-auto"
          >
            <option value="all">전체</option>
            <option value="programming">프로그래밍</option>
            <option value="database">데이터베이스</option>
            <option value="network">네트워크</option>
            <option value="ai">인공지능</option>
          </select>

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="도서명 또는 저자를 검색하세요"
              className="w-full rounded-lg border px-3 py-2 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button className="hover:bg-primary-dark flex w-full items-center justify-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm text-white transition-colors md:w-auto">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>검색</span>
          </button>
        </div>
      </div>

      {/* 도서 목록 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md md:p-5"
          >
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="line-clamp-1 text-[15px] font-medium">{book.title}</h3>
                <p className="mt-1 text-[13px] text-gray-600">{book.author}</p>
              </div>
              <span
                className={`rounded-full px-2 py-1 text-[12px] ${
                  book.status === '대출가능' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {book.status}
              </span>
            </div>
            <p className="line-clamp-2 text-[13px] text-gray-500">{book.description}</p>
            <div className="mt-3 flex items-center justify-between text-[12px] text-gray-500">
              <span>{book.publisher}</span>
              <span>{book.publishedYear}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
