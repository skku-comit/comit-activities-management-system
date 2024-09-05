import { ApiEndpoint } from '@/constants/apiEndpoint'

export async function fetchData(route: ApiEndpoint, init?: RequestInit) {
  const requestInit: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {})
    },
    method: route.method,
    mode: 'no-cors',
    ...init
  }

  return await fetch(route.url, requestInit)
}
