import React from 'react'



const FavouriteCard = ({name, img, price}) => {
  return (
    <div className='productCard'>
      <img className='productCard__img' src={img} alt='lady' />
      <div className='productCard__Details' >
        <p className='productCard__Details-name' >{name.slice(0, 40)}</p>
        <p className='productCard__Details-price' >₦{price}</p>
      </div>
      <button className='productCard__Btn' >Add to Cart</button>
    </div>
  )
}

export default FavouriteCard
