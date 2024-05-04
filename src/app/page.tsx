import movieApiRequest from '@/api-request'
import WrapperContainer from '@/components/layout/WrapperContainer'
import BannerHero from '@/components/pages/Home/BannerHero'
import BannerHome from '@/components/pages/Home/BannerHome'
import ListMovieNews from '@/components/pages/Home/ListMovieNews'
import SliderMovies from '@/components/pages/Home/SliderMovies'
import CardMovie from '@/components/shared/CardMovied'
import { cutImageUrl } from '@/lib/utils'

export default async function Home() {
  const listMovieNews = await movieApiRequest.moive_new()

  const list_movie_single = await movieApiRequest.movie_single()

  const listSeriesMovie = await movieApiRequest.series_movie()

  const listCartoonMovie = await movieApiRequest.cartoon_movie()

  return (
    <WrapperContainer>
      {/* ====== || BANNER HERO || ====== */}
      <BannerHome />
      {/* ====== || MOVIE LIST || ====== */}
      <ListMovieNews listMovies={listMovieNews.payload} />
      <SliderMovies dat_list={list_movie_single.payload} />
      <SliderMovies dat_list={listSeriesMovie.payload} />
      <SliderMovies dat_list={listCartoonMovie.payload} />
    </WrapperContainer>
  )
}
