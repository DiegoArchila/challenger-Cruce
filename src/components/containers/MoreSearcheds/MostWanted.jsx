import "./MostWanted.scss";
import { Sugerencia } from "../../sugerencia/sugerencia";

export function MostWanted ({masBuscados}) {
  return (
    <section className="mostWanted">
        <h4 className="mostWanted__title">Lo más buscado</h4>
        {masBuscados.map(buscado =>{
            return <Sugerencia sugerencia={buscado}/>
        })}
    </section>
  )
}
