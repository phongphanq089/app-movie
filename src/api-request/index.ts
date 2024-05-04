import http from '@/lib/http'
import { MoiveNewResType, movieSingleResType } from '@/lib/schemaType'

const movieApiRequest = {
  moive_new: () =>
    http.get<MoiveNewResType>('/danh-sach/phim-moi-cap-nhat?page=1', {}),
  movie_single: () =>
    http.get<movieSingleResType>('/v1/api/danh-sach/phim-le', {}),
  series_movie: () =>
    http.get<movieSingleResType>('/v1/api/danh-sach/phim-bo', {}),
  cartoon_movie: () =>
    http.get<movieSingleResType>('/v1/api/danh-sach/hoat-hinh', {}),
  tv_show: () => http.get<movieSingleResType>('/v1/api/danh-sach/tv-shows', {}),
}
export default movieApiRequest
