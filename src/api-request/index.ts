import http from '@/lib/http'
import {
  MoiveNewResType,
  menuCategoriedResType,
  movieSeoOnPageResType,
  movieSingleResType,
  movieTypeDetailResType,
} from '@/lib/schemaType'

const movieApiRequest = {
  menuCategory: (url: string) =>
    http.get<menuCategoriedResType>(url, { cache: 'no-store' }),
  nationCategoryMenu: (url: string) =>
    http.get<menuCategoriedResType>(url, { cache: 'no-store' }),
  movieCategory: (url: string) =>
    http.get<movieSingleResType>(url, { cache: 'no-store' }),
  movieNation: (url: string) =>
    http.get<movieSingleResType>(url, { cache: 'no-store' }),
  moive_new: (url: string) =>
    http.get<MoiveNewResType>(url, { cache: 'no-store' }),
  moiveLists: (url: string) =>
    http.get<movieSingleResType>(url, { cache: 'no-store' }),
  movieDetail: (url: string) =>
    http.get<movieTypeDetailResType>(url, { cache: 'no-store' }),
  movieSeoOnpage: (url: string) =>
    http.get<movieSeoOnPageResType>(url, { cache: 'no-store' }),
}
export default movieApiRequest
