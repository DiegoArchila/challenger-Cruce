import "./articulo.scss";
import Promo from "../promos/promos.jsx";
import Btn from "../btn1/btn1";
import { Fragment, useEffect, useState } from "react";

/**
 * Convert Number to Currency
 * @param {Number} precio 
 * @param {Number} decimals 
 * @returns String
 */
const format=(precio, decimals)=>{
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits : decimals }).format(precio);
}

/**
 * Struct of Skeleton while loading the component Articulo
 */
const loading=(
    <section className="loading">
        <div className="loading__img" />
        <div className="loading__marca" />
        <div className="loading__containerTxt">
            <div className="loading__txt" />
            <div className="loading__txt" />
        </div>
        <div className="loading__precio" />
        <div className="loading__btn" />
    </section>
);



function Articulo({product}){
    const [Load, setLoad]=useState(false);

    let pDescuento=Math.round(((product.precio * product.promo)/100));

    useEffect(()=>{
        setTimeout(() => {
            setLoad(true);
        }, 3000);
    },[]);

    return(

        <Fragment>
            {
                (Load) ? 
                <article className="articulo" onMouseOver="" >
    
                <div className="articulo__containerImg">
                    <img src={require("../../img/products/"+product.imgInBox)} alt={product.nombre} className="articulo__img" id="imgInBox"/>
                    <img src={require("../../img/products/"+product.imgOutBox)} alt={product.nombre} className="articulo__img" id="imgOutBox"/>
                    {product.promo!==(0) ?
                    <Promo value={Math.round(product.promo)} type={"%"} />:""}            
                </div>
    
                <div className="articulo__ficha">
    
                    <div className="articulo__articulo">
                        <span className="articulo__marca">
                            {product.marca}
                        </span>
                        <span className="articulo__nombre">
                            {product.nombre}
                        </span>
                    </div>
    
                    <div className="articulo__precio">
                        <div className="articulo__cuota">
                            <span className="articulo__cuotaTxt">
                                {product.cSnInteres} Cuotas s/interés de
                            </span>
                            <span className="articulo__cuotaCuota">
                                {(product.promo!==0 || product.promo===null) ?
                                    format(((product.precio - pDescuento)/product.cSnInteres),2):
                                    format((product.precio/product.cSnInteres),2)
                                }
                            </span>
                        </div>
                        <div className="articulo__final">
                            <span className="articulo__finalText">
                                final:
                            </span>
                            
                            { //Rules os styles by descuento
                                product.promo!==(0) ?
                                <Fragment>
                                    <span className="articulo__finalAntes">
                                        {format(product.precio, 0)}
                                    </span>
                                    <span className="articulo__finalDespues">
                                        {format((product.precio - pDescuento), 0)}
                                    </span>
                                </Fragment>
                                :
                                <span className="articulo__finalDespues-sin">
                                    {format(product.precio, 0)}
                                </span>
                            }
                        </div>
                    </div>
    
                    <Btn text="agregar" />
    
                </div>
            </article>
                :loading
            }
        </Fragment>
    );
}

export default Articulo;