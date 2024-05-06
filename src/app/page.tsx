import movieApiRequest from '@/api-request'
import WrapperContainer from '@/components/layout/WrapperContainer'
import BannerHero_v2 from '@/components/pages/Home/BannerHero_v2'
import ListMovieNews from '@/components/pages/Home/ListMovieNews'
import SliderMovies from '@/components/pages/Home/SliderMovies'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Xem Phim HD Online - Trang Web Phim Mới Nhất',
}

export default async function Home() {
  const listMovieNews = await movieApiRequest.moive_new(
    '/danh-sach/phim-moi-cap-nhat'
  )

  const list_movie_single = await movieApiRequest.moiveLists(
    '/v1/api/danh-sach/phim-le'
  )

  const listSeriesMovie = await movieApiRequest.moiveLists(
    '/v1/api/danh-sach/phim-bo'
  )

  const listCartoonMovie = await movieApiRequest.moiveLists(
    '/v1/api/danh-sach/hoat-hinh'
  )

  const listTvShow = await movieApiRequest.moiveLists(
    '/v1/api/danh-sach/tv-shows'
  )
  return (
    <WrapperContainer>
      {/* ====== || BANNER HERO || ====== */}
      <BannerHero_v2 />
      {/* ====== || MOVIE LIST || ====== */}
      <ListMovieNews listMovies={listMovieNews.payload} />
      <SliderMovies dat_list={list_movie_single.payload} />
      <SliderMovies dat_list={listSeriesMovie.payload} />
      <SliderMovies dat_list={listCartoonMovie.payload} />
      <SliderMovies dat_list={listTvShow.payload} />
    </WrapperContainer>
  )
}
