import Btn1 from "./components/btn1/btn1.jsx";
import Btn2 from "./components/btn2/btn2.jsx";
import Btn3 from "./components/btn3/btn3.jsx";
import Btn4 from "./components/btn4/btn4.jsx";
import Volver from "./components/volver/volver.jsx";
import Control from "./components/control/control.jsx";
import Promos from "./components/promos/promos.jsx";
import Checkbox from './components/checkbox/checkbox.jsx';
import Cantidad from './components/cantidad/cantidad.jsx';
import Articulo from './components/articulo/articulo.jsx';
import Etiqueta from './components/etiqueta/etiqueta.jsx';
import { Fragment } from "react";


function Components() {

    const product={
        marca: "funko",
        nombre: "Funko POP | Game Of Thrones - Daenerys 25",
        precio: 2390,
        promo:10,
        cSnInteres:6,
        stock:12,
        imgOutBox:"GameOfThrones-DaenerysTargayen-OutBox.png",
        imgInBox: "GameOfThrones-DaenerysTargayen-InBox.png"
    }
    
    const etiquetaMsg="Mantené pulsado cualquier artículo para agregarlo al carrito Mantené pulsado cualquier artículo para agregarlo al carrito"
    

    return(
        <Fragment>
        <br/>
        <center>
          <h1>Components</h1>
        </center>
        <br/>
        <Etiqueta Message={etiquetaMsg} />
        <hr />
          <br/>
          <div className='d-flex-row-cc'>
            <div>
              <h3>btn1</h3>
              <Btn1 text={"agregar"}/>
            </div>
            <br />
            <div>
              <h3>btn2</h3>
              <Btn2 />
            </div>
            <div>
              <h3>btn3</h3>
              <Btn3 />
            </div>
            <div>
              <h3>btn4</h3>
              <Btn4 />
            </div>
            <div>
              <h3>Volver</h3>
              <Volver />
            </div>
            <div style={{gap:"5px"}}>
              <h3>Control</h3>
              <Control>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.21 10.29C22.117 10.1963 22.0064 10.1219 21.8846 10.0711C21.7627 10.0203 21.632 9.9942 21.5 9.9942C21.368 9.9942 21.2373 10.0203 21.1154 10.0711C20.9936 10.1219 20.883 10.1963 20.79 10.29L13.79 17.29C13.6963 17.383 13.6219 17.4936 13.5711 17.6154C13.5203 17.7373 13.4942 17.868 13.4942 18C13.4942 18.132 13.5203 18.2627 13.5711 18.3846C13.6219 18.5064 13.6963 18.617 13.79 18.71L20.79 25.71C20.883 25.8037 20.9936 25.8781 21.1154 25.9289C21.2373 25.9797 21.368 26.0058 21.5 26.0058C21.632 26.0058 21.7627 25.9797 21.8846 25.9289C22.0064 25.8781 22.117 25.8037 22.21 25.71C22.3037 25.617 22.3781 25.5064 22.4289 25.3846C22.4797 25.2627 22.5058 25.132 22.5058 25C22.5058 24.868 22.4797 24.7373 22.4289 24.6154C22.3781 24.4936 22.3037 24.383 22.21 24.29L15.91 18L22.21 11.71C22.3037 11.617 22.3781 11.5064 22.4289 11.3846C22.4797 11.2627 22.5058 11.132 22.5058 11C22.5058 10.868 22.4797 10.7373 22.4289 10.6154C22.3781 10.4936 22.3037 10.383 22.21 10.29Z" fill="black"/>
                </svg>
              </Control>
                
              <br />
              <Control>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.79 25.71C13.883 25.8037 13.9936 25.8781 14.1154 25.9289C14.2373 25.9797 14.368 26.0058 14.5 26.0058C14.632 26.0058 14.7627 25.9797 14.8846 25.9289C15.0064 25.8781 15.117 25.8037 15.21 25.71L22.21 18.71C22.3037 18.617 22.3781 18.5064 22.4289 18.3846C22.4797 18.2627 22.5058 18.132 22.5058 18C22.5058 17.868 22.4797 17.7373 22.4289 17.6154C22.3781 17.4936 22.3037 17.383 22.21 17.29L15.21 10.29C15.0217 10.1017 14.7663 9.99591 14.5 9.99591C14.2337 9.99591 13.9783 10.1017 13.79 10.29C13.6017 10.4783 13.4959 10.7337 13.4959 11C13.4959 11.2663 13.6017 11.5217 13.79 11.71L20.09 18L13.79 24.29C13.6963 24.383 13.6219 24.4936 13.5711 24.6154C13.5203 24.7373 13.4942 24.868 13.4942 25C13.4942 25.132 13.5203 25.2627 13.5711 25.3846C13.6219 25.5064 13.6963 25.617 13.79 25.71V25.71Z" fill="black"/>
                </svg>
              </Control>
            </div>
            <div>
              <h3>promos</h3>
              <Promos type={"%"} value={10} />
            </div>
            <div>
              <h3>Checkbox</h3>
              <Checkbox label={"Opción 1"} value={1} />
              <Checkbox label={"Opción 2"} value={2}/>
              <Checkbox label={"Opción 3"} value={3}/>
              <Checkbox label={"Opción 4"} value={4}/>
            </div>
            <div>
              <h3>Cantidad</h3>
              <Cantidad value={1} stock={5} />
            </div>
            <div>
              <h3>Articulo 1</h3>
              <Articulo product={ product }/>
            </div>
          </div>
        </Fragment>
    );
}

export default Components;