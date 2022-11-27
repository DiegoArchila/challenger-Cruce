import { useRef } from "react";
import "./home.scss";

import Beneficios from "../../components/beneficios/beneficios.jsx";
import Header from "../../partials/header/header.jsx";
import tCredito from "../../svg/icon/credito.svg";
import Carro from "../../svg/icon/envio-1.svg";
import Moto from "../../svg/icon/envio-2.svg";

import { searched, Products as dataProducts, Novedades, campana } from "../../data/index.js";
import Temporada from "../../components/temporada/temporada.jsx";
import Marcas from "../../components/marcas/marcas.jsx";
import Dia from "../../components/dia/dia.jsx";
import { Campana, Carrusel, MostWanted } from "../../components/containers";



function Home() {

    
    //-----------------------Refs
    //---GliderNovedades

    const refGliderCarruselNove=useRef();
    const refBtnLeftGlideNove=useRef();
    const refBtnRightGlideNove=useRef();

    const configSliderCarruselNove= {
        settings:{
            slidesToShow:2,
            draggable: false,
            scrollToSlide: 2,
            duration:0.5
        },
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            itemWidth: 210,
            duration: 0.25,
            },
        },{
            breakpoint: 850,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: 210,
            duration: 0.25,
            },
        },{
            breakpoint: 720,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            itemWidth: 210,
            duration: 0.25,
            },
        },{
            breakpoint: 480,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: 150,
            duration: 0.25,
            },
        }
          
    ]};


    //---GliderCampana

    const refGliderCarruselCamp=useRef();
    const refBtnLeftGlideCamp=useRef();
    const refBtnRightGlideCamp=useRef();

    const configSliderCarruselCamp= {
        settings:{
            slidesToShow:1,
            draggable: false,
            scrollToSlide: 1,
            duration:0.5
        },
        responsive: null      
    };

    //---GliderTeRecomendamos
    const refGliderCarruselRecome=useRef();
    const refBtnLeftGlideRecome=useRef();
    const refBtnRightGlideRecome=useRef();

    const configSliderCarruselRecome= {
        settings:{
            slidesToShow:2,
            draggable: false,
            scrollToSlide: 2,
            duration:0.5
        },
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            itemWidth: 210,
            duration: 0.25,
            },
        },{
            breakpoint: 850,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: 210,
            duration: 0.25,
            },
        },{
            breakpoint: 720,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            itemWidth: 210,
            duration: 0.25,
            },
        },{
            breakpoint: 480,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: 150,
            duration: 0.25,
            },
        }
          
    ]};

    //--------------------------

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
                
                <MostWanted masBuscados={searched} key={"masbuscados"} />
                
                <Carrusel 
                    products={Novedades} 
                    title={"Novedades"} 
                    configSlider={configSliderCarruselNove} 
                    propKey={"CarrouselNovedades"} 
                    refGlider={refGliderCarruselNove} 
                    refBtnLeftGlide={refBtnLeftGlideNove}
                    refBtnRightGlide={refBtnRightGlideNove}
                    isCarrusel={true}
                />
                
                <Campana 
                    imgBanner1={campana.banners.banner1} 
                    imgBanner2={campana.banners.banner2} 
                    nameCampana={campana.nameCampana} 
                    products={campana.nameCampana} 
                    key={campana.nameCampana} 
                >
                    <Carrusel
                        products={campana.products} 
                        title={campana.nameCampana} 
                        configSlider={configSliderCarruselCamp} 
                        propKey={"CarrouselCampaña"} 
                        refGlider={refGliderCarruselCamp} 
                        refBtnLeftGlide={refBtnLeftGlideCamp}
                        refBtnRightGlide={refBtnRightGlideCamp}
                        isCarrusel={false}
                    />
                </Campana>

                <MostWanted masBuscados={searched} key={"masbuscados"} isContador={true}/>

                <Carrusel 
                    products={Novedades} 
                    title={"Te recomendamos"} 
                    configSlider={configSliderCarruselRecome} 
                    propKey={"CarrouselNovedades"} 
                    refGlider={refGliderCarruselRecome} 
                    refBtnLeftGlide={refBtnLeftGlideRecome}
                    refBtnRightGlide={refBtnRightGlideRecome}
                    isCarrusel={true}
                />

            </main>
        </div>
    );
}

export default Home;