import { z } from 'zod'

export const movieNewsType = z
  .object({
    status: z.boolean(),
    items: z.array(
      z.object({
        poster_url: z.string(),
        name: z.string(),
      })
    ),
    pagination: z.object({
      total_results: z.number(),
      total_pages: z.number(),
      page: z.number(),
    }),
  })
  .strict()

export const movieSingleType = z
  .object({
    status: z.string(),
    msg: z.string(),
    data: z.object({
      seoOnPage: z.string(),
      titlePage: z.string(),
      breadCrumb: z.array(z.string()),
      items: z.array(
        z.object({
          name: z.string(),
          poster_url: z.string(),
        })
      ),
    }),
  })
  .strict()

export type MoiveNewResType = z.TypeOf<typeof movieNewsType>

export type movieSingleResType = z.TypeOf<typeof movieSingleType>
