import React from "react";
import "./Trolly.css";

const Trolly = () => {
  return (
    <>
      <div className="trolly__container">
        <h1>Carrito</h1>
        <div className="grid__header">
          <div className="cell cell-1">Producto</div>
          <div className="cell cell-2">Precio</div>
          <div className="cell cell-3">Cantidad</div>
          <div className="cell cell-4">Total</div>
        </div>
        <br></br>
        <div className="grid__product">
          <div className="cell cell-5">{JSON.parse(localStorage.getItem('productos'))[1].nombre}</div>
          <div className="cell cell-6">{JSON.parse(localStorage.getItem('productos'))[1].price}</div>
          <div className="cell cell-7">2</div>
          <div className="cell cell-8">{(JSON.parse(localStorage.getItem('productos'))[1].price)*2}.000</div>
        </div>
        <aside className="recipt">
          <h1>Precio Final</h1>
          <div className="sub-tot">
          <div className="celda-1">SubTotal</div>
          <div className="celda-2">{(JSON.parse(localStorage.getItem('productos'))[1].price)*2}.000</div>
          </div>
          <div className="total">
          <div className="celda-3">Total</div>
          <div className="celda-4">{(JSON.parse(localStorage.getItem('productos'))[1].price)*2}.000</div>
          </div>
          <button id="btn-recipt">COMPRAR</button>
        </aside>
      </div>
    </>
  );
};
export default Trolly;
