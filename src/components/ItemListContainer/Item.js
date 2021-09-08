import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./item.css"
import { CartContext } from "../CartProvider";

const Item = ({item}) => {
    
    const {addToCart} = useContext(CartContext);

    const Agregar = (count) => {
        addToCart(item, count);
    }
    
    return (
        
            <div className="Item col-4">
                
                    <div className="card shadow-lg p-3 mb-5 bg-body rounded pequeñas zoomItem">
                    <Link to={`/detail/${item.id}`}>
                        <img src={item.img} className="card-img-top" alt="Oferta"></img>
                    </Link>
                        <div className="card-body">
                            <h2 className="card-text">$ {item.precio}</h2>
                            <h3 className="card-text">{item.titulo}</h3>
                            <p className="card-text">{item.descripcion}</p>
                        </div>
                        <ItemCount stock={item.stock}
                        onAdd={Agregar}/>
                        
                    </div>
                </div>
            
                
        
    )
}

export default Item
