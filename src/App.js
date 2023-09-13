import React, {useEffect, useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMode,getUserInput,  } from './Redux/actions'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Favourites from './Pages/Favourites/Favourites'

const App = () => {

  const isDark = useSelector(state => state.user.isDark)
  // const userEmail = useSelector(stXUate => state.user.email)

  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [dispatch])

  console.log(isDark)

  const toggleScreen = () =>{
    dispatch(toggleMode())
  }

  return (
     <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/favourites' element = {<Favourites />} />
      </Routes>
     </div>
  )
}

export default App;
