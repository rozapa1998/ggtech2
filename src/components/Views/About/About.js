import Logo from "../../NavBar/Logo-GGT.png"
import React from 'react'
import "./About.css"

const About = () => {
    return (
        <div className="Contacto">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-6 pt-5">
                        <img className="logoNosotros" src={Logo} alt="Logo"></img>
                    </div>
                    <div className="col-6 pt-5">
                        <p className="text-nosotros pt-5 mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
