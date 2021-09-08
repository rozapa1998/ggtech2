import React,{useState,} from 'react'
import { Link } from 'react-router-dom';
import "./ItemCount.css"

    
    //Modificadores
    function ItemCount( {onAdd, stock} ) {
        //StateContador
        const [count, setCount] = useState(1);

        //State stock
        const [stockCount, setStockCount] = useState(stock)
        
        //Incrementador
        const agregar = (stock) => {
            if (count > stock) {
                alert("No hay mas Stock de este producto")
            }else{
                setCount(count + 1)
                setStockCount(stockCount - 1)
            }
            
        }
        
        //Decrementador
        const quitar = () => {
            if (count <= 0) {
                alert("El pedido no puede ser menor a 0")
            }else{
                setCount(count - 1)
                if (stockCount === 0) {
                 setStockCount(stock)   
                }else{
                    setStockCount(stockCount + 1)
                }
                
            }
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
            {count > 1 ? <div className="row">
                <div className="col-12 ps-5">
                    <button type="button" id= 'btnCompra' className="btn btn-info"><Link to="/cart">Terminar Compra</Link></button>
                </div>    
            </div>
                : 
                <div className="row">
                <div className="col-12 ps-5">
                    <button type="button" onClick={()=>{
                        onAdd(count)
                        setStockCount(stockCount-count)
                        setCount(1)
                    } } id= 'btnCompra' className="btn btn-info">Agregar al Carrito</button>
                </div>    
            </div>}
            
        </div>
            
        </div>
    )
}

export default ItemCount