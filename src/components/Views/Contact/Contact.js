import React from 'react'
import "../Contact/contacto.css"
import { faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Contact = () => {
    
    const handlerRedirect = (e) =>{
        if (e.target.id === "Instagram") {
            window.open("https://www.instagram.com/")
        }else if (e.target.id === "Twitter") {
            window.open("https://twitter.com/")
        }else if (e.target.id === "Whatsapp") {
            window.open("https://wa.me/5491168165044?text=Hola!%20Queria%20saber%20si...%20")
        }
    }
    
    return (
        <div className="container">
            <div className="row pt-5">
                <div className="card container">
                    <div className="col-12 pt-3">
                        <h1>Contactanos!</h1>
                    </div>
                    <div className="row pt-4">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <form>
                                        <div className="form-group">
                                            <p>Nombre y Apellido</p>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre y Apellido"></input>
                                            <p><small id="emailHelp" className="form-text text-muted"></small></p>
                                        </div>
                                        <div className="form-group">
                                            <p>Email</p>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                            <p><small id="emailHelp" className="form-text text-muted">No compartiremos esta informacion con nadie mas.</small></p>
                                        </div>
                                        <div className="form-group">
                                            <p >Telefono</p>
                                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Telefono"></input>
                                            <p><small id="emailHelp" className="form-text text-muted">No compartiremos esta informacion con nadie mas.</small></p>
                                        </div>
                                        <div class="form-group">
                                            <p>Escribenos tu consulta</p>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Hola! Queria saber si..."></textarea>
                                        </div>
                                        <div className="pt-3">
                                            <button type="submit" className="btn btn-primary">Enviar</button>
                                        </div>
                                        
                            </form>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 pt-3">
                                <p>Una vez enviado el formulario recibiremos tu consulta, una vez procesada tendras una contestacion en la brevedad, muchas gracias por tu interes en nuestros productos.</p>
                        </div>

                        <div className="col-12">
                                <p>Tambien podes seguirnos o enviarnos un mensage directo a nuestras redes o comunicarte mediante Whatsapp</p>
                        </div>
                        <div className="col-12 pt-2 pb-4">
                                    <FontAwesomeIcon className="me-5 redesContacto zoomRedes" id="Instagram" onClick={handlerRedirect} icon={faInstagram}/>
                                    <FontAwesomeIcon className="me-5 redesContacto zoomRedes" id="Twitter"   onClick={handlerRedirect} icon={faTwitter}/>
                                    <FontAwesomeIcon className="me-5 redesContacto zoomRedes" id="Whatsapp"  onClick={handlerRedirect} icon={faWhatsapp}/>
                        </div>
                    </div>
                        
                </div>
                
            </div>
            <div className="row pt-5">
                
                
            </div>
        </div>
    )
}

export default Contact
