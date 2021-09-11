import React, { useContext } from 'react'
import CartContextView from '../../CartContext/CartContextView'
import { CartContext} from '../../CartProvider';

const Cart = () => {
    
    const {cart} = useContext(CartContext);
    const {clear} = useContext(CartContext);

    const EliminarTodo = () =>{
        clear()
    }
    
    const CalcularPrecio = cart.reduce((acc, item) => {
        return acc + item.precio;
    }, 0 )

    const CalcularCantidad = cart.reduce((acc, item) => {
        return acc + item.cantidad;
    }, 0 )

    const CalcularTotal = () => {
        if(CalcularCantidad === 2){
           return CalcularPrecio * CalcularCantidad / 2
        }else{
            return CalcularPrecio * CalcularCantidad
        }
        
    }


    return (
        <div className="Cart">
            <div className="container pt-5">
            <div className="row">
            <div className=" col-12 card Cartcard ">
                <div className="card-body">
                    <h3 className="card-title">Tu Carrito</h3>
                {cart.map(items => {
                    return(
                        <CartContextView
                        key={items.key}
                        cartItem={items}/>
                    )
                })}
                
            </div>
            <div className="row pb-3">
            <div className="col-4">
            <button className="btn btn-danger" onClick={()=>EliminarTodo()}>Borrar Todo</button>
                </div>
                <div className="col-4">
                
                </div>
                <div className="col-4">
                <p className="card-text fs-4">Total: $ {CalcularTotal()}</p>
                </div>
            </div>
                
                
            </div>
            
            </div>
            </div>
            </div>
    )
}

export default Cart
