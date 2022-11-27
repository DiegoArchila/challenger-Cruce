import "./MostWanted.scss";
import { Sugerencia } from "../../sugerencia/sugerencia";
import { Contador } from "../../contador/Contador";

export function MostWanted ({masBuscados, isContador=false}) {
  return (
    <section className="mostWanted">
        {
          isContador ? 
            <Contador titulo={"Termina en"} fechaFinal={Date.now()+ 86400000} keyC="contadorOferta" />
          :
            <h4 className="mostWanted__title">Lo más buscado</h4>
          }
        {masBuscados.map(buscado =>{
            return <Sugerencia sugerencia={buscado}/>
        })}
    </section>
  )
}
