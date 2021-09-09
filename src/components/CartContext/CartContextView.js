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
        removeItem(x);
    }


    return (
        <div className="CartContext">
                    <div class="card mb-3 pequeño">
                        <div class="row g-0">
                            <div class="col-md-3">
                            <img src={cartItem.img} class="img-fluid rounded-start imgPequeña" alt="Producto"></img>
                            </div>
                            <div class="col-md-3">
                            <div class="card-body">
                                <h5 class="card-title">{cartItem.titulo}</h5>
                                <p class="card-text">$ {cartItem.precio}</p>
                                <p class="card-text">Cantidad: {cartItem.cantidad}</p>
                            </div>
                            
                            </div>
                            <div class="col-md-3">
                            <ItemCount
                            stock={cartItem.stock}
                            onAdd={Agregar}/>
                            </div>
                            <div class="col-md-2">
                                <p class="card-text center pt-5">Total: $ {cartItem.cantidad*cartItem.precio}</p>
                            </div>
                            <div class="col-md-1">
                            <button type="button" class="btn-close pt-5" onClick={Eliminar(cartItem.id)} data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            
                        </div>
                        
                        </div>
                        
                </div>
            
    )
}

export default CartContextView
