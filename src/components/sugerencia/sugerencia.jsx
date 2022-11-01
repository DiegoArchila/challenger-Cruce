import { Fragment } from "react";
import "./sugerencia.scss"

export const Sugerencia = ({sugerencia, key}) => {

  /**
 * Convert Number to Currency
 * @param {Number} precio 
 * @param {Number} decimals 
 * @returns String
 */
  const format=(precio, decimals)=>{
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits : decimals }).format(precio);
  }

  let pDescuento=Math.round(((sugerencia.precio * sugerencia.promo)/100));

  return (
    <article className="sugerencia" key={key}>
        <img src={require("../../img/products/"+sugerencia.image)} alt={""} className="sugerencia__img" />
        <div className="sugerencia__detail">
            <span className="sugerencia__detail-title">
              {sugerencia.nombre}
            </span>
            <div className="sugerencia__detail-prices">
              { (sugerencia.promo!==0) ?
                <Fragment>
                  <span className="sugerencia__priceBefore">
                   {format(sugerencia.precio, 0)}
                  </span>
                  <span className="sugerencia__priceAfter">
                   {format((sugerencia.precio - pDescuento), 0)}
                  </span>
                </Fragment>
                :
                  <span className="sugerencia__price">
                    {format(sugerencia.precio, 0)}
                  </span>
              }
            </div>
        </div>
    </article>
  )
}
