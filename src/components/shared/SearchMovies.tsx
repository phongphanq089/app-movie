'use client'
import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Input } from '../ui/input'
import SvgIcon from '../ui/SvgIcon'
import { useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const SearchMovies = () => {
  const [open, setOpen] = React.useState(false)
  const route = useRouter()
  const [value, setValue] = useState('')
  const handleSearch = useDebouncedCallback((term: string) => {
    const encodedTerm = encodeURIComponent(term)
    setValue(`/search-movies/tim-kiem?keyword=${encodedTerm}`)
  }, 200)

  const handleRoutePage = () => {
    route.push(value)
    setOpen(false)
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      route.push(value) // Chạy route.push(value) khi nhấn phím Enter
      setOpen(false)
    }
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <span className='bg-color-2 py-1 px-2 rounded-2xl font-bold cursor-pointer block'>
          Tìm kiếm
        </span>
      </SheetTrigger>
      <SheetContent
        side={'top'}
        className='dark:[background:radial-gradient(125%_125%_at_50%_10%,#020130_40%,#0e0548_100%)]'
      >
        <div className='container-xl flex flex-col items-center justify-center'>
          <SheetHeader className='mb-5 mt-5'>
            <SheetTitle>
              Hãy tìm kiếm những bộ phim hay nhất tại đây!
            </SheetTitle>
          </SheetHeader>
          <div className='flex items-center w-[350px] sm:w-[400px] lg:w-[500px] h-[50px] relative'>
            <Input
              className='col-span-3 bg-white text-dark h-full'
              type='text'
              placeholder='Search'
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div
              className='py-1 px-3 bg-color-1 rounded-xl absolute top-[50%] translate-y-[-50%] right-[5px] cursor-pointer'
              onClick={handleRoutePage}
            >
              <SvgIcon icon='search' className='w-[25px] h-[25px] fill-white' />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SearchMovies
