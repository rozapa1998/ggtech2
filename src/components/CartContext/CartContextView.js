import React, {useContext} from 'react'
import "./CartContext.css"
import { CartContext } from '../CartProvider'



const CartContextView = ({cartItem}) => {
    
    //const {addToCart} = useContext(CartContext);
    const {removeItem} = useContext(CartContext);
    

    /*const Agregar = (count) => {
        addToCart(cartItem, count);
    }*/

    const Eliminar = (x) =>{
        removeItem(x)
    }

    let precioItemMult = cartItem.cantidad*cartItem.price

    

    


    return (
        <div className="CartContext">
                    <div className="card mb-3 pequeño">
                        <div className="row g-0">
                            <div className="col-md-3">
                            <img src={cartItem.img} className="img-fluid rounded-start imgPequeña" alt="Producto"></img>
                            </div>
                            <div className="col-md-3">
                            <div className="card-body">
                                <h5 className="card-title">{cartItem.title}</h5>
                                <p className="card-text">$ {cartItem.price}</p>
                                <p className="card-text">Cantidad: {cartItem.cantidad}</p>
                            </div>
                            
                            </div>
                            <div className="col-md-3">
                            
                            </div>
                            <div className="col-md-2">
                                <p className="card-text center pt-5">Total: $ {precioItemMult}</p>
                            </div>
                            <div className="col-md-1">
                                <button type="button" className="btn-close pt-5" onClick={() => Eliminar(cartItem.id)}></button>
                            </div>
                            
                        </div>
                            
                        </div>
                        
                </div>
    )
}

export default CartContextView
