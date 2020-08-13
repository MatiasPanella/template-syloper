import React from "react";
import "./Product_Item.css";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StoreIcon from '@material-ui/icons/Store';

const Product_Item = () => {
  return (
    <>
      <div className="specify__product">
        <img
          width="500px"
          src="https://cdn.shopify.com/s/files/1/0557/2945/products/Sensor_DHT11_-_ElectroCrea_94445692-919d-48b9-be5d-773d24dc0700_x700.png?v=1546436192"
        />
        <aside>
          <h1>Sensor de Temperatura</h1>

          <hr></hr>

          <h2>$40.000</h2>

          <hr></hr>

          <p><a href='#' style={{textDecoration:'none'}}>ver mas cuotas y medios de pago</a></p>
          <button id='buy'>COMPRAR</button>
          <button id='repair'>REPARAR</button>

          <hr></hr>
          <LocalShippingIcon fontSize='large'/>
          <StoreIcon fontSize='large'/>
        </aside>

      </div>
    </>
  );
};
export default Product_Item;
