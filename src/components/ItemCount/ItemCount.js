import React,{useState,} from 'react'
import { Link } from 'react-router-dom';
import "./ItemCount.css"

    
    //Modificadores
    function ItemCount( {onAdd, stock} ) {
        //StateContador
        const [count, setCount] = useState(0);

        //State stock
        const [stockCount, setStockCount] = useState(stock)
        
        //Incrementador
        const agregar = (max) => {
            count < max ? setCount(count + 1) : alert('Max. Superada');
        }
        
        //Decrementador
        const quitar = () => {
            count > 0 ? setCount(count-1) : alert('Min. no posible');
        }
    
    //Funciones Eventos
    const onChangeValue = (e) => {
        setCount(e.target.value)
    }

    //Renderizado
    return (
        <div className="row">
            <div className="col-12 pb-3">
                <p className="card-text">Stock disponible: {stockCount}</p>
            </div>
        <div className="row ms-1">
            <div className="col-4">
            
                <button type="button" onClick={quitar} className="btn btn-secondary">-</button>
            </div>
            <div className="col-4">
                <form>
                <input className="inputCount"
                
                id="cantidad"
                onChange={onChangeValue}
                value={count}
                >

                </input>
                </form>
            </div>
            <div className="col-4">
                <button type="button" onClick={() => agregar(stock)} className="btn btn-success">+</button>
            </div>
            {count >= 1 ? <div className="row">
                <div className="col-12 ps-5">
                    <button type="button" onClick={()=>{
                        onAdd(count)
                        setCount(0)
                    } } id= 'btnCompra' className="btn btn-info"><Link to="/cart">Comprar</Link></button>
                </div>
                
            </div>: null}
            
        </div>
            
        </div>
    )
}

export default ItemCount