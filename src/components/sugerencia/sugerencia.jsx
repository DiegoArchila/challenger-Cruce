import "./sugerencia.scss"
import { Fragment } from 'react'

export const Sugerencia = ({sugerencia}) => {
  return (
        <article className="sugerencia">
            <img src={""} alt={""} className="sugerencia__img" />
            <div className="sugerencia__detail">
                <span className="sugerencia__detail-title">
                </span>
            </div>
        </article>
  )
}
