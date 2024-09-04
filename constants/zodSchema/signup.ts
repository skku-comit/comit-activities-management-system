import { z } from 'zod'

import { email, password } from '@/constants/zodSchema/signin'

const signUpSchema = z.object({
  username: z.string({ required_error: '필수 입력사항입니다.' }).min(1, '필수 입력사항입니다.'),
  phoneNumber: z
    .string({ required_error: '핸드폰 번호를 입력해주세요.' })
    .min(11, '핸드폰 번호는 11자리여야 합니다.')
    .max(11, '핸드폰 번호는 11자리여야 합니다.'),
  studentId: z
    .string({ required_error: '필수 입력사항입니다.' })
    .min(10, '학번은 10자리여야 합니다.')
    .max(10, '학번은 10자리여야 합니다.'),
  email,
  password
})

export default signUpSchema
