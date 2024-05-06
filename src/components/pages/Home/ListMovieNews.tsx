import TitleBlock from '@/components/design-ui/TitleBlock'
import CardMovie from '@/components/shared/CardMovied'
import { MoiveNewResType } from '@/lib/schemaType'
import { cutImageUrl } from '@/lib/utils'
import React from 'react'

interface propsType {
  listMovies: MoiveNewResType
}
const ListMovieNews = ({ listMovies }: propsType) => {
  return (
    <div className='list-new__movie mb-5'>
      <TitleBlock text='Phim Mới Cập Nhật' className='text-[12px] lg:text-lg' />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-4 justify-center'>
        {listMovies.items.map((item, index) => {
          const trimmedUrl = cutImageUrl(item.poster_url)

          return (
            <div key={index}>
              <CardMovie dataItem={item} trimmedUrl={trimmedUrl} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListMovieNews
