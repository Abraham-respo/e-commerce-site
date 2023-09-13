import React from 'react'
import { useSelector } from 'react-redux'
import FavouriteCard from '../../Components/FavouriteCard/FavouriteCard'

const Favourites = () => {

    const favourites = useSelector(state => state.user.favourites)

    let favContent = <p>No Favourite Item yet</p>

    if (favourites.length > 0){
        favContent = favourites.map(favouriteItem => {
            return (
                <FavouriteCard key = { favouriteItem.id} name = {favouriteItem.name} price={favouriteItem.price} img={favouriteItem.img} />
            )
        })   
    }
    else{
        return favContent
    }
  return (
    <div>
      <p>My Favourites</p>
      <div className='productList'>
        {
            favContent
        }
      </div>
    </div>
  )
}

export default Favourites
