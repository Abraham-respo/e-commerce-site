import React, {useEffect} from 'react'
import { fetchProducts } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import './ProductListing.css'
import Loading from '../Loading/Loading'


const ProductListing = () => {

    const dispatch = useDispatch()

    const allProducts = useSelector(state => state.user.allProducts)
    const isLoading = useSelector(state => state.user.isLoading)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    let content = null

    if (isLoading) {
        content = <Loading />
    }
    else{
        content = allProducts.map(product => {
            return (
                <ProductCard key={product.id} id = {product.id} name = {product.title} price = {product.price} img = {product.image} />
            )
        })
    }


  return (
    <div>
      <h3>Product Lists</h3>
        <div className='productList' >
            {content}
        </div>
    </div>
  )
}

export default ProductListing
