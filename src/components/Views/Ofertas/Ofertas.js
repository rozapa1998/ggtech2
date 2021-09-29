import React, {useEffect, useState} from 'react'
import { db } from '../../../firebase';
import Item from '../../ItemListContainer/Item';

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

export default Ofertas
