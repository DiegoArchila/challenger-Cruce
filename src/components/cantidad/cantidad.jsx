import menos from "../../svg/icon/menos.svg";
import mas from "../../svg/icon/mas.svg";
import "./cantidad.scss";
import { useState } from "react";

function Cantidad({value, stock}){
   
    const [Cant, setCant]=useState(value)

    return (
        <div className="cantidad d-flex-row-cc">
  
            <img src={menos} alt="" onClick={(e)=>{
                if(Cant!==1){
                    setCant(Cant-1);
                }
            }}/>
           
            <span>
                {Cant}
            </span>
          
            <img src={mas} alt="" onClick={(e)=>{
                if(Cant<stock){
                    setCant(Cant+1);
                }
            }}/>
            
        </div>
    );
}


export default Cantidad;