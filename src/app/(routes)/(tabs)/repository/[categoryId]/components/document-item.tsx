import Link from 'next/link'
import icons from '@/constants/icons'
import { Document } from '../../mock-data'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { cn } from '@/lib/utils'

interface Props extends Document {}

export default function DocumentItem({ id, name }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
  }

  return (
    <Link href={`/document/${id}`} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div
        className={cn(
          'flex h-[78px] items-center justify-between rounded-lg bg-white px-[27px] py-[15px] transition duration-200 hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]',
          isDragging && 'opacity-50'
        )}
      >
        <div className="flex items-center">
          <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-gray-01">
            <Image src="/icons/file.svg" alt="" width={24} height={24} />
          </div>
          <div className="text-body1-medium text-gray-09">{name}</div>
        </div>
        <div className="flex items-center gap-12">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex size-[25px] items-center justify-center rounded-full hover:bg-gray-02">
                <Image src={icons.kebab} alt="" width={15} height={3} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>문서 이름 변경하기</DropdownMenuItem>
              <DropdownMenuItem>문서 삭제하기</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </Link>
  )
}