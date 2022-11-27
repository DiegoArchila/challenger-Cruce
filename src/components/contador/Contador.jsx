import "./Contador.scss";

import React, { useState, useEffect } from 'react';

function secondsToTime(miliseconds) {

   let seconds=miliseconds/1000;

  /**
   * https://desarrolloweb.com/faq/convertir-segundos-en-horas-minutos-y-segundos-en-javascript
   */
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;

    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;

    var second = Math.floor(seconds % 60);
    second = (second < 10)? '0' + second : second;
    
    return hour + ':' + minute + ':' +second;

}

export function Contador({titulo, fechaFinal, keyC}) {

  var initialTime= fechaFinal - new Date();

  const [time, setTime]=useState(initialTime);

  useEffect(() => {
    setTimeout(()=>{
      setTime(time-1000);
    },1000)

  }, [time])
  

  return (
    <article className="contador" key={keyC}>
        <div className="contador__title">
            <h5>{titulo}</h5>
        </div>

        <div className="contador__containerTime">

          <span className="contador__timer">
          {
            secondsToTime(time)
          }
          </span>

          <div className="contador__description">
            <span>
              {"HS"}
            </span>
            <span>
              {"min"}
            </span>
            <span>
              {"seg"}
            </span>
          </div>

        </div>

    </article>
  )
}
