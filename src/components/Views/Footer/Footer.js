import React from 'react'
import "./Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    
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
    <div className="Footer">
        <div className="container footer mt-4">
            <div className="row">
                <div className="col-4 pt-3">
                    <p className="fuente-footer ">Siguenos en nuestras redes</p>
                </div>
                <div className="col-4">

                </div>
                <div className="col-4 pt-3 position-relative top-0 start-0">
                    <FontAwesomeIcon className="text-nosotros mx-3 zoomRedes" id="Instagram" onClick={handlerRedirect} icon={faInstagram}/>
                    <FontAwesomeIcon className="text-nosotros mx-3 zoomRedes" id="Twitter"   onClick={handlerRedirect} icon={faTwitter}/>
                    <FontAwesomeIcon className="text-nosotros mx-3 zoomRedes" id="Whatsapp"  onClick={handlerRedirect} icon={faWhatsapp}/>
                </div>
            </div>
            <div className="row footer-row pt-2">
                <div className="col-4">
                    <p className="fuente-footer subrayado">GG-TETCH</p>
                </div>
                <div className="col-4">
                    <p className="fuente-footer"></p>
                </div>
                <div className="col-4">
                    <p className="fuente-footer subrayado">Contacto</p>
                </div>
            </div>
            <div className="row footer-row pt-2">
            <div className="col-1">
                    <p className="fuente-footer"></p>
                </div>
                <div className="col-2">
                    <p className="fuente-footer descripcion-footer">Somos una empresa dedicada a la venta de insumos electrodomesticos</p>
                </div>
                <div className="col-5">
                    <p className="fuente-footer"></p>
                </div>
                <div className="col-4">
                    <p className="fuente-footer descripcion-footer"><FontAwesomeIcon icon={faPhone}/> +54 11-0000-0000</p>
                    <p className="fuente-footer descripcion-footer"><FontAwesomeIcon icon={faEnvelope}/> ejemplo.rz@gmail.com</p>
                </div>
            </div>
        </div>
    </div>    

    )
}

export default Footer
