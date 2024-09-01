'use server'

import { apiClient } from '@/actions/api-client'
import { API_ENDPOINT } from '@/actions/endpoints'

interface DeleteQuizParams extends NextFetchRequestConfig {
  documentId: number
  quizSetId: string
  quizId: number
}

export interface DeleteQuizResponse {
  quizSetId: string
}

export const deleteQuiz = async ({ documentId, quizSetId, quizId }: DeleteQuizParams) => {
  return await apiClient.fetch<DeleteQuizResponse>({
    endpoint: API_ENDPOINT.quiz.deleteQuiz(documentId, quizSetId, quizId),
  })
}
