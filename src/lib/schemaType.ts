import { string, z } from 'zod'

export const menuCategorieds = z.array(
  z.object({
    _id: z.string(),
    name: z.string(),
    slug: z.string(),
  })
)

export const movieNewsType = z
  .object({
    status: z.boolean(),
    items: z.array(
      z.object({
        poster_url: z.string(),
        name: z.string(),
        slug: z.string(),
      })
    ),
    pagination: z.object({
      total_results: z.number(),
      total_pages: z.number(),
      page: z.number(),
    }),
  })
  .strict()

export const movieSeoOnPage = z
  .object({
    status: z.string(),
    msg: z.string(),
    data: z.object({
      seoOnPage: z.object({
        og_type: z.string(),
        itleHead: z.string(),
        descriptionHead: z.string(),
        og_image: z.array(z.string()),
        og_url: z.string(),
      }),
    }),
  })
  .strict()

export const movieType = z
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
          slug: z.string(),
          poster_url: z.string(),
          lang: z.string(),
          year: z.string(),
          time: z.string(),
        })
      ),
      params: z.object({
        pagination: z.object({
          totalItems: z.number(),
          totalItemsPerPage: z.number(),
          currentPage: z.number(),
          totalPages: z.number(),
        }),
      }),
    }),
  })
  .strict()

export const movieTypeDetail = z.object({
  status: z.string(),
  movie: z.object({
    _id: z.string(),
    name: z.string(),
    origin_name: z.string(),
    content: z.string(),
    slug: z.string(),
    thumb_url: z.string(),
    poster_url: z.string(),
    episode_current: z.string(),
    lang: z.string(),
    year: z.string(),
    view: z.number(),
    trailer_url: z.string(),
    time: z.string(),
    quality: z.string(),
    actor: z.array(z.string()),
    director: z.string(),
    category: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        slug: z.string(),
      })
    ),
    country: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        slug: z.string(),
      })
    ),
  }),
  episodes: z.array(
    z.object({
      server_data: z.array(
        z.object({
          name: z.string(),
          slug: z.string(),
          filename: z.string(),
          link_embed: z.string(),
        })
      ),
    })
  ),
})

export type menuCategoriedResType = z.TypeOf<typeof menuCategorieds>

export type MoiveNewResType = z.TypeOf<typeof movieNewsType>

export type movieSingleResType = z.TypeOf<typeof movieType>

export type movieTypeDetailResType = z.infer<typeof movieTypeDetail>

export type movieSeoOnPageResType = z.infer<typeof movieSeoOnPage>
