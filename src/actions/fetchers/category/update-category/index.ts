'use server'

import { apiClient } from '@/actions/api-client'
import { API_ENDPOINT } from '@/actions/endpoints'
import { CategoryTagType } from '../get-categories'

export interface UpdateCategoryParams extends NextFetchRequestConfig {
  categoryId: number
  tag: CategoryTagType
  name: string
  emoji: string
}

export const updateCategory = async ({ categoryId, name, tag, emoji }: UpdateCategoryParams) => {
  const result = await apiClient({
    endpoint: API_ENDPOINT.category.updateCategory(categoryId),
    data: {
      name: name,
      categoryTag: tag,
      emoji: emoji,
    },
  })
  return result.data
}
