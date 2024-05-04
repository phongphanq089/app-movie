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
    <div className='list-new__movie'>
      <TitleBlock text='Phim Mới Cập Nhật' />
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 md:gap-4 justify-center'>
        {listMovies.items.map((item, index) => {
          const trimmedUrl = cutImageUrl(item.poster_url)
          return (
            <div key={index}>
              <CardMovie poster_url={trimmedUrl} name={item.name} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListMovieNews
