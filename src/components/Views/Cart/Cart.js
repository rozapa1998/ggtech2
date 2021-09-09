import React, { useContext } from 'react'
import CartContextView from '../../CartContext/CartContextView'
import { CartContext} from '../../CartProvider';

const Cart = () => {
    
    const {cart} = useContext(CartContext);
    
    return (
        <div className="Cart">
            <div className="container pt-5">
            <div className="row">
            <div className=" col-12 card Cartcard ">
                <div className="card-body">
                    <h3 className="card-title">Tu Carrito</h3>
                {cart.map(items => {
                    return(
                        <CartContextView
                        key={items.key}
                        cartItem={items}/>
                    )
                })}
            
            </div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default Cart
