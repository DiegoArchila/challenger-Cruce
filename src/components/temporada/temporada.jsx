import "./temporada.scss";
import Articulo from "../articulo/articulo.jsx";
import Btn from "../btn2/btn2.jsx";

function Temporada({temporada}) {

    return(
        <section className="temporada">
            <div className="temporada__title">
                <span>
                    {temporada.title}
                </span>
            </div>
            <div className="temporada__products">
            {temporada.tempProducts.map((e,i) => {
                let productTemp=[];
                if (i<2) {
                    productTemp.push(<Articulo product={e} key={e.marca+i} />); 
                }
                return productTemp;
            })}
                <div className="temporada__contenido">
                    <span className="temporada__title">
                        <h1>{temporada.title}</h1>
                    </span>
                    <span className="temporada__description">
                        {temporada.description}
                    </span>
                    <Btn text={"Ver colección"} />   
                </div>
            </div>
            
            <div className="temporada__products">
            {temporada.tempProducts.map((e,i) => {
                let productTemp=[];
                if (i>1 && i<6) {
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