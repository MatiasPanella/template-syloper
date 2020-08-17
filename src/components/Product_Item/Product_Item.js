import React from "react";
import "./Product_Item.css";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import StoreIcon from "@material-ui/icons/Store";
import CreditCardIcon from '@material-ui/icons/CreditCard';
import {Link} from 'react-router-dom'

const Product_Item = () => {
  const precio = 35000;
  const round = Math.round(precio / 6);
  return (
    <>
      <div className="specify__product">
        <img
          width="500px"
          src="https://cdn.shopify.com/s/files/1/0557/2945/products/Sensor_DHT11_-_ElectroCrea_94445692-919d-48b9-be5d-773d24dc0700_x700.png?v=1546436192"
        />
        <aside>
          <h1>Sensor Foto Electrico</h1>

          <hr></hr>
        <div className='price'>
          <h2 style={{ color: "grey" }}>
            <s>$40.000</s>
          </h2>
          <h1>${precio}</h1>
          <p>Precio en un pago</p>
          </div>
          <br></br>
          <p><CreditCardIcon></CreditCardIcon> 6 cuotas de ${round} </p>
          <hr></hr>

          <p>
            <a href="#" style={{ textDecoration: "none" }}>
              ver mas cuotas y medios de pago
            </a>
          </p>
          
          <button id="buy"><Link to="/carrito">COMPRAR</Link></button>
          <button id="repair">REPARAR</button>

          <hr></hr>
          <div  style={{display:'flex'}}>
          <LocalShippingIcon fontSize="large"/>
          <p style={{fontSize:'10px'}}>Envio a domicilio<br></br>
          Calcular envio</p>
          <StoreIcon fontSize="large" />
          <p  style={{fontSize:'10px'}} >Retiro gratis en sucursales<br></br>
          Ver sucursales disponibles</p>
          </div>
        </aside>
        <p>PERSONAS INTERESADAS EN ESTE PRODUCTO TAMBIEN VIERON</p>
        <hr></hr>
      </div>
    </>
  );
};
export default Product_Item;
