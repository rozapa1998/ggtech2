import React, {useContext} from "react";
import "./itemDetail.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter,faInstagram,faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../CartProvider";


const ItemDetails = ({item}) => {
    
    const {addToCart} = useContext(CartContext);

    const Agregar = (count) => {
        addToCart(item, count);
    }
    
    return (
        <div className="ItemDetails">
            <div className="container pt-5">
                <div className="row">
                <div className="card mb-3 grande shadow-lg pt-5">
                <div className="row">
                    <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt="Producto"></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">{item.title}</h1>
                        <div className="text-start">
                        <p className="card-text pb-5">{item.description}</p>
                        </div>
                        <div className="text-end">  
                                <FontAwesomeIcon className="redes me-4" icon={faTwitter}/>
                                <FontAwesomeIcon className="redes me-4" icon={faInstagram}/>
                                <FontAwesomeIcon className="redes me-4" icon={faWhatsapp}/>
                        </div>
                        <div className="card-footer text-end relative-bottom">
                            <h3 className="pt-2">Precio =$ {item.price}</h3>
                                <div className="container p-3">
                                            <div className="container col-5 count text-end relative-bottom">
                                                <ItemCount
                                                stock={item.stock}
                                                onAdd={Agregar}/>
                                            </div>
                                </div>
                            <p className="text-muted pt-2">Last updated 3 mins ago</p>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetails
