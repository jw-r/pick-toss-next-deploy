'use server'

import { apiClient } from '@/actions/api-client'
import { API_ENDPOINT } from '@/actions/endpoints'

export interface TopFive {
  documents: {
    id: number
    name: string
    incorrectAnswerCount: number
    category: {
      id: number
      name: string
    }
  }[]
}

interface GetTopFiveResponse extends TopFive {}

export const getTopFive = async () => {
  const result = await apiClient<GetTopFiveResponse>({
    endpoint: API_ENDPOINT.document.getTopFive(),
  })
  return result.data
}
