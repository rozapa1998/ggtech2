import React,{useState} from 'react'

    
    //Modificadores
    function ItemCount( {data , stock,  onAdd} ) {
        const [count, setCount] = useState(0);
    
        const agregar = (max) => {
            count < max ? setCount(count + 1) : alert('Max. Superada');
        }
    
        const quitar = () => {
            count > 0 ? setCount(count-1) : alert('Min. no posible');
        }
    
    


    //Renderizado
    return (
        <div className="row">
            <div className="col-12 pb-3">
            <p className="card-text">Stock disponible: {stock}</p>
            </div>
            <div className="col-4">
            
            <button type="button" onClick={quitar} className="btn btn-secondary">-</button>
            </div>
            <div className="col-4">
            <input
            id="cantidad"
            value={count}></input>
            </div>
            <div className="col-4">
            <button type="button" onClick={() => agregar(stock)} className="btn btn-success">+</button>
            
            </div>
            <div className="row">
                <div className="col-12 ps-5">
                <button type="button" onClick={() => onAdd(count)} id= 'btnCompra' className="btn btn-info"> Comprar </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount