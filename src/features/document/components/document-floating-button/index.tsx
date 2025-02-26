'use client'

import NewQuizDrawer from '@/features/quiz/components/new-quiz-drawer'
import ReplayQuizDrawer from '@/features/quiz/components/replay-quiz-drawer'
import Icon from '@/shared/components/custom/icon'
import Text from '@/shared/components/ui/text'
import { createPortal } from 'react-dom'
import { useDocumentDetailContext } from '../../contexts/document-detail-context'
import { useEffect } from 'react'

interface Props {
  documentId: number
  documentName: string
  directoryEmoji: string
  savedQuizCount: number
  startAddQuizzes: (quizCount: number, quizType: Quiz.Type) => void
  quizTypes: Quiz.Type[]
}

const DocumentFloatingButton = ({
  documentId,
  documentName,
  directoryEmoji,
  savedQuizCount,
  startAddQuizzes,
  quizTypes,
}: Props) => {
  const { setIsDrawerOpen } = useDocumentDetailContext()

  const handleOpenChange = (open: boolean) => {
    const scrollContainer = document.getElementById('mobileViewContainer')

    if (scrollContainer) {
      if (open) {
        setIsDrawerOpen(true)
        scrollContainer.style.pointerEvents = 'none' // 클릭 안되도록
      } else {
        setIsDrawerOpen(false)
        scrollContainer.style.pointerEvents = 'auto' // 원래대로
      }
    } else {
      // eslint-disable-next-line no-console
      console.warn('⚠️ mobileViewContainer를 찾을 수 없습니다.')
    }
  }

  // unmount시 overflow 속성 원복
  useEffect(() => {
    return () => {
      const scrollContainer = document.getElementById('mobileViewContainer')

      if (scrollContainer) {
        scrollContainer.style.pointerEvents = 'auto'
      }
    }
  }, [])

  return (
    <>
      {createPortal(
        <div className="flex-center fixed bottom-[43px] right-1/2 z-50 w-[60dvw] min-w-[266px] max-w-[270px] translate-x-1/2 rounded-full bg-background-toast px-[28px] py-[10px] text-button2 text-button-label-primary shadow-float-thick">
          <ReplayQuizDrawer
            triggerComponent={
              <button className="flex-center border-r border-icon-secondary py-[5.5px] pr-[20px]">
                <Icon name="past-record" className="mr-[4px] size-[16px]" />
                <Text className="text-button-label-primary">다시풀기</Text>
              </button>
            }
            documentId={Number(documentId)}
            documentName={documentName}
            directoryEmoji={directoryEmoji}
            savedQuizCount={savedQuizCount}
            quizTypes={quizTypes}
            onOpenChange={handleOpenChange}
          />

          <NewQuizDrawer
            triggerComponent={
              <button className="flex-center py-[5.5px] pl-[20px]">
                <Icon
                  name="picktoss"
                  fill="var(--color-orange-500)"
                  className="mr-[4px] size-[16px]"
                />
                <Text className="bg-gradient-to-r from-orange-500 to-blue-400 bg-clip-text text-transparent">
                  퀴즈 만들기
                </Text>
              </button>
            }
            documentId={Number(documentId)}
            documentName={documentName}
            directoryEmoji={directoryEmoji}
            startAddQuizzes={startAddQuizzes}
            onOpenChange={handleOpenChange}
          />
        </div>,
        document.body
      )}
    </>
  )
}

export default DocumentFloatingButton
