import React from 'react'
import "./itemDetail.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"


const ItemDetails = ({img,precio,titulo,descripcion,id}) => {
    return (
        <div className="ItemDetails">
            <div className="card mb-3 grande shadow-lg pt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="Producto"></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">{titulo}</h1>
                        <div className="text-start">
                        <p className="card-text pb-5">{descripcion}</p>
                        </div>
                        <div className="text-end">  
                                <p className="redes px-3"><FontAwesomeIcon icon={faTwitter}/></p>
                                <p className="redes px-3"><FontAwesomeIcon icon={faInstagram}/></p>
                                <p className="redes px-3"><FontAwesomeIcon icon={faWhatsapp}/></p>
                        </div>
                        <div className="card-footer text-end relative-bottom">
                            <h3 className="pt-2">Precio = {precio}</h3>
                            <button className="btn btn-info">Agregar al carrito <FontAwesomeIcon icon={faShoppingCart}/></button>
                            <p className="text-muted pt-2">Last updated 3 mins ago</p>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails
