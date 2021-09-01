import React,{useState} from 'react'
import "./itemDetail.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetails = ({img,precio,titulo,descripcion,id,stock}) => {
    
    const[count, setCount] = useState(null)

    const onAdd = (valor) => {
        valor > 0 ?  setCount(valor) : alert("Agregar producto")
        }
    
    return (
        <div className="ItemDetails">
            <div className="container pt-5">
                <div className="row">
                <div className="card mb-3 grande shadow-lg pt-5">
                <div className="row">
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
                                <FontAwesomeIcon className="redes me-4" icon={faTwitter}/>
                                <FontAwesomeIcon className="redes me-4" icon={faInstagram}/>
                                <FontAwesomeIcon className="redes me-4" icon={faWhatsapp}/>
                        </div>
                        <div className="card-footer text-end relative-bottom">
                            <h3 className="pt-2">Precio =$ {precio}</h3>
                                <div className="container p-3">
                                            <div className="container col-5 count text-end relative-bottom">
                                                <ItemCount
                                                stock={stock - count}
                                                />
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
