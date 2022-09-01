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
                return <Articulo product={e} key={e.marca+i} />
            })}                
            </div>
            <Btn text={"Ver colección"} key={"vercolecc"+1} />
        </section>
    );
}

export default Temporada;