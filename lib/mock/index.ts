export * from './activities'
export * from './books'
export * from './notices'
export * from './sessions'
export * from './studies'

export interface WeeklyProgress {
  week: number
  title: string
  originalTitle?: string
  status: 'completed' | 'current' | 'upcoming'
  description: string
  originalDescription?: string
}
