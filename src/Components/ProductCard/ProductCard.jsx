import React from 'react'
import { useDispatch } from 'react-redux'
import { addToFavourite } from '../../Redux/actions'

import './ProductCard.css'

const ProductCard = ({name, img, id, price}) => {

    const dispatch = useDispatch()

    const data = {
        name, 
        id, price,
        img
    }

    const addFavourite = () => {
        dispatch(addToFavourite(data))    
    }

  return (
    <div className='productCard'>
      <img className='productCard__img' src={img} alt='lady' />
      <div className='productCard__Details' >
        <p className='productCard__Details-name' >{name.slice(0, 40)}</p>
        <p className='productCard__Details-price' >₦{price}</p>
      </div>
      <button onClick={addFavourite} className='productCard__Btn' >Add to favourites</button>
    </div>
  )
}

export default ProductCard
