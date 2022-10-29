import { Fragment, useEffect } from "react";
import "./beneficios.scss";
import Glide from "@glidejs/glide/dist/glide";
import "../../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss";


/**
     * Settings Slider
     */
 const sliderConfiguration= {
    gap:10,
    focusAt: "center",
    type: 'carousel',
    autoplay: 3000,
    animationDuration: 1000,
    animationTimingFunc: 'linear',
    perView:6,

    breakpoints:{
        1120:{ 
            perView: 4,
            gap:10,
            focusAt: "center"
        },

        820:{
            focusAt: "center",
            gap:10,
            perView: 3  
        },

        520:{
            focusAt: "center",
            gap:10,
            perView: 2  
        }
    }
};




function Beneficios({beneficios}) {

    const slider = new Glide(".glide",sliderConfiguration);
  
    useEffect(() => {
        slider.mount();
    }, [slider]);
    
    /**
     * Setting Beneficios
     */
    const fBeneficio=(value) =>{
        return (value) ? 
        "":
        "beneficio-isFalse"
    };

    const beneficiosLength=beneficios.length;

    return(
        <section className="beneficios">
            {beneficios.map((e,i) => {
                return(
                    <Fragment>
                        
                        <div className="beneficios__beneficio" key={"Beneficio"+i}> 
                        
                            <img src={e.icon} alt={e.icon} />

                            <div className="beneficio__container">
                                <span className="beneficio__title">
                                    {e.title}
                                </span>
                                <span className={"beneficio__description " + fBeneficio(e.beneficio)}>
                                    {e.description}
                                </span>                   
                            </div>
                        </div>
                        {(i<(beneficiosLength-1)) ? <hr className="beneficios__verticalLine" /> : ""}
                    </Fragment>                   
                );
            })}
        </section>
    );
}

export default Beneficios;