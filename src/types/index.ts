import { menuCategoriedResType } from '@/lib/schemaType'

export interface propsTypeMenu {
  listCategorieds: menuCategoriedResType
  listNationCategory: menuCategoriedResType
  menuNavbar: {
    name: string
    link: string
    children:
      | {
          name: string
          slug: string
          link: string
        }[]
      | []
  }[]
  className?: string
}
