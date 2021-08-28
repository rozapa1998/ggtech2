import React from 'react'
import ItemList from './ItemList'
import "./ItemListContainer.css"

function ItemListContainer() {
    return (
        <div className="ItemListContainer">
        <div className="container">
            <div className="row">
                <div className="col-12 pt-5 py-3">
                    <h1 className="fuente-blanca">Bienvenidos/as a GGTech el lugar de la tecnologia!</h1>
                </div>
                <ItemList/>
            </div> 
        </div>
        
    </div>
    )
}


export default ItemListContainer