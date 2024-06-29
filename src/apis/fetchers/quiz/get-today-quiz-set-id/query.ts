import { useQuery } from '@tanstack/react-query'
import { getTodayQuizSetId } from './fetcher'
import { useSession } from 'next-auth/react'

export const GET_TODAY_QUIZ_SET_ID_KEY = 'today-quiz-set-id'

export function useGetTodayQuizSetId() {
  const { data: session } = useSession()

  return useQuery({
    queryKey: [GET_TODAY_QUIZ_SET_ID_KEY],
    queryFn: () =>
      getTodayQuizSetId({
        accessToken: session?.user.accessToken || '',
      }),
    enabled: !!session?.user.accessToken,
  })
}
