import React, {useState,useContext} from 'react'
import { db } from '../../firebase'
import { CartContext } from '../CartProvider';
import "../Formulario/formulario.css"




const Formulario = ({importeCart}) => {
    
    //Contexto del carrito
    const {cart} = useContext(CartContext);

    //Estado de los datos del Form
    const [nombre, setNombre]               = useState("")
    const [direccion, setDireccion]         = useState("")
    const [email, setEmail]                 = useState("")
    const [telefono, setTelefono]           = useState("")
    const [ModalA, setModalA]               = useState("modal")
    const [Norden, setNorden]               = useState("")
    
    
    //Handler de los datos para su actualizacion
    const handleOnchange = (e) =>{
        if (e.target.name === "Nombre") {
            setNombre(e.target.value)
        }else if (e.target.name === "Email") {
            setEmail(e.target.value)
        }else if (e.target.name === "Direccion") {
            setDireccion(e.target.value)
        }else if (e.target.name === "Telefono") {
            setTelefono(e.target.value)
        }
    }

    //Handler del modal
    

    

    //Funcionalidada para agregar a la BD las compras
    const addCliente = async (e) =>{
        const pedido = []

        cart.forEach(e => {
            pedido.push({title: e.title, cantidad: e.cantidad, precio: e.price})
        });
        
        const Cliente ={
            Nombre: nombre,
            Email: email,
            Telefono: telefono,
            Direccion: direccion,
            Importe: importeCart,
            Pedido: JSON.stringify(pedido),
            fecha: new Date()
        }
        
        e.preventDefault()
        await db.collection("compras").doc().set(Cliente)
        
        const compras = []

        db.collection("compras").onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                compras.push({...doc.data(), id: doc.id});
                
        })
        
        let posicion = compras.length - 1

        if (compras.length === 0) {
            setNorden(compras[0].id)
        }else{
            setNorden(compras[posicion].id)
        }
        
    });
         setModalA("modal mostrar")
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
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="text" className="form-control" id="InputTelefono" name="Telefono" value={telefono} onChange={handleOnchange}></input>
                            <div id="emailHelp" className="form-text">En el caso de que necesitemos comunicarnos.</div>
                        </div>
                        
                        <button onClick={addCliente} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    
                    <div className="col-4">
                    <div className={ModalA} tabindex="-1">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Gracias por tu compra!</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>En unos instantes nos vamos a poner en contacto con vos...</p>
                                        <p>Tu importe total es de:  $ {importeCart}</p>
                                        <p>Tu id de pedido es el: <strong> {Norden}</strong></p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={()=>setModalA("modal")}>Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                    </div>
                </div>
                     
            </div>
        </div>
    )
}

export  {Formulario}

