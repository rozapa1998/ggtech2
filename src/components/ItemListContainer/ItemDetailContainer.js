import React, {useState} from 'react'
import ItemDetails from './ItemDetails';


const ItemDetailContainer = () => {
   //Estado
    const [items, setItem] = useState([]) 
   
   //Promesa
   const getItems = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const ItemD = [{
            id: 1,
            img: "https://www.sintagmatecnologia.com.ar/Temp/App_WebSite/App_PictureFiles/Items/812366026637_800.jpg",
            titulo: "Gabinete Sentey",
            precio: 10000,
            descripcion: 'Sentey sorprende nuevamente con sus nuevos gabinetes de la gama gaming, en este caso con el R20.LATERAL VIDRIADO\nEl gabinete gamer Sentey R20 posee una ventana transparente acrilica en su lateral derecho posibilitando la visualizacion de todo el hardware gamer con luz led que le incorpores al equipo.\nPANEL SUPERIOR\nTres puertos USB (1x3.0, 2x2.0) al alcance de tu mano en la parte superior del R20 ofrecen disponibilidad, comodidad y conexion rapida y segura para tus discos y perifericos.LED FRONTALES\nEl gabinete posee un frente minimalista y elegante secundado por dos tiras de luces led que le brindan un aspecto unico e inigualable a tu pc.\nSOPORTE PARA COOLERS\nEl gabinete cuenta con la posiblidad de poder usar hasta 6 coolers.\nHasta 3 frontales, 2 superiores y 1 trasero.'                
        }];
     resolve(ItemD)
    }, 2000);
})
 getItems.then(result =>{
     setItem(result)
 },errorDetail => {
     alert("Error" + errorDetail)
 })
    
    
    //Renderizado
    return (
        <div className="ItemDetailContainer">
            <div className="container">
                <div className="row">
                    {items.map(item => {
                        return(
                    <ItemDetails
                    key=          {item.id} 
                    img =         {item.img}
                    id =          {item.id}
                    precio =      {"$"+ item.precio}
                    titulo =      {item.titulo}
                    descripcion = {item.descripcion}/>
                    )}
                    )}

                    </div>
            </div>
            
        </div>
    )
}


export default ItemDetailContainer
