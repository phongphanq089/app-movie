import React from 'react'
import WrapperContainer from '../../layout/WrapperContainer'
import { menuNavbar } from '@/data/Navbar'
import NavItem from './NavItem'
import LogoMovie from '../Logo'
import { Button } from '@/components/ui/button'
import SvgIcon from '@/components/ui/SvgIcon'

const Header = () => {
  return (
    <header className='py-3 mb-5'>
      <WrapperContainer>
        <nav className='flex items-center w-full justify-between'>
          <LogoMovie />
          <div className='flex items-center gap-5'>
            <NavItem menuNavbar={menuNavbar} />
            <span className='block xl:hidden'>
              <SvgIcon icon='menu' className='w-[35px] h-auto' />
            </span>

            <Button variant={'stylePage'}>Login</Button>
          </div>
        </nav>
      </WrapperContainer>
    </header>
  )
}

export default Header
