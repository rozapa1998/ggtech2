import React from 'react'

const ItemCount = ({stockDisponible}) => {
    //Estado
    const [counter, setCounter] = React.useState(1)
    const [stockInit, setStockInit] = React.useState(stockDisponible)
    const [stock, setStock] = React.useState(stockDisponible)
    
    //Modificadores
    const Incrementar = () => {
        if (counter >= stockInit) {
            alert("Superaste el stock")
        }else{
            setCounter(counter + 1);
            setStock(stock - 1)
        }
        
    }

    const Decrementar = () => {
        if (counter <= 0) {
            alert("El stock no puede ser menor a 0")
        }else{
            setCounter(counter - 1);
        }
        
    }

    //Boton Agregar
    const OnAdd = () => {
        setStockInit(stockInit - counter);
        setCounter(0)
    }

    //Control
    const ControlBtnAdd = () => {
        if(stock === 0){
            alert("Ya no queda stock")
        }else{
            OnAdd()
        }
    } 
    
    


    //Renderizado
    return (
        <div className="row">
            <div className="col-12 pb-3">
            <p className="card-text">Stock disponible: {stockInit}</p>
            </div>
            <div className="col-4">
            
            <button type="button" onClick={Decrementar} className="btn btn-secondary">-</button>
            </div>
            <div className="col-4">
            <p>{counter}</p>
            </div>
            <div className="col-4">
            <button type="button" onClick={Incrementar} className="btn btn-success">+</button>
            </div>
            <div className="col-12 pt-4">
            <button type="button" id="btnA" onClick={ControlBtnAdd} className="btn btn-info">Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount