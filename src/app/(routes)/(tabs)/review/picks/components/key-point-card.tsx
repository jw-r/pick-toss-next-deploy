import { KeyPointDTO } from '@/actions/types/dto/key-point.dto'
import DeleteDropdown from './delete-dropdown'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

interface Props {
  keyPoint: KeyPointDTO
  handleDeleteBookmark: (id: number) => void
  highlightTo?: string
}

export function KeyPointCard({ keyPoint, highlightTo, handleDeleteBookmark }: Props) {
  return (
    <div className="overflow-hidden rounded-[12px] bg-white pb-[13px] lg:pb-[32px]">
      <div className="flex h-[48px] items-center justify-between border-b border-gray-02 px-[16px] lg:h-[56px] lg:pl-[32px]">
        <div className="text-small1-regular text-gray-06 lg:text-body2-regular">
          {keyPoint.category.name} {'>'}{' '}
          <Link
            href={`/document/${keyPoint.document.id}`}
            className="text-blue-05 underline underline-offset-2"
          >
            {highlight(keyPoint.document.name, highlightTo || '')}
          </Link>
        </div>
        <DeleteDropdown handleDeleteBookmark={() => handleDeleteBookmark(keyPoint.id)} />
      </div>

      <div className="flex flex-col gap-[8px] pt-[16px] lg:gap-[16px]">
        <div className="flex gap-[3px] px-[16px]">
          <PinIcon className="shrink-0 lg:size-[24px]" />
          <h4 className="text-body1-bold text-gray-09 lg:text-h4-bold">
            {highlight(keyPoint.question, highlightTo || '')}
          </h4>
        </div>
        <p className="px-[20px] text-text-regular text-gray-08 lg:pl-[32px]">
          {highlight(keyPoint.answer, highlightTo || '')}
        </p>
      </div>
    </div>
  )
}

const highlight = (text: string, term: string) => {
  if (!term) return text
  const parts = text.split(new RegExp(`(${term})`, 'gi'))
  return parts.map((part, index) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <span key={index} className="text-orange-06">
        {part}
      </span>
    ) : (
      part
    )
  )
}

function PinIcon({ className }: { className: HTMLAttributes<HTMLDivElement>['className'] }) {
  return (
    <svg
      width="20"
      height="20"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.73828 11.2344L10.3877 10.2821L14.3555 17.1546C14.6185 17.61 14.4624 18.1925 14.0069 18.4554C13.5515 18.7184 12.9691 18.5623 12.7061 18.1069L8.73828 11.2344Z"
        fill="#D2D6DB"
      />
      <rect
        x="7.15039"
        y="8.48633"
        width="1.90456"
        height="5.71367"
        transform="rotate(-30 7.15039 8.48633)"
        fill="#A2A6AB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.40235 3.94837C1.18016 4.07665 1.10403 4.36076 1.23231 4.58295L1.46452 4.98515C1.8976 5.73526 2.77469 6.06919 3.57214 5.84663L6.41758 10.7751C5.82608 11.3544 5.67672 12.281 6.1098 13.0311L6.34201 13.4333C6.47029 13.6555 6.7544 13.7316 6.97659 13.6033L13.4132 9.88714C13.6354 9.75886 13.7115 9.47474 13.5833 9.25255L13.3511 8.85036C12.9183 8.10084 12.0423 7.76684 11.2453 7.98835L8.3994 3.05906C8.98972 2.47964 9.13851 1.55394 8.70577 0.804407L8.47356 0.402216C8.34528 0.180026 8.06117 0.103898 7.83898 0.232179L1.40235 3.94837Z"
        fill="#7095F8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2548_3851"
          x1="4.62064"
          y1="2.09028"
          x2="10.1949"
          y2="11.7452"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7095F8" />
          <stop offset="1" stopColor="#A9C0FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
