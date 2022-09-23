import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkNav(props) {
  return (
        <Link
        className='hover:underline text-[#667AE1] font-Singlet '
        to={props.link}
        >
        <p className='text-lg md:text-xl lg:text-2xl'>{props.name}</p>
        </Link>
  )
}
