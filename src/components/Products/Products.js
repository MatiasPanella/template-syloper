import React from "react";
import "./Products.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CardItems from "../CardItems/CardItems";

const Products = () => {
  return (
    <>
      <div className="products">
        <h2>Productos</h2>
        <h2>
          Carrito
          <ShoppingCartIcon />
        </h2>
      </div>
      <div className='container'>
        <div className="card__container">
          <CardItems />
        </div>
        
        <aside className="categories">
          <ul>
            <li>HOLA</li>
          </ul>
        </aside>
      </div>
    </>
  );
};
export default Products;
