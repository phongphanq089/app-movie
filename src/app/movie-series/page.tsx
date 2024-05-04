import movieApiRequest from '@/api-request'
import TitleBlock from '@/components/design-ui/TitleBlock'
import WrapperContainer from '@/components/layout/WrapperContainer'
import BannerHero from '@/components/pages/Home/BannerHero'
import CardMovie from '@/components/shared/CardMovied'

const PageMovieseries = async () => {
  const listSeriesMovie = await movieApiRequest.series_movie()
  return (
    <WrapperContainer>
      {/* ====== || BANNER HERO || ====== */}
      <BannerHero />
      {/* ====== || MOVIE LIST || ====== */}
      <div className='list-new__movie mb-10'>
        <TitleBlock text={listSeriesMovie.payload.data.titlePage} />
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 md:gap-4 justify-center'>
          {listSeriesMovie.payload.data.items.map((item, index) => {
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

export default PageMovieseries
