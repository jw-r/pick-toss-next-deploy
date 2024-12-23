'use client'

import { CategoryDTO } from '@/actions/types/dto/category.dto'
import { FakeSelectTrigger } from '@/shared/components/fake-select-trigger'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import { ReturnUseCheckListDialogDoc, SelectDocumentItem } from '@/types/quiz'
import { memo, SetStateAction, useCallback, useEffect, useState } from 'react'
import SelectCheckItems from './select-check-items'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import Loading from '@/shared/components/loading'
import { DEFAULT_QUIZ_COUNT, QUIZ_COUNT_OPTIONS } from '@/constants/quiz'
import { useDocumentCheck } from '../context/use-document-check'

// MakeQuizDialog 내부에서 사용되는 selector 컴포넌트들
interface Props {
  CategorySelector: {
    categories: CategoryDTO[]
    selectCategoryId: number
    setSelectCategoryId: (categoryId: number) => void
  }
  DocumentSelector: {
    documentMap: Record<number, SelectDocumentItem[]>
    setAllSelectedDocuments: (value: SetStateAction<SelectDocumentItem[]>) => void
  }
  QuizCountSelector: {
    quizCount: number
    setQuizCount: (value: number) => void
    isPendingQuizCount: boolean
    maxQuizCount: number
  }
}

// CategorySelector 컴포넌트
export const CategorySelector = memo(function CategorySelector({
  categories,
  selectCategoryId,
  setSelectCategoryId,
}: Props['CategorySelector']) {
  const [openSelectCategory, setOpenSelectCategory] = useState(false)

  const curCategory = categories.find((category) => category.id === selectCategoryId)!

  // useCallback으로 함수 재생성 방지
  const handleCategoryClick = useCallback(
    (categoryId: number) => {
      setOpenSelectCategory(false)
      setSelectCategoryId(categoryId)
    },
    [setSelectCategoryId]
  )

  return (
    <DropdownMenu open={openSelectCategory} onOpenChange={setOpenSelectCategory}>
      <DropdownMenuTrigger className="w-full">
        <FakeSelectTrigger emoji={curCategory.emoji} value={curCategory.name} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-[8px] pb-[10px] pt-[18px]">
        <div className="px-[18px] text-body2-medium">전체</div>
        <div className="flex flex-col">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex items-center gap-[8px] rounded-[8px] px-[18px] py-[8px] text-body2-regular hover:bg-gray-01"
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.emoji && <div>{category.emoji}</div>}
              <div>{category.name}</div>
            </button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
})

// DocumentSelector 컴포넌트
export const DocumentSelector = memo(function DocumentSelector({
  documentMap,
  setAllSelectedDocuments,
}: Props['DocumentSelector']) {
  const [openSelectDocuments, setOpenSelectDocuments] = useState(false)

  const {
    list: documentList,
    getCheckedIds: getDocumentCheckedIds,
    toggle: toggleDocumentChecked,
    isAllCheckedWithoutIgnored: isDocumentAllCheckedWithoutIgnored,
    checkAllWithoutIgnored: checkDocumentAllWithoutIgnored,
    unCheckAllWithoutIgnored: unCheckDocumentAllWithoutIgnored,
  } = useDocumentCheck() as ReturnUseCheckListDialogDoc

  useEffect(() => {
    const selectedDocuments = Object.values(documentMap).flatMap((documents) =>
      documents.filter((document) => document.checked)
    )
    setAllSelectedDocuments(selectedDocuments)
  }, [documentMap])

  return (
    <DropdownMenu open={openSelectDocuments} onOpenChange={setOpenSelectDocuments}>
      <DropdownMenuTrigger className="w-[95px]">
        <FakeSelectTrigger value={`${getDocumentCheckedIds().length}개`} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[320px]">
        <SelectCheckItems
          items={documentList}
          isAllChecked={isDocumentAllCheckedWithoutIgnored()}
          unCheckAll={unCheckDocumentAllWithoutIgnored}
          checkAll={checkDocumentAllWithoutIgnored}
          toggle={toggleDocumentChecked}
          selectType="document"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
})

// QuizCountSelector 컴포넌트
export const QuizCountSelector = memo(function QuizCountSelector({
  quizCount,
  setQuizCount,
  isPendingQuizCount,
  maxQuizCount,
}: Props['QuizCountSelector']) {
  return (
    <Select
      defaultValue={String(DEFAULT_QUIZ_COUNT)}
      onValueChange={(value) => setQuizCount(+value)}
      value={String(quizCount)}
    >
      <SelectTrigger className="w-[85px] border-none bg-gray-01 pl-[14px] text-body1-bold outline-none">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="relative flex min-h-[100px] min-w-[85px]">
        {isPendingQuizCount ? (
          <Loading center size="xs" />
        ) : (
          <>
            {QUIZ_COUNT_OPTIONS.filter((option) => option <= maxQuizCount).map((option) => (
              <SelectItem key={option} value={String(option)} className="flex justify-center px-0">
                {option}
              </SelectItem>
            ))}
          </>
        )}
      </SelectContent>
    </Select>
  )
})
