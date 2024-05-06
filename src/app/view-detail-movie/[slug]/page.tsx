/* eslint-disable @next/next/no-img-element */
import movieApiRequest from '@/api-request'
import TitleBlock from '@/components/design-ui/TitleBlock'
import ViewPlayVIdeo from '@/components/pages/detail-page/ViewPlayVIdeo'
import { NextImageResize } from '@/components/ui/ResizeImage'
import SvgIcon from '@/components/ui/SvgIcon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Item } from '@radix-ui/react-accordion'
import Link from 'next/link'
import React from 'react'

interface SearchParamsProps {
  searchParams?: {
    video?: string
    tap?: string
  }
  params: { slug: string }
}

const ViewDetailMovies = async ({
  searchParams,
  params,
}: Readonly<SearchParamsProps>) => {
  const movidetails = await movieApiRequest.movieDetail(`/phim/${params.slug}`)

  const movieserver_data = movidetails.payload.episodes?.map(
    (item) => item.server_data
  )

  return (
    <div className='page-detail_movie'>
      <div className='heroBanner'>
        <div className='backdrop-img'>
          <NextImageResize
            src={'/image/banner-hero-1.jpg'}
            alt='app-movie-2024'
            className='pt-[56%] md:pt-[56%]'
          />
        </div>
        <div className='opacity-layer'></div>
      </div>

      <div className='container-xl mt-[-500px] z-10 relative mb-14'>
        <TitleBlock
          text={`${movidetails.payload.movie?.name} - (${searchParams?.tap})`}
        />
        <ViewPlayVIdeo
          thumb_url={movidetails.payload.movie?.thumb_url}
          name={movidetails.payload.movie?.name}
          videoUrl={searchParams?.video}
        />
        <div className='py-4'>
          {movieserver_data?.map((moive, index) => {
            if (moive.length <= 1) return

            return (
              <div key={index}>
                <div className='mb-3 flex items-center gap-2'>
                  <SvgIcon
                    icon='list'
                    className='w-[35px] h-[35px] fill-white'
                  />
                  <h3 className='text-lg'>DANH SÁCH PHIM</h3>
                </div>
                <div className='flex flex-wrap justify-center gap-2'>
                  {moive?.map((list, index) => {
                    const isActive = list.name === searchParams?.tap
                    return (
                      <Link
                        href={`/view-detail-movie/${params.slug}?video=${list.link_embed}&tap=${list.name}`}
                        key={index}
                      >
                        <Badge
                          className={`px-3 py-1  text-sm md:text-lg text-white ${
                            isActive ? 'bg-color-1' : 'bg-color-2'
                          }`}
                        >
                          {list.name}
                        </Badge>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ViewDetailMovies
