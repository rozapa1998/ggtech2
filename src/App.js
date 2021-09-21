//Css
import './App.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//NavBar
import NavBar from './components/NavBar/NavBar';
//React Router-DOM
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//Views
import Home from './components/Views/Home/Home';
import Contact from './components/Views/Contact/Contact';
import About from './components/Views/About/About';
import Ofertas from './components/Views/Ofertas/Ofertas';
import Componentes from './components/Views/Componentes/Componentes';
import DetalleProducto from './components/Views/DetalleProducto/DetalleProducto';
import Cart from './components/Views/Cart/Cart';
import Footer from './components/Views/Footer/Footer';
//ItemsProvider
import { CartProvider } from './components/CartProvider';

const App = () => {
  return(
    <Router>
     <CartProvider>
    <div className="App">
      <NavBar title="NavBar"/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contacto" component={Contact}/>
        <Route path="/nosotros" component={About}/>
        <Route path="/ofertas" component={Ofertas}/>
        <Route path="/componentes" component={Componentes}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/detail/:id" component={DetalleProducto}/>
      </Switch>
      <Footer/>
    </div>
    </CartProvider>
    </Router>
    
  );
}

export default App;
