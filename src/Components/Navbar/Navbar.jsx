import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const favourite = useSelector(state => state.user.favourites)

  const number = favourite.length
  

  return (
    <header>
      <Link className='links' to = '/' >
        <h1>Logo</h1>
      </Link>
      <Link className='fav links' to = '/favourites' >Favourites <span>{number}</span></Link>
    </header>
  )
}

export default Navbar
