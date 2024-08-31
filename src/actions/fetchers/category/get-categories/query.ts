'use client'

import { useQuery } from '@tanstack/react-query'
import { getCategories } from '.'
import { useSession } from 'next-auth/react'

export const GET_CATEGORIES_KEY = 'categories'

export const useGetCategoriesQuery = () => {
  const { data: session } = useSession()

  return useQuery({
    queryKey: [GET_CATEGORIES_KEY],
    queryFn: () =>
      getCategories({ accessToken: session?.user.accessToken || '' }).then((res) => res.categories),
  })
}
