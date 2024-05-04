import movieApiRequest from '@/api-request'
import TitleBlock from '@/components/design-ui/TitleBlock'
import WrapperContainer from '@/components/layout/WrapperContainer'
import BannerHero from '@/components/pages/Home/BannerHero'
import CardMovie from '@/components/shared/CardMovied'
import React from 'react'

const PageTvShow = async () => {
  const listTvShow = await movieApiRequest.tv_show()
  return (
    <WrapperContainer>
      {/* ====== || BANNER HERO || ====== */}
      <BannerHero />
      {/* ====== || MOVIE LIST || ====== */}
      <div className='list-new__movie mb-10'>
        <TitleBlock text={listTvShow.payload.data.titlePage} />
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 md:gap-4 justify-center'>
          {listTvShow.payload.data.items.map((item, index) => {
            return (
              <div key={index}>
                <CardMovie poster_url={item.poster_url} name={item.name} />
              </div>
            )
          })}
        </div>
      </div>
    </WrapperContainer>
  )
}

export default PageTvShow
