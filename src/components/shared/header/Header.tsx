import React from 'react'
import WrapperContainer from '../../layout/WrapperContainer'
import { menuNavbar } from '@/data/Navbar'
import NavItem from './NavItem'
import LogoMovie from '../Logo'
import movieApiRequest from '@/api-request'
import SearchMovies from '../SearchMovies'

const Header = async () => {
  const listCategorieds = await movieApiRequest.menuCategory('/the-loai')
  const listNationCategory = await movieApiRequest.nationCategoryMenu(
    '/quoc-gia'
  )
  return (
    <>
      <header className='mb-[100px] py-3'>
        <WrapperContainer>
          <nav className='flex container-3xl items-center justify-between fixed w-full top-1 z-[20] py-3 px-4 left-1/2 translate-x-[-50%] dark:[background:radial-gradient(125%_125%_at_50%_10%,#020130_40%,#0e0548_100%)] bg-light border rounded-full'>
            <LogoMovie />
            <div className='flex flex-row-reverse xl:flex-row items-center gap-2 xl:gap-5'>
              {/* <ModeToggle /> */}
              <NavItem
                menuNavbar={menuNavbar}
                listNationCategory={listNationCategory.payload}
                listCategorieds={listCategorieds.payload}
              />
              <SearchMovies />
            </div>
          </nav>
        </WrapperContainer>
      </header>
    </>
  )
}

export default Header
