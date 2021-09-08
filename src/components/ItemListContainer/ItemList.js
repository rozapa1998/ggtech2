import React, {useState} from 'react'
import Item from "../ItemListContainer/Item"

const ItemList = () => {
    const [productos, setProductos] = useState([])
    


   const myPromise = new Promise((resolve, reject)=>{
       setTimeout(() => {
        const Items =
        [
            {
                id: 0,
                titulo: "Gabinete sentey",
                precio : 10000,
                descripcion: "Sentey sorprende nuevamente con sus nuevos gabinetes...",
                img: "https://www.sintagmatecnologia.com.ar/Temp/App_WebSite/App_PictureFiles/Items/812366026637_800.jpg",
                stock: 15
            },
            {
                id: 1,
                titulo: "Gabinete Cooler Master",
                precio : 15000,
                descripcion: "Gran gabinete de buena aireacion, con luces led rgb",
                img: "https://www.xt-pc.com.ar/img/productos/Pics_Prod/GAB1396.jpg",
                stock: 10
            },
            {
                id: 2,
                titulo: "Gabinete Corsair",
                precio : 20000,
                descripcion: "Gran gabinete de buena aireacion, con luces led rojas",
                img: "https://www.xt-pc.com.ar/img/productos/Pics_Prod/GAB1080.jpg",
                stock: 5
            },
            {
                id: 3,
                titulo: "Auriculares Logitech",
                precio : 14000,
                descripcion: "Excelente sonido y comodidad",
                img: "https://axa.com.ar/webaxa/17661-medium_default/auriculares-gamer-logitech-g432-con-cable-y-sonido-71.jpg",
                stock: 15
            },                    
            {
                id: 4,
                titulo: "Auriculares Razer Kraken",
                precio : 8000,
                descripcion: "Clasicos y confiables",
                img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auricular-gamer-razer-kraken-multiplatform-wired-green-0.jpg",
                stock: 8
            },
            {
                id: 5,
                titulo: "Auriculares HiperX PS",
                precio : 9500,
                descripcion: "Retrocompatibles con PS4",
                img: "https://axa.com.ar/webaxa/18316-medium_default/auriculares-gamer-hyperx-cloud-ps4-con-control-de-audio-integrado.jpg",
                stock: 2
            } 
        ];
        resolve(Items)
       }, 1500);
   })
    myPromise.then(result =>{
        setProductos(result)
    },err => {
        alert("Error" + err)
    })
    
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

