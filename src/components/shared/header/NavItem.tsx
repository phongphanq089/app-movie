'use client'
import SvgIcon from '@/components/ui/SvgIcon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface propsType {
  menuNavbar?: {
    title: string
    link: string
    children?: {
      title: string
      link: string
    }[]
  }[]
  className?: string
}
;[]

const NavItem = ({ menuNavbar, className }: propsType) => {
  const pathName = usePathname()
  return (
    <ul
      className={`hidden xl:flex navitems-center gap-3 list-menu_nav ${className}`}
    >
      {menuNavbar?.map((navitem, index) => {
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
                    <span>{navitem.title}</span>
                    <SvgIcon icon='chevronDown' />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-fit p-4'>
                  <ul className='grid grid-cols-4 gap-3'>
                    {navitem.children?.map((child, index) => {
                      return (
                        <li key={index} className='hover:text-color-1'>
                          <Link href={child.link}>
                            <span>{child.title}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href={navitem.link}>{navitem.title}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default NavItem
