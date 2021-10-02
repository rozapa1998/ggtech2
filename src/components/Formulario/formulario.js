import React, {useState,useContext} from 'react'
import { db } from '../../firebase'
import { CartContext } from '../CartProvider';



const Formulario = ({importeCart}) => {
    
    //Contexto del carrito
    const {cart} = useContext(CartContext);

    //Estado de los datos del Form
    const [nombre, setNombre]       = useState("")
    const [direccion, setDireccion] = useState("")
    const [email, setEmail]         = useState("")
    
    //Handler de los datos para su actualizacion
    const handleOnchange = (e) =>{
        if (e.target.name === "Nombre") {
            setNombre(e.target.value)
        }else if (e.target.name === "Email") {
            setEmail(e.target.value)
        }else if (e.target.name === "Direccion") {
            setDireccion(e.target.value)
        }
    }

    //Funcionalidada para agregar a la BD
    const addCliente = async (e) =>{
        const pedido = []

        cart.forEach(e => {
            pedido.push({title: e.title, cantidad: e.cantidad, precio: e.price})
        });
        
        const Cliente ={
            Nombre: nombre,
            Email: email,
            Direccion: direccion,
            Importe: importeCart,
            Pedido: JSON.stringify(pedido)
        }
        
        e.preventDefault()
        await db.collection("compras").doc().set(Cliente)


        
    }
    
    
    return (
        <div className="Formulario">
            
            
            <div className="container pb-4">
                <div className="row">
                    <div className="col-4">
                    </div>
                    
                    <div className="col-4 card p-4">
                        <h3>Formulario de Compra</h3>
                    <form>
                        <div className="mb-3">
                                <label  className="form-label">Nombre y Apellido</label>
                                <input type="text" className="form-control" id="inputNombre" name="Nombre" aria-describedby="emailHelp" value={nombre} onChange={handleOnchange}></input>
                                <div id="emailHelp" className="form-text">Nombre y apellido de quien va a recibir la compra.</div>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Email address</label>
                            <input type="email" className="form-control" id="InputEmail" name="Email" aria-describedby="emailHelp" value={email} onChange={handleOnchange}></input>
                            <div id="emailHelp" className="form-text">No compartiremos tu e-mail con nadie más.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Direccion</label>
                            <input type="text" className="form-control" id="InputPassword" name="Direccion" value={direccion} onChange={handleOnchange}></input>
                            <div id="emailHelp" className="form-text">Direccion de envio, piso y depto si aplica.</div>
                        </div>
                        
                        <button onClick={addCliente} className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    
                    <div className="col-4">
                    </div>
                </div>
            </div>
        </div>
    )
}

export  {Formulario}

