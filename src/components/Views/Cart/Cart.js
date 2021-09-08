import React, { useContext } from 'react'
import CartContextView from '../../CartContext/CartContextView'
import { CartContext} from '../../CartProvider';

const Cart = () => {
    
    const {cart} = useContext(CartContext);
    
    return (
        <div className="Cart">
            <div className="container pt-5">
            <CartContextView
            cartItem={cart}/>
            </div>
            
        </div>
    )
}

export default Cart
