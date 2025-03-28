'use client'

import Icon from '@/shared/components/custom/icon'
import { Input } from '@/shared/components/ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEventHandler, RefObject } from 'react'

interface Props {
  inputValue: string
  onChangeInputValue: ChangeEventHandler<HTMLInputElement>
  searchInputRef: RefObject<HTMLInputElement>
  isSearchFocused: boolean
  setIsSearchFocused: (value: boolean) => void
  onDeleteKeyword: () => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const InputWithCancelButton = ({
  inputValue,
  onChangeInputValue,
  searchInputRef,
  setIsSearchFocused,
  onDeleteKeyword,
  onSubmit,
}: Props) => {
  const searchParams = useSearchParams()
  const prev = searchParams.get('prev')
  const router = useRouter()
  const pathname = usePathname()

  const placeholder =
    pathname === '/search'
      ? '노트, 퀴즈, 컬렉션 검색'
      : pathname === '/document/search'
      ? '노트명, 노트, 퀴즈 검색'
      : pathname === '/collections/search'
      ? '컬렉션 검색'
      : '검색어를 입력해주세요'

  const handleCancel = () => {
    if (prev) {
      if (prev === 'home') {
        router.replace('/main')
      }
    } else {
      router.back()
    }
  }

  return (
    <header className="flex-center relative right-1/2 z-20 h-[56px] w-full max-w-mobile grow translate-x-1/2  bg-background-base-01 px-[16px] text-subtitle2-medium">
      <form onSubmit={onSubmit} tabIndex={-1} className="relative grow">
        <Input
          autoFocus
          ref={searchInputRef}
          onFocus={() => setIsSearchFocused(true)}
          value={inputValue}
          onChange={onChangeInputValue}
          placeholder={placeholder}
          className="h-[40px] placeholder:text-text-placeholder-01"
          variant={'round'}
          left={<Icon name="search-bar" className="size-[20px] text-icon-secondary" />}
          right={
            <button type="button" onClick={onDeleteKeyword}>
              <Icon
                name="cancel-circle"
                className="size-[24px]"
                fill="var(--color-gray-100)"
                stroke="var(--color-gray-300)"
              />
            </button>
          }
        />
      </form>

      <button
        type="button"
        onClick={handleCancel}
        className="ml-[17px] w-fit flex-none text-text-secondary"
      >
        취소
      </button>
    </header>
  )
}

export default InputWithCancelButton
