import { API_ENDPOINT } from '@/apis/api-endpoint'
import { apiClient } from '@/lib/api-client'

export interface Document {
  id: number
  name: string
  status: 'UNPROCESSED' | 'PROCESSED'
  quizGenerationStatus: boolean
  createdAt: string
}

interface GetDocumentsForCategory extends NextFetchRequestConfig {
  accessToken: string
  categoryId: number
  sortOption?: 'createdAt' | 'name' | 'updatedAt'
}

interface GetDocumentsForCategoryResponse {
  documents: Document[]
}

export const getDocumentsForCategory = async ({
  accessToken,
  categoryId,
  sortOption,
}: GetDocumentsForCategory) => {
  return await apiClient.fetch<GetDocumentsForCategoryResponse>({
    ...API_ENDPOINT.document.getDocumentsForCategory(categoryId, sortOption),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}