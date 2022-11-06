import "./Carrusel.scss";
// import Glide from "@glidejs/glide/dist/glide";
// import "../../../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss";
import { useRef } from "react";
import Articulo from "../../articulo/articulo.jsx";

import Glide from 'react-glider';
import 'glider-js/glider.min.css';

import React from 'react'
import Control from "../../control/control";

export const Carrusel = ({products, title}) => {

    const refBtnLeftGlideNove =useRef();
    const refBtnRightGlideNove =useRef();

    const responsiveGliderNovedades= [
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
          
    ];
      


    return (
    <section className="carrusel" key={title}>
        <h4 className="carrusel__title">
            {title}
        </h4>
        <span className="carrusel__link">
            {"ver todo"}
        </span>
        
            <ul className='glide__slides'>
            
                <Glide 
                hasArrows
                arrows={{
                    prev: refBtnLeftGlideNove.current,
                    next: refBtnRightGlideNove.current
                }}
                slidesToShow={2}
                scrollToSlide={2}
                duration={0.5}
                responsive={responsiveGliderNovedades}
                >
                {products.map((product, index)=>{
                    let res=[];
                    
                    res.push(
                        <li className="glide__slide slider">
                            <Articulo product={product} propkey={title+index} />
                        </li>
                    );

                    return res;
                    }
                )}
                </Glide>
            </ul>
        
            <div className="glide__arrows">
                <button className="glide__arrow control" ref={refBtnLeftGlideNove}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.21 10.29C22.117 10.1963 22.0064 10.1219 21.8846 10.0711C21.7627 10.0203 21.632 9.9942 21.5 9.9942C21.368 9.9942 21.2373 10.0203 21.1154 10.0711C20.9936 10.1219 20.883 10.1963 20.79 10.29L13.79 17.29C13.6963 17.383 13.6219 17.4936 13.5711 17.6154C13.5203 17.7373 13.4942 17.868 13.4942 18C13.4942 18.132 13.5203 18.2627 13.5711 18.3846C13.6219 18.5064 13.6963 18.617 13.79 18.71L20.79 25.71C20.883 25.8037 20.9936 25.8781 21.1154 25.9289C21.2373 25.9797 21.368 26.0058 21.5 26.0058C21.632 26.0058 21.7627 25.9797 21.8846 25.9289C22.0064 25.8781 22.117 25.8037 22.21 25.71C22.3037 25.617 22.3781 25.5064 22.4289 25.3846C22.4797 25.2627 22.5058 25.132 22.5058 25C22.5058 24.868 22.4797 24.7373 22.4289 24.6154C22.3781 24.4936 22.3037 24.383 22.21 24.29L15.91 18L22.21 11.71C22.3037 11.617 22.3781 11.5064 22.4289 11.3846C22.4797 11.2627 22.5058 11.132 22.5058 11C22.5058 10.868 22.4797 10.7373 22.4289 10.6154C22.3781 10.4936 22.3037 10.383 22.21 10.29Z" fill="black"/>
                    </svg>
                </button>
                <button className="glide__arrow control" ref={refBtnRightGlideNove}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.79 25.71C13.883 25.8037 13.9936 25.8781 14.1154 25.9289C14.2373 25.9797 14.368 26.0058 14.5 26.0058C14.632 26.0058 14.7627 25.9797 14.8846 25.9289C15.0064 25.8781 15.117 25.8037 15.21 25.71L22.21 18.71C22.3037 18.617 22.3781 18.5064 22.4289 18.3846C22.4797 18.2627 22.5058 18.132 22.5058 18C22.5058 17.868 22.4797 17.7373 22.4289 17.6154C22.3781 17.4936 22.3037 17.383 22.21 17.29L15.21 10.29C15.0217 10.1017 14.7663 9.99591 14.5 9.99591C14.2337 9.99591 13.9783 10.1017 13.79 10.29C13.6017 10.4783 13.4959 10.7337 13.4959 11C13.4959 11.2663 13.6017 11.5217 13.79 11.71L20.09 18L13.79 24.29C13.6963 24.383 13.6219 24.4936 13.5711 24.6154C13.5203 24.7373 13.4942 24.868 13.4942 25C13.4942 25.132 13.5203 25.2627 13.5711 25.3846C13.6219 25.5064 13.6963 25.617 13.79 25.71V25.71Z" fill="black"/>
                    </svg>
                </button>
                <span className="glide__information">
                    4 de 12
                </span>
            </div>
    </section>
  )
}
