import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { movieSingleResType } from './schemaType'

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
