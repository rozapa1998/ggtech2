import React, {useEffect, useState} from 'react'
import Item from "../../ItemListContainer/Item"
import {db} from "../../../firebase"

const Componentes = () => {
    
    const [productosO, setProductosO] = useState([])
    
    const getProducts = () =>{
            const docs = [];
            db.collection("products")
            .where("tipo","==", "componente")
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
            <h1 className="fuente-blanca pt-5">Componentes</h1>
            <div className="row ms-5">
                {productosO.map(producto => {
                return(
                    <Item
                    key={producto.id}
                    item={producto}/>
                )}
                )}
                </div>
        </div>
    )
}

export default Componentes
