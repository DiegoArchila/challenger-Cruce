import "./temporada.scss";
import Articulo from "../articulo/articulo.jsx";
import Btn from "../btn2/btn2.jsx";

function Temporada({temporada, description}) {

    return(
        <section className="temporada">
            <span className="temporada__description">
                {description}
            </span>
            <div className="temporada__products">
            {temporada.map((e,i) => {
                let productTemp=[];
                if (i<2) {
                    productTemp.push(<Articulo product={e} key={e.marca+i} />); 
                }
                return productTemp;
            })}
            </div>
            <div className="temporada__products">
            {temporada.map((e,i) => {
                let productTemp=[];
                if (i>1 && i<4) {
                    productTemp.push(<Articulo product={e} key={e.marca+i} />); 
                }
                return productTemp;
            })}
            </div>             
               <Btn text={"Ver colección"} />     
        </section>
    );
}

export default Temporada;