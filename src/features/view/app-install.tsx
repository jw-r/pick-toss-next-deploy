'use client'

import AppInstallAos from './app-install-aos'
import AppInstallIos from './app-install-ios'
import { useDynamicThemeColor } from '@/shared/hooks/use-dynamic-theme-color'
import { isIOS, isMobile } from 'react-device-detect'

const AppInstallView = () => {
  useDynamicThemeColor(isMobile, '#F5F7F9', '#FFFFFF')

  if (isIOS) {
    return <AppInstallIos />
  }

  return <AppInstallAos />
}

export default AppInstallView
