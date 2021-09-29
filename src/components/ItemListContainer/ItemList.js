import React, {useState, useEffect} from 'react'
import Item from "../ItemListContainer/Item"
import { db } from '../../firebase'

const ItemList = () => {
    const [productos, setProductos] = useState([])
    
    const getProducts = () =>{
            const docs = [];
            db.collection("products").onSnapshot((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(), id: doc.id});
                });
                setProductos(docs)
            });
        
    };

   useEffect(() => {
       getProducts();
   }, []);
    
    return (
        <div className= "ItemList container">
            <div className="row ms-5">
                {productos.map(producto => {
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

export default ItemList

