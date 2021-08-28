import React from 'react'
import "./Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
    <div className="Footer">
        <div className="container footer">
            <div className="row">
                <div className="col-4 pt-3">
                    <p className="fuente-footer ">Siguenos en nuestras redes</p>
                </div>
                <div className="col-4">

                </div>
                <div className="col-4 pt-3 position-relative top-0 start-0">
                    <FontAwesomeIcon className="text-nosotros mx-3" icon={faInstagram}/>
                    <FontAwesomeIcon className="text-nosotros mx-3" icon={faTwitter}/>
                    <FontAwesomeIcon className="text-nosotros mx-3" icon={faFacebook}/>
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
                    <p className="fuente-footer subrayado">Contacto</p>
                </div>
            </div>
        </div>
    </div>    

    )
}

export default Footer
