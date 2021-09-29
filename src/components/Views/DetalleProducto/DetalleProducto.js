import React, {useState, useEffect,} from 'react'
import { useParams } from 'react-router'
import ItemDetails from '../../ItemListContainer/ItemDetails'
import { db } from '../../../firebase'

//Exportamos el create context

const DetalleProducto = () => {
    const {id} = useParams();
    
    const [productosD, setProductoD] = useState([])
    
    

   useEffect(() => {
    
    const getProducts = () =>{
        const docs = [];
        db.collection("products").onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                if (doc.id === id) {
                docs.push({...doc.data(), id: doc.id});
                }
            });
            setProductoD(docs[0])
        });
        
        
    };   
    getProducts();
   }, [id]);

   

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

