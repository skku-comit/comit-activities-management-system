import { CustomError } from '@/lib/response'
import { Role } from '@/types'

export type AuthDataError = CustomError
export type AuthDataData = {
  name: string
  role: Role
  accessToken: string
  refreshToken: string
}

interface AuthData {
  error: AuthDataError | null
  data: AuthDataData | null
}

export declare module 'next-auth' {
  interface User extends AuthData {}
  interface Session extends AuthData {}
}

export declare module '@auth/core/jwt' {
  interface JWT extends AuthData {}
}
