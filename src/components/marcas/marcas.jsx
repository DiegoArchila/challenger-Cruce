import "./marcas.scss";

function Marcas({marcas}) {
    


    return (
        <section className="marcas">
            <h4 className="marcas__title">
                Nuestras marcas
            </h4>
            <div className="marcas__slideLogos">
                <article className="marcas__logos">
                    {marcas.map((e,i)=><img src={require("../../img/marcas/"+e)} alt={e} key={e+i} />)}
                </article>
            </div>
        </section>
    );
}

export default Marcas;