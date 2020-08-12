import React from 'react';
import './Products.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CardItems from '../CardItems/CardItems'

const Products = () =>{

    return(
        <>
            <div className='products'>
                <h2>Productos</h2>
                <h2>Carrito<ShoppingCartIcon/></h2>
            </div>
            <div>
                <CardItems />
            </div>
        </>
    )
}
export default Products;