'use server'

import { apiClient } from '@/actions/api-client'
import { API_ENDPOINT } from '@/actions/endpoints'
import { CategoryTagType } from '../get-categories'

interface GetCategoryParams extends NextFetchRequestConfig {
  categoryId: number
}

interface GetCategoryResponse {
  id: number
  name: string
  tag: CategoryTagType
  emoji: string
  order: number
}

export const getCategory = async ({ categoryId }: GetCategoryParams) => {
  const result = await apiClient<GetCategoryResponse>({
    endpoint: API_ENDPOINT.category.getCategory(categoryId),
  })
  return result.data
}
