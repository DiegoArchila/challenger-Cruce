import "./dia.scss";
import Articulo from "../articulo/articulo";

function Dia({productDay}) {
    return (
        <section className="dia" key={"dia"}>
            <h2 className="dia__titulo" key={"dia_titulo"}>
                Juguete del día
            </h2>
            <div className="dia__contenido" key={"dia_contenido"}>
                <iframe
                    className="dia__video" 
                    src="https://www.youtube.com/embed/fEgyelK6rAY" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                    allowFullScreen 
                    key={"dia_video"}
                />
                <Articulo product={productDay} key={productDay.marca+1} />
            </div>
        </section>
    );    
}

export default Dia;