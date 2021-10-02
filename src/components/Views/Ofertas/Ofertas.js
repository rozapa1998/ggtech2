import React, {useEffect, useState} from 'react'
import { db } from '../../../firebase';
import ItemOfertas from './ItemOfertas';

const Ofertas = () => {
    
    const [productosO, setProductosO] = useState([])
    
    const getProducts = () =>{
            const docs = [];
            db.collection("products")
            .where("oferta","==",true)
            .onSnapshot((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(), id: doc.id});
                });
                setProductosO(docs)
            });
        
    };

   useEffect(() => {
       getProducts();
   }, []);

    return (
        <div className= "Product container">
            <h1 className="fuente-blanca pt-5">Bienvenidos/as a GGTech el lugar de la tecnologia!</h1>
            <div className="row ms-5">
                {productosO.map(producto => {
                return(
                    <ItemOfertas
                    key={producto.id}
                    item={producto}/>
                )}
                )}
                </div>
        </div>
    )
}

export default Ofertas
