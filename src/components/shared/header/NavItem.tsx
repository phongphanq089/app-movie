'use client'
import SvgIcon from '@/components/ui/SvgIcon'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { menuCategoriedResType } from '@/lib/schemaType'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface propsType {
  listCategorieds: menuCategoriedResType
  listNationCategory: menuCategoriedResType
  menuNavbar: {
    name: string
    link: string
    children?:
      | {
          name: string
          slug: string
          link: string
        }[]
  }[]
  className?: string
}

const NavItem = ({
  menuNavbar,
  className,
  listCategorieds,
  listNationCategory,
}: propsType) => {
  const pathName = usePathname()
  const [menuNavbarState, setMenuNavbarState] = useState(menuNavbar || [])

  const [open, setOpen] = React.useState(false)

  const handleCloseModal = () => {
    setOpen(false)
  }

  useEffect(() => {
    setMenuNavbarState((prevMenuNavbar) => {
      const categoryItem = prevMenuNavbar.find(
        (item) => item.name === 'Thể Loại'
      )
      if (categoryItem) {
        categoryItem.children = listCategorieds.map((category) => ({
          name: category.name,
          slug: category.slug,
          link: `/category/${category.slug}?page=1&limit=20`,
        }))
      }
      const nationItem = prevMenuNavbar.find((item) => item.name === 'Quốc Gia')
      if (nationItem) {
        nationItem.children = listNationCategory.map((nation) => ({
          name: nation.name,
          slug: nation.slug,
          link: `/nation-movie/${nation.slug}?page=1&limit=20`,
        }))
      }
      return prevMenuNavbar
    })
  }, [listCategorieds, listNationCategory])

  return (
    <>
      <ul
        className={`hidden xl:flex navitems-center gap-3 list-menu_nav ${className}`}
      >
        {menuNavbarState?.map((navitem, index) => {
          const isActive = navitem.link === pathName
          return (
            <li
              className={`text-lg font-semibold ${
                isActive ? 'active-menu' : ''
              } list-menu_nav__item`}
              key={index}
            >
              {navitem.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className='flex items-center'>
                      <span>{navitem.name}</span>
                      <SvgIcon icon='chevronDown' />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='w-fit p-4 dark:[background:radial-gradient(125%_125%_at_50%_10%,#020130_40%,#0e0548_100%)]'>
                    <ul className='grid grid-cols-4 gap-3'>
                      {navitem.children?.map((child, index) => {
                        const isActive = child.link === pathName

                        return (
                          <li key={index} className='hover:text-color-1'>
                            <Link
                              href={`${child.link}`}
                              className={
                                isActive ? 'text-color-1 font-bold' : ''
                              }
                            >
                              <span>{child.name}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href={`${navitem.link}?page=&limit=20`}>
                  {navitem.name}
                </Link>
              )}
            </li>
          )
        })}
      </ul>

      {/*=============== menu moible navbar ================= */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <span className='block xl:hidden cursor-pointer bg-color-1 p-1 rounded-full'>
            <SvgIcon icon='menu' className='w-[35px] h-auto fill-white' />
          </span>
        </SheetTrigger>

        <SheetContent className='dark:[background:radial-gradient(125%_125%_at_50%_10%,#020130_40%,#0e0548_100%)] menucontent-mobile'>
          <ScrollArea className='h-screen w-full '>
            <ul className={`flex flex-col list-menu_nav ${className}`}>
              {menuNavbarState?.map((navitem, index) => {
                const isActive = navitem.link === pathName
                return (
                  <li
                    className={`text-lg p-1 mb-2 font-semibold ${
                      isActive ? 'active-menu' : ''
                    } list-menu_nav__item`}
                    key={index}
                  >
                    {navitem.children && navitem.children.length > 0 ? (
                      <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem
                          value={navitem.name}
                          className='nav-mobile_item'
                        >
                          <AccordionTrigger>{navitem.name}</AccordionTrigger>
                          <AccordionContent>
                            <ul className='flex flex-wrap gap-1 px-1 py-4'>
                              {navitem.children?.map((child, index) => {
                                const isActive = child.link === pathName

                                return (
                                  <li
                                    key={index}
                                    className='hover:text-color-1 whitespace-nowrap'
                                  >
                                    <Link
                                      href={`${child.link}`}
                                      className={
                                        isActive ? 'text-color-1 font-bold' : ''
                                      }
                                      onClick={() => handleCloseModal()}
                                    >
                                      <Badge className='py-1 px-2'>
                                        <span>{child.name}</span>
                                      </Badge>
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        href={`${navitem.link}?page=&limit=20`}
                        onClick={() => handleCloseModal()}
                      >
                        {navitem.name}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default NavItem
