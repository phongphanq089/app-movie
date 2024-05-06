/* eslint-disable @next/next/no-img-element */
import movieApiRequest from '@/api-request'
import { bg_image_1 } from '@/assets'
import WrapperContainer from '@/components/layout/WrapperContainer'
import CardMovie from '@/components/shared/CardMovied'
import HeadingTopPage from '@/components/shared/HeadingTopPage'
import React from 'react'

interface SearchParamsProps {
  searchParams?: {
    keyword?: string
    page?: string
    limit?: string
  }
  params: { slug: string }
}

const PageSearchMovies = async ({
  searchParams,
  params,
}: Readonly<SearchParamsProps>) => {
  const listCategorieds = await movieApiRequest.moiveLists(
    `/v1/api/${params.slug}?keyword=${searchParams?.keyword}`
  )

  return (
    <WrapperContainer>
      {listCategorieds.payload.data.items.length <= 0 ? (
        <>
          <div className='flex items-center justify-center flex-col gap-5 text-center mt-[150px]'>
            <h2 className='text-xl md:text-3xl font-bold  max-w-2xl'>
              Rất tiếc, chúng tôi không tìm thấy bất kỳ kết quả nào phù hợp với
              tìm kiếm của bạn.
            </h2>
            <div className='h-auto w-[350px] md:w-[400px] block'>
              {/* <NextImageResize
                src={'/image/bg-banner-4.png'}
                alt='xem phim nhanh'
              /> */}
              <div className='wrapImgResize pt-[100%]'>
                <img src={bg_image_1.src} alt='app-movie-2024' />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='list-new__movie mb-10'>
          {/* <TitleBlock text={listCategorieds.payload.data.titlePage} /> */}
          <HeadingTopPage heading={listCategorieds.payload.data.titlePage} />
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-4 justify-center'>
            {listCategorieds.payload.data.items.map((item, index) => {
              return (
                <div key={index}>
                  <CardMovie dataItem={item} />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </WrapperContainer>
  )
}

export default PageSearchMovies
