import Beneficios from "../../components/beneficios/beneficios.jsx";
import Header from "../../partials/header/header.jsx";
import tCredito from "../../svg/icon/credito.svg";
import Carro from "../../svg/icon/envio-1.svg";
import Moto from "../../svg/icon/envio-2.svg";

import dataProducts from "../../data/products.js";
import Temporada from "../../components/temporada/temporada.jsx";


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

    const temporadaDescription="Llegó el invierno, encontralo antes que nadie Llegó el invierno, encontralo antes que nadie"

    const etiquetaMsg="Mantené pulsado cualquier artículo para agregarlo al carrito"

    return (
        <div className="app">
        
            <Header itemsCart={3} Msg={etiquetaMsg}/>
            
            <main className="main">
                <Beneficios beneficios={beneficios} key={"beneficios"}/>
                <Temporada temporada={dataProducts} description={temporadaDescription} />
            </main>
        </div>
    );
}

export default Home;