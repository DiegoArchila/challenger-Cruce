import { useRef } from "react";
import "./etiqueta.scss";

function Etiqueta({Message}){
    
    let etiqueta=useRef();

    const close = _ =>{
            etiqueta.current.classList.toggle("etiqueta-close");
        }
        
    return(
        <div className="etiqueta" ref={etiqueta}>
            <span className="etiqueta__msg">
                {Message}
            </span>
            <svg className="etiqueta__btn" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={(e)=>{close()}}>
                <path d="M12.34 23.66C12.433 23.7537 12.5436 23.8281 12.6654 23.8789C12.7873 23.9297 12.918 23.9558 13.05 23.9558C13.182 23.9558 13.3127 23.9297 13.4346 23.8789C13.5564 23.8281 13.667 23.7537 13.76 23.66L18 19.41L22.24 23.66C22.333 23.7537 22.4436 23.8281 22.5654 23.8789C22.6873 23.9297 22.818 23.9558 22.95 23.9558C23.082 23.9558 23.2127 23.9297 23.3346 23.8789C23.4564 23.8281 23.567 23.7537 23.66 23.66C23.7537 23.567 23.8281 23.4564 23.8789 23.3346C23.9296 23.2127 23.9558 23.082 23.9558 22.95C23.9558 22.818 23.9296 22.6873 23.8789 22.5654C23.8281 22.4436 23.7537 22.333 23.66 22.24L19.41 18L23.66 13.76C23.7532 13.6668 23.8272 13.5561 23.8776 13.4343C23.9281 13.3124 23.9541 13.1819 23.9541 13.05C23.9541 12.9181 23.9281 12.7876 23.8776 12.6658C23.8272 12.5439 23.7532 12.4332 23.66 12.34C23.5667 12.2468 23.4561 12.1728 23.3342 12.1223C23.2124 12.0719 23.0818 12.0459 22.95 12.0459C22.8181 12.0459 22.6876 12.0719 22.5657 12.1223C22.4439 12.1728 22.3332 12.2468 22.24 12.34L18 16.59L13.76 12.34C13.5717 12.1517 13.3163 12.0459 13.05 12.0459C12.7837 12.0459 12.5283 12.1517 12.34 12.34C12.1517 12.5283 12.0459 12.7837 12.0459 13.05C12.0459 13.3163 12.1517 13.5717 12.34 13.76L16.59 18L12.34 22.24C12.2463 22.333 12.1719 22.4436 12.1211 22.5654C12.0703 22.6873 12.0442 22.818 12.0442 22.95C12.0442 23.082 12.0703 23.2127 12.1211 23.3346C12.1719 23.4564 12.2463 23.567 12.34 23.66V23.66Z" fill="black"/>
            </svg>
        </div>
    );
}

export default Etiqueta;