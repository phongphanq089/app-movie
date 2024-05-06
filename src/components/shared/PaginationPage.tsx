'use client'
import React, { FC } from 'react'
import { Pagination, PaginationContent, PaginationItem } from '../ui/pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import SvgIcon from '../ui/SvgIcon'
interface PaginationArrowProps {
  direction: 'left' | 'right'
  href: string
  isDisabled: boolean
}

const PaginationArrow: FC<PaginationArrowProps> = ({
  direction,
  href,
  isDisabled,
}) => {
  const router = useRouter()
  const isLeft = direction === 'left'
  const disabledClassName = isDisabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <PaginationItem className={`${disabledClassName}`}>
      {isDisabled ? (
        ''
      ) : (
        <>
          {isLeft ? (
            <div
              onClick={() => router.push(href)}
              className='block px-1 p-1 sm:px-2 rounded-xl cursor-pointer bg-color-1'
            >
              <span className='flex items-center gap-1'>
                <SvgIcon
                  icon='prev'
                  className='w-[18px] sm:w-[25px] h-auto fill-white'
                />
                <span className='hidden sm:block'>Trở về</span>
              </span>
            </div>
          ) : (
            <div
              onClick={() => router.push(href)}
              className='block px-1 p-1 sm:px-2 rounded-xl cursor-pointer bg-color-1'
            >
              <span className='flex items-center gap-1'>
                <span className='hidden sm:block'>Kế tiếp</span>
                <SvgIcon
                  icon='next'
                  className='w-[18px] sm:w-[25px] h-auto fill-white'
                />
              </span>
            </div>
          )}
        </>
      )}
    </PaginationItem>
  )
}
interface propsType {
  slug: string
  pagination: {
    totalItems: number
    totalItemsPerPage: number
    totalPages: number
  }
}

const PaginationPage = ({ pagination, slug }: propsType) => {
  const { totalItems, totalItemsPerPage, totalPages } = pagination

  const pathname = usePathname()

  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const renderPaginationButtons = () => {
    const buttons = []
    const visiblePages = 4
    const halfVisiblePages = Math.floor(visiblePages / 2)

    let startPage = Math.max(1, currentPage - halfVisiblePages)
    let endPage = Math.min(totalPages, startPage + visiblePages - 1)

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      i <= 1
        ? ''
        : buttons.push(
            <Link
              key={i}
              className={`px-1 py-[5px] sm:py-1 sm:px-2 rounded-xl ${
                i === currentPage ? 'bg-color-1' : 'border'
              }`}
              href={`${pathname}?page=${i}&limit=20`}
            >
              {i}
            </Link>
          )
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key='ellipsis-end'>...</span>)
      }
      buttons.push(
        <Link
          key={totalPages}
          className={`py-1 px-2 rounded-xl ${
            totalPages === currentPage ? 'bg-color-1' : 'border'
          }`}
          href={`${pathname}?page=${totalPages}&limit=20`}
        >
          {totalPages}
        </Link>
      )
    }
    return buttons
  }

  return (
    <Pagination className='mb-6'>
      <PaginationContent className='gap-1 sm:gap-4'>
        <PaginationArrow
          direction='left'
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage === 1}
        />
        <PaginationItem>
          <div className='flex items-center gap-2'>
            {renderPaginationButtons()}
          </div>
        </PaginationItem>

        <PaginationArrow
          direction='right'
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationPage
