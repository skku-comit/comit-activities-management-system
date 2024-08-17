import { NextRequest, NextResponse } from 'next/server'

import { auth } from '@/lib/auth/auth'

import { ROUTES } from './constants/routes'

export async function middleware(request: NextRequest) {
  const session = await auth()

  // 세션이 없는 경우 로그인 페이지로 리디렉션
  if (!session) {
    const callbackUrl = encodeURIComponent(request.url) // 시도했던 URL을 callbackUrl로 설정
    return NextResponse.redirect(new URL(ROUTES.LOGIN.url, request.url))
  }

  return NextResponse.next()
}

// Warning: Caanot use CallExpressions! (고유 문자열 사용하기)
export const config = {
  matcher: ['/mystudy/:path*', '/profile/:path*']
}
