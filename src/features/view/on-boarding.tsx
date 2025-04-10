'use client'

import CategorySelectArea from '@/features/category/components/category-select-area'
import Text from '@/shared/components/ui/text'
import { useIsPWA } from '@/shared/hooks/use-pwa'
import { isMobile } from 'react-device-detect'
import WebInstallView from './web-install'
import { useDynamicThemeColor } from '@/shared/hooks/use-dynamic-theme-color'
import { useEffect } from 'react'
import { useAmplitudeContext } from '@/shared/hooks/use-amplitude-context'

const OnBoarding = () => {
  const { onboardStartEvent } = useAmplitudeContext()

  useDynamicThemeColor(isMobile, '#FFFFFF', '#F5F7F9')
  const isPWA = useIsPWA()

  useEffect(() => {
    if (isPWA) {
      onboardStartEvent()
    }
  }, [isPWA])

  if (isMobile && !isPWA) {
    return <WebInstallView />
  }

  return (
    <main className="fixed right-1/2 top-0 flex h-[calc(100dvh-54px)] w-full max-w-mobile translate-x-1/2 flex-col overflow-y-auto overflow-x-hidden bg-background-base-01 px-[16px] scrollbar-hide">
      <Text typography="title2" className="mt-[70px]">
        관심분야를 선택해주세요
      </Text>
      <Text typography="text1-medium" color="sub">
        픽토스님이 좋아하실만한 퀴즈를 홈에서 볼 수 있어요
      </Text>

      <CategorySelectArea />
    </main>
  )
}

export default OnBoarding
