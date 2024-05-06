import movieApiRequest from '@/api-request'
import TitleBlock from '@/components/design-ui/TitleBlock'
import WrapperContainer from '@/components/layout/WrapperContainer'
import CardMovie from '@/components/shared/CardMovied'
import HeadingTopPage from '@/components/shared/HeadingTopPage'
import PaginationPage from '@/components/shared/PaginationPage'
import React from 'react'

export const dynamic = 'force-dynamic'
interface SearchParamsProps {
  searchParams?: {
    page?: string
    limit?: string
  }
  params: { slug: string }
}

const page = async ({ searchParams, params }: Readonly<SearchParamsProps>) => {
  const listCategorieds = await movieApiRequest.movieCategory(
    `/v1/api/the-loai/${params.slug}?page=${searchParams?.page}&limit=${searchParams?.limit}`
  )
  return (
    <WrapperContainer>
      <HeadingTopPage heading={listCategorieds.payload.data.titlePage} />
      <div>
        {listCategorieds.payload.data.params && (
          <PaginationPage
            pagination={listCategorieds.payload.data.params.pagination}
            slug={params?.slug}
          />
        )}
      </div>
      {/* ====== || MOVIE LIST || ====== */}
      <div className='list-new__movie mb-10'>
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
    </WrapperContainer>
  )
}

export default page
