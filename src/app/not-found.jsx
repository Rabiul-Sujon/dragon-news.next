import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-[80vh] font-bold text-6xl text-green-600 flex justify-center items-center flex-col'>OOOPS !!!  This Page Is Not Found.


     <Link href={'/'}>
    <button className='btn btn-ghost text-xl mt-18'>Back to Homepage</button>
    </Link>
    
    </div>
  )
}

export default NotFound
