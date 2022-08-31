import { Fragment } from "react";
import "./beneficios.scss";

function Beneficios({beneficios}) {

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