import React from 'react'
import Logo from "./Logo-GGT.png"
import "./NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons"
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
    <ul className="nav justify-content-center">
  <li className="nav-item px-4">
    <Link to="/" className="nav-link active blanco ml-4"><FontAwesomeIcon icon={faHome}/></Link>
  </li>
  <li className="nav-item px-4">
  <Link to="/nosotros" className="nav-link active blanco">Nosotros</Link>
  </li>
  <li className="nav-item px-4">
  <Link to="/contacto" className="nav-link active blanco" href="#">Contacto</Link>
  </li>
  <li>
    <img className="logo px-3" src={Logo} alt="Logo"></img>
  </li>
  <li className="nav-item px-4">
  <Link to="/ofertas" className="nav-link active blanco" href="#">Ofertas</Link>
  </li>
  <li className="nav-item px-4">
  <Link to="/componentes" className="nav-link active blanco" href="#">Componentes</Link>
  </li>
  <li className="nav-item px-4">
  <Link to="/cart"><CartWidget/></Link>
  </li>
</ul>
</nav>


    
  )
}

export default NavBar
