import React from 'react'
import chefhat from '../assets/chefhat.svg'
const Header = () => {
  return (
    <header className='flex gap-4 justify-center items-center p-1 shadow-2xl m-1'>
        <img src={chefhat} alt="" className='h-15 w-15' />
        <h1 className='text-4xl font-bold italic'>Chef Claude</h1>
    </header>
  )
}

export default Header