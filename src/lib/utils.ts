import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import qs from 'qs'
import { movieSingleResType } from './schemaType'
import movieApiRequest from '@/api-request'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cutImageUrl(url: string) {
  const index = url.indexOf('https://img.phimapi.com')
  if (index !== -1) {
    return url.substring(index + 'https://img.phimapi.com'.length)
  }
  return url
}

export function sortMoviesByYearDesc(movies: Array<any>): Array<any> {
  return movies.sort((a, b) => b.year - a.year)
}

export async function getSummaries(queryString: string) {
  const query = qs.stringify({
    keyword: queryString,
  })
  const url = new URL('/v1/api/tim-kiem', 'https://img.phimapi.com')
  url.search = query

  const listCategorieds = await fetch(url.href)
  return listCategorieds
}
