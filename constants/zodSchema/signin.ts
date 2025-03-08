import { z } from 'zod'

export const name = z.string({ required_error: '아이디를 입력해주세세요.' })
export const password = z.string({ required_error: '필수' })
// .regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{6,20}$/, '영문, 숫자를 포함한 6~20자리의 비밀번호여야 합니다.')

const signInSchema = z.object({
  name,
  password
})

export default signInSchema
