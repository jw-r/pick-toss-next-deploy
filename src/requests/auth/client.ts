'use client'

import { API_ENDPOINTS } from '@/shared/configs/endpoint'
import { http } from '@/shared/lib/axios/http'

/** GET /auth/invite - 초대 링크 생성 */
export const getInviteLink = async () => {
  try {
    const { data } = await http.get<Auth.Response.GetInviteLink>(API_ENDPOINTS.AUTH.INVITE_LINK)
    return data
  } catch (error: unknown) {
    throw error
  }
}

/** POST /auth/invite/verify - 초대 코드 인증 */
export const verifyInviteCode = async (requestBody: Auth.Request.VerifyInviteCode) => {
  try {
    await http.post(API_ENDPOINTS.AUTH.INVITE_CODE_VERIFY, requestBody)
    return true
  } catch (error: unknown) {
    return false
  }
}
