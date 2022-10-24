import "./dia.scss";
import Articulo from "../articulo/articulo";

function Dia({productDay}) {
    return (
        <section className="dia">
            <h2 className="dia__titulo">
                Juguete del día
            </h2>
            <div className="dia__contenido">
                <iframe
                    className="dia__video" 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/fEgyelK6rAY" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                    allowFullScreen />
                <Articulo product={productDay} key={productDay.marca+1} />
            </div>
        </section>
    );    
}

export default Dia;