import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import "./CartWidget.css"
import { CartContext } from '../CartProvider';


function CartWidget() {
    const {cart} = useContext(CartContext)

    const ItemsTotales = cart.reduce((acc, item)=>{
        return acc + item.cantidad;
    }, 0)

    return (
        <div>
            <li className="nav-item">
            <FontAwesomeIcon className="blanco mt-3" icon={faShoppingCart}>
            </FontAwesomeIcon><span className="translate-middle badge rounded-pill bg-danger">{ItemsTotales}</span>
        </li>
        </div>
    )
}

export default CartWidget
