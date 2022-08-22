import "./articulo.scss";
import Promo from "../promos/promos.jsx";
import Btn from "../btn1/btn1";

/**
 * Convert Number to Currency
 * @param {Number} precio 
 * @param {Number} decimals 
 * @returns String
 */
const format=(precio, decimals)=>{
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits : decimals }).format(precio);
}

function Articulo({product}){

    let pDescuento=Math.round(((product.precio * product.descuento)/100));

    return(
        <article className="articulo" onMouseOver="" >

            <div className="articulo__containerImg">
                <img src={require("../../img/products/"+product.imgInBox)} alt={product.nombre} className="articulo__img" id="imgInBox"/>
                <img src={require("../../img/products/"+product.imgOutBox)} alt={product.nombre} className="articulo__img" id="imgOutBox"/>
                <Promo value={product.promo} type={"%"} />            
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
                            {format((pDescuento/product.cSnInteres),2)}
                        </span>
                    </div>
                    <div className="articulo__final">
                        <span className="articulo__finalText">
                            final:
                        </span>
                        <span className="articulo__finalAntes">
                            {format(product.precio, 0)}
                        </span>
                        <span className="articulo__finalDespues">
                            {format(pDescuento, 0)}
                        </span>
                    </div>
                </div>

                <Btn text="agregar" />

            </div>


        </article>
    );
}

export default Articulo;