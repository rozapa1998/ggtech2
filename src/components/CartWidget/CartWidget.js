import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import "./CartWidget.css"


function CartWidget() {
    return (
        <div>
            <li className="nav-item">
          <p className="nav-link active blanco" href="#"><FontAwesomeIcon icon={faShoppingCart}/></p>
        </li>
        </div>
    )
}

export default CartWidget
