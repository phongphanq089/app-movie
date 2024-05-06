import movieApiRequest from '@/api-request'
import TitleBlock from '@/components/design-ui/TitleBlock'
import WrapperContainer from '@/components/layout/WrapperContainer'
import CardMovie from '@/components/shared/CardMovied'
import PaginationPage from '@/components/shared/PaginationPage'
import HeadingTopPage from '@/components/shared/HeadingTopPage'
import { Metadata } from 'next'
import React from 'react'

interface SearchParamsProps {
  searchParams?: {
    page?: string
    limit?: string
  }
  params: { slug: string }
}

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Phim mới, phim lẻ, phim bộ, phim lẻ, phim bộ',
  alternates: {
    languages: {
      'en-VN': '/en-VN',
    },
  },
  keywords: ['phim mới ', 'phim lẻ', 'phim bộ'],
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://app-movie-xi.vercel.app/_next/image?url=%2Fimage%2Fbanner-hero-1.jpg&w=3840&q=75', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const page = async ({ searchParams, params }: Readonly<SearchParamsProps>) => {
  const listCategorieds = await movieApiRequest.moiveLists(
    `/v1/api/danh-sach/${params.slug}?page=${searchParams?.page}&limit=${searchParams?.limit}`
  )

  return (
    <WrapperContainer>
      <HeadingTopPage heading={listCategorieds.payload.data.titlePage} />
      <div>
        {listCategorieds.payload.data.params.pagination && (
          <PaginationPage
            pagination={listCategorieds.payload.data.params.pagination}
            slug={params?.slug}
          />
        )}
      </div>
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
