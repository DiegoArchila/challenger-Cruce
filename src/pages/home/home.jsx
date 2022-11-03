import "./home.scss";

import Beneficios from "../../components/beneficios/beneficios.jsx";
import Header from "../../partials/header/header.jsx";
import tCredito from "../../svg/icon/credito.svg";
import Carro from "../../svg/icon/envio-1.svg";
import Moto from "../../svg/icon/envio-2.svg";

import { searched, Products as dataProducts, Novedades } from "../../data/index.js";
import Temporada from "../../components/temporada/temporada.jsx";
import Marcas from "../../components/marcas/marcas.jsx";
import Dia from "../../components/dia/dia.jsx";
import { Carrusel, MostWanted } from "../../components/containers";



function Home() {


    const beneficios=[
        {   
            title:"12 y 18 Cuotas",
            description:"¡Sin interés!",
            beneficio: true,
            icon: tCredito
        },
        {        
            title:"Envío gratis",
            description:"En todas las compras",
            beneficio: true,
            icon:Carro
        },
        {        
            title:"Te llega en 24hs",
            description:"Con costo adicional",
            beneficio: false,
            icon:Moto
        }
    ];

    const temporada={
        title: "Llegó el invierno, encontralo antes que nadie.",
        description:"La colección más completa de Game of Thrones está en X",
        tempProducts:dataProducts
    };

    const productDay=dataProducts[1];

    const marcas=[
        "disney.png",
        "funko.png",
        "lol.png",
        "marvel.png"
    ]


    const etiquetaMsg="Mantené pulsado cualquier artículo para agregarlo al carrito"

    return (
        <div className="app">
        
            <Header itemsCart={3} Msg={etiquetaMsg}/>
            
            <main className="main">
                <Beneficios beneficios={beneficios} key={"beneficios_desktop"} id={"beneficios__desktop"} />
                <Temporada temporada={temporada} key="temporada"/>
                <Marcas marcas={marcas} key="marcas" />
                <Beneficios beneficios={beneficios} key={"beneficios_mobile"} id="beneficios__mobile"/>
                <Dia productDay={ productDay } key="dia" />
                <MostWanted masBuscados={searched} />
                <Carrusel products={Novedades} title={"Novedades"} key={"CarrouselNovedades"}/>
            </main>
        </div>
    );
}

export default Home;