import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import ItemDetails from '../../ItemListContainer/ItemDetails'

const DetalleProducto = () => {
    const {id} = useParams(); 
    const [productosD, setProductoD] = useState([null])
    
    useEffect(() => {
        const Items =
         [
             {
                 id: 0,
                 titulo: "Gabinete sentey",
                 precio : 10000,
                 descripcion: "Sentey sorprende nuevamente con sus nuevos gabinetes de la gama gaming, en este caso con el R20.LATERAL VIDRIADO\nEl gabinete gamer Sentey R20 posee una ventana transparente acrilica en su lateral derecho posibilitando la visualizacion de todo el hardware gamer con luz led que le incorpores al equipo.\nPANEL SUPERIOR\nTres puertos USB (1x3.0, 2x2.0) al alcance de tu mano en la parte superior del R20 ofrecen disponibilidad, comodidad y conexion rapida y segura para tus discos y perifericos.LED FRONTALES\nEl gabinete posee un frente minimalista y elegante secundado por dos tiras de luces led que le brindan un aspecto unico e inigualable a tu pc.\nSOPORTE PARA COOLERS\nEl gabinete cuenta con la posiblidad de poder usar hasta 6 coolers.\nHasta 3 frontales, 2 superiores y 1 trasero.",
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
            setProductoD(Items[id])
        return () => {
            setProductoD(Items[id])
        }
    }, [id])
    
    
    return (
        <div className="DetalleProducto">
            <div className="row">
                <ItemDetails
                img={productosD.img}
                titulo={productosD.titulo}
                descripcion={productosD.descripcion}
                precio={productosD.precio}
                stock={productosD.stock}/>
            </div>
        </div>
    )
}

export default DetalleProducto

