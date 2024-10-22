import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog'
import moreStarImage from './assets/need-more-star.png'
import Image from 'next/image'
import Text from '@/shared/components/ui/text'
import { Button } from '@/shared/components/ui/button'

interface Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const MoreStarDialog = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild></DialogTrigger>

      <DialogContent
        displayCloseButton={false}
        className="flex-center size-fit flex-col rounded-[20px] bg-background-base-01 px-[24px] py-[28px]"
      >
        <Image src={moreStarImage} width={97} height={97} alt="" className="mb-[24px] mt-[13px]" />
        <div className="flex-center mb-[29px] flex-col gap-[8px]">
          <DialogTitle className="font-suit text-title3">별이 부족해요</DialogTitle>
          <Text typography="text2-medium" className="text-text-caption">
            현재 나의 별: <span className="text-text-sub">16개</span>
          </Text>
          <Text typography="text1-regular" className="text-text-sub">
            퀴즈 한 문제당 별 하나가 필요해요
          </Text>
        </div>
        <Button variant={'largeRound'} colors={'primary'} className="mb-[16px]">
          별 충전하기
        </Button>
        <DialogClose className="text-button-text-tertiary">닫기</DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default MoreStarDialog