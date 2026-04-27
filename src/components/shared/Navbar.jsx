import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <div className='flex justify-between container mx-auto mt-4'>
      <div></div>
      <ul className='flex justify-between items-center gap-6 font-semibold text-gray-700'>
        <li>
          <NavLink href={'/'}> Home </NavLink>
          </li>
        <li>
          <NavLink href={'/about-us'}>About</NavLink>
          </li>
        <li>
          <NavLink href={'/career'}>Career</NavLink>
          </li>
      </ul>

      <div className='flex items-center gap-4'>
        <Image src={userAvatar} alt='user avatar' width={60} height={60}/>
        <button className='btn bg-red-400 text-white'>
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar