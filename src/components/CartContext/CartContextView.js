import React, {useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./CartContext.css"
import { CartContext } from '../CartProvider'



const CartContextView = ({cartItem}) => {
    
    const {addToCart} = useContext(CartContext);
    const {removeItem} = useContext(CartContext);

    const Agregar = (count) => {
        addToCart(cartItem, count);
    }

    const Eliminar = (x) =>{
        removeItem(x)
    }


    return (
        <div className="CartContext">
                    <div className="card mb-3 pequeño">
                        <div className="row g-0">
                            <div className="col-md-3">
                            <img src={cartItem.img} class="img-fluid rounded-start imgPequeña" alt="Producto"></img>
                            </div>
                            <div className="col-md-3">
                            <div className="card-body">
                                <h5 className="card-title">{cartItem.titulo}</h5>
                                <p className="card-text">$ {cartItem.precio}</p>
                                <p className="card-text">Cantidad: {cartItem.cantidad}</p>
                            </div>
                            
                            </div>
                            <div class="col-md-3">
                            <ItemCount
                            stock={cartItem.stock}
                            onAdd={Agregar}/>
                            </div>
                            <div class="col-md-2">
                                <p className="card-text center pt-5">Total: $ {cartItem.cantidad*cartItem.precio}</p>
                            </div>
                            <div class="col-md-1">
                                <button type="button" className="btn btn-primary pt-5" onClick={() => Eliminar(cartItem.id)}></button>
                            </div>
                            
                        </div>
                        
                        </div>
                        
                </div>
            
    )
}

export default CartContextView
