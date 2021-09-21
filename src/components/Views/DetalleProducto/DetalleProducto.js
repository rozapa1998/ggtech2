import React, {useState, useEffect,} from 'react'
import { useParams } from 'react-router'
import ItemDetails from '../../ItemListContainer/ItemDetails'
import { db } from '../../../firebase'
import { collection, query, getDocs } from '@firebase/firestore'

//Exportamos el create context

const DetalleProducto = () => {
    const {id} = useParams();
    
    const [productosD, setProductoD] = useState([])
    
    const getProducts = async () =>{
        const docs = [];
        const q = query(collection(db, "products"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //Obtenemos los id por separado en un array vacio
           if (doc.id === id) {
            docs.push({...doc.data(), id: doc.id})
           }
        });
        setProductoD(docs[0])
        
    };

   useEffect(() => {
       getProducts();
   }, []);

   

    return (
        <div className="DetalleProducto">
            <div className="row">
                <ItemDetails
                key={productosD.id}
                item={productosD}/>
            </div>
        </div>
    )
}

export default DetalleProducto

