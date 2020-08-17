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
      <div className="container">
        <div className="card__container">
          <CardItems />
        </div>

        <aside className="categories">
          <h2>Categorias</h2>
          <ul>
            <li>Clothing</li>
            <ul>
              <li>Bags</li>
              <li>Dresses</li>
              <li>Hats</li>
              <li>Footwear</li>
              <li>Shirts</li>
            </ul>
          </ul>
          <ul>
            <li>Electronics</li>
            <ul>
              <li>Notebook's</li>
              <li>Cameras</li>
              <li>Phones</li>
              <li>Smartwatchs</li>
              <li>Accesories</li>
            </ul>
          </ul>
          <ul>
            <li>Clothing</li>
            <ul>
              <li>Bags</li>
              <li>Dresses</li>
              <li>Hats</li>
              <li>Footwear</li>
              <li>Shirts</li>
            </ul>
          </ul>
        </aside>
      </div>
    </>
  );
};
export default Products;
