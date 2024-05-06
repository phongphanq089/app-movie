/* eslint-disable @next/next/no-img-element */
import movieApiRequest from '@/api-request'
import YoutubeView from '@/components/shared/YoutubeView'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React from 'react'
import { bg_image_2 } from '@/assets'

export const dynamic = 'force-dynamic'

const MovieDetailPage = async ({ params }: { params: { slug: string } }) => {
  const movidetails = await movieApiRequest.movieDetail(`/phim/${params.slug}`)

  const moviePlay = movidetails.payload.episodes?.map((item) =>
    item.server_data.length > 0 ? item.server_data[0].link_embed : ''
  )

  const isMoviePlay = movidetails.payload.episodes?.some(
    (item) => item.server_data.length > 0
  )
  return (
    <div className='page-detail_movie'>
      <div className='heroBanner'>
        <div className='backdrop-img'>
          {/* <NextImageResize
            src={'/image/banner-hero.jpg'}
            alt='app-movie-2024'
            className='pt-[56%]'
          /> */}
          <div className='wrapImgResize img16And9'>
            <img src={bg_image_2.src} alt='app-movie-2024' />
          </div>
        </div>
        <div className='opacity-layer'></div>
      </div>

      <div className='container-xl mt-[-500px] md:mt-[-400px] z-10 relative mb-14'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='relative rounded-2xl overflow-hidden'>
            <div className='wrapImgResize pt-[100%] md:pt-[140%]'>
              <img
                src={movidetails.payload.movie.poster_url}
                alt='app-movie-2024'
              />
            </div>
            <Badge className='px-3 py-1 absolute top-2 right-2 text-xl bg-color-2 text-white'>
              {movidetails.payload.movie?.time}
            </Badge>
          </div>
          <div className='lg:col-span-2'>
            <div className='flex flex-col justify-center  h-full'>
              <div className='flex flex-col mb-3'>
                <h1 className='h1-semibold'>
                  {movidetails.payload.movie?.name}
                </h1>
                <h1 className='text-lg font-semibold'>
                  {movidetails.payload.movie?.origin_name}
                </h1>
              </div>
              <div className='flex flex-col gap-1 mb-2'>
                <div className='flex items-center'>
                  <span className='text-color-2 font-bold'>
                    Năm Phát Hành:{' '}
                  </span>
                  <Badge className='px-2 ml-1 '>
                    {movidetails.payload.movie?.year}
                  </Badge>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-color-2 font-bold'>Đang phát: </span>
                  <div className='flex items-center gap-1'>
                    <Badge className='px-2 '>
                      {movidetails.payload.movie?.quality}
                    </Badge>
                    <Badge className='px-2 '>
                      {movidetails.payload.movie?.episode_current}
                    </Badge>
                  </div>
                </div>
                <div className='flex items-center'>
                  <span className='text-color-2 font-bold'>Đạo diễn: </span>
                  <span className='ml-2'>
                    {movidetails.payload.movie?.director}
                  </span>
                </div>
              </div>
              <div className='flex gap-1 flex-col mb-2'>
                <span className='text-color-2 font-bold whitespace-nowrap'>
                  Diễn Viên:{' '}
                </span>
                <div className='flex flex-wrap gap-1'>
                  {movidetails.payload.movie?.actor.map((actor, index) => {
                    return <span key={index + actor}>{actor},</span>
                  })}
                </div>
              </div>
              <div className='flex gap-1 items-center'>
                <span className='text-color-2 font-bold whitespace-nowrap'>
                  Thể loại:{' '}
                </span>
                <div className='flex flex-wrap gap-1'>
                  {movidetails.payload.movie?.category.map(
                    (category, index) => {
                      return (
                        <Link
                          href={`/category/${category.slug}?page=1&limit=20`}
                          key={category.slug + index}
                          className='hover:text-color-2'
                        >
                          {category.name},
                        </Link>
                      )
                    }
                  )}
                </div>
              </div>
              <div className='mt-4'>
                {isMoviePlay ? (
                  <Link
                    href={`/view-detail-movie/${params.slug}?video=${moviePlay}&tap=Tập 01`}
                    className='button-style-2'
                  >
                    XEM PHIM
                  </Link>
                ) : (
                  <Link href={`#`} className='button-style-2'>
                    XEM TRAILER
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <p className='p-20-regular mt-4 mb-14'>
          <span className='text-color-2 font-bold'>Nội Dung: </span>
          <span> {movidetails.payload.movie.content}</span>
        </p>

        <YoutubeView videoUrl={movidetails.payload.movie?.trailer_url} />
      </div>
    </div>
  )
}

export default MovieDetailPage
