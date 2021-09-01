import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./item.css"

const Item = ({id,img,precio,titulo,descripcion,stockDisponible}) => {
    return (
        
            <div className="Item col-4">
                
                    <div className="card shadow-lg p-3 mb-5 bg-body rounded pequeñas">
                    <Link to={`/detail/${id}`}>
                        <img src={img} className="card-img-top" alt="Oferta"></img>
                    </Link>
                        <div className="card-body">
                            <h2 className="card-text">$ {precio}</h2>
                            <h3 className="card-text">{titulo}</h3>
                            <p className="card-text">{descripcion}</p>
                        </div>
                        <ItemCount stockDisponible={stockDisponible}/>
                        
                    </div>
                </div>
            
                
        
    )
}

export default Item
