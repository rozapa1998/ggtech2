import React, { useContext } from 'react'
import CartContextView from '../../CartContext/CartContextView'
import { CartContext} from '../../CartProvider';

const Cart = () => {
    
    const {cart} = useContext(CartContext);
    const {clear} = useContext(CartContext);
    const {CalcularTotal} = useContext(CartContext);

    const EliminarTodo = () =>{
        clear()
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
                        key={items.id}
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
                <p className="card-text fs-4">Total: $ {CalcularTotal}</p>
                </div>
            </div>
                
                
            </div>
            
            </div>
            </div>
            </div>
    )
}

export default Cart
