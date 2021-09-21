import React, {useState, useEffect} from 'react'
import Item from "../ItemListContainer/Item"
import { db } from '../../firebase'
import { collection, query, getDocs } from '@firebase/firestore'

const ItemList = () => {
    const [productos, setProductos] = useState([])
    
    const getProducts = async () =>{
        const docs = [];
        const q = query(collection(db, "products"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            
            //Obtenemos los id por separado en un array vacio
            docs.push({...doc.data(), id: doc.id})

        });
        setProductos(docs)
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

