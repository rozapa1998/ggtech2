import React from 'react'
import "./CartContext.css"



const CartContextView = ({cartItem}) => {
    
    
    
    return (
        <div className="CartContext">
            <div className="row">
            <div className=" col-12 card Cartcard ">
                <div className="card-body">
                    <h5 className="card-title">Tu Carrito</h5>
                    <h3>Nombre:{cartItem.titulo}</h3>
                    <h3>Nombre:{cartItem.precio}</h3>
                    <h3>Nombre:{cartItem.img}</h3>
                </div>
            </div>
            </div>
            </div>
    )
}

export default CartContextView
