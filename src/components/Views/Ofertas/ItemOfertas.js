import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from "../../ItemCount/ItemCount"
import { CartContext } from '../../CartProvider'
import OfertaImg from "../Ofertas/Oferta.png"
import "../Ofertas/ItemOfertas.css"

const ItemOfertas = ({item}) => {
    
    const {addToCart} = useContext(CartContext);

    const Agregar = (count) => {
        addToCart(item, count);
    }
    
    return (
        
            <div className="Item col-4">
                    <div className="card shadow-lg p-3 mb-5 bg-body rounded pequeñas zoomItem">
                    <img src={OfertaImg} className="oferta" alt="Oferta"></img>
                    <Link to={`/detail/${item.id}`}>
                        <img src={item.img} className="card-img-top" alt="Oferta"></img>
                    </Link>
                        <div className="card-body">
                            <h2 className="card-text">$ {item.price}</h2>
                            <h3 className="card-text">{item.title}</h3>
                            <p className="card-text recortar">{item.description}</p>
                        </div>
                        <ItemCount stock={item.stock}
                        onAdd={Agregar}/>
                        
                    </div>
                </div>
    )
}

export default ItemOfertas