import React from 'react';
import "./Footer.scss"; 
import Btn from '../../components/btn3/btn3';
import { Link } from "react-router-dom";

export const Footer = ({cKey, socialNetworks, DocsTerms}) => {
  return (
    <footer className='footer' key={cKey}>
        <div className='footer__fila1'>
            <div className='footer__fila1--column1'>
                <span className='footer__fila1--contacto'>
                    {"contacto"}
                </span>
                <span className='footer__fila1--mayoristas'>
                    {"mayoristas"}
                </span>
            </div>

            {/** Form Email*/}
            <div className='footer__fila1--column2'>
                <form className='footer__fila1--formEmail'>
                    <h4 className='footer__fila1--titulo'>
                        {"¿buscás ofertas?"}
                    </h4>
                    <input type={'email'} className='footer__fila1--inputEmail' placeholder={"eMail"} />
                    <Btn caption={"Enviar"} />
                </form>
            </div>
        </div>

        {/** Social Network and Conditions and Docs */}
        <div className='footer__fila2'>
            <div className='footer__fila2--column1'>
                <Link className='footer__fila2--Link' to={"#"} key={"SocialNetwork1"} >
                    <span className='footer__fila2--LinkText'>
                        {"instagram"}
                    </span>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 23C18.9889 23 19.9556 22.7068 20.7779 22.1573C21.6001 21.6079 22.241 20.827 22.6194 19.9134C22.9978 18.9998 23.0969 17.9945 22.9039 17.0245C22.711 16.0546 22.2348 15.1637 21.5355 14.4645C20.8363 13.7652 19.9454 13.289 18.9755 13.0961C18.0055 12.9031 17.0002 13.0022 16.0866 13.3806C15.173 13.759 14.3921 14.3999 13.8427 15.2221C13.2932 16.0444 13 17.0111 13 18C13 18.6566 13.1293 19.3068 13.3806 19.9134C13.6319 20.52 14.0002 21.0712 14.4645 21.5355C15.4021 22.4732 16.6739 23 18 23ZM18 15C18.5933 15 19.1734 15.1759 19.6667 15.5056C20.1601 15.8352 20.5446 16.3038 20.7716 16.8519C20.9987 17.4001 21.0581 18.0033 20.9424 18.5853C20.8266 19.1672 20.5409 19.7018 20.1213 20.1213C19.7018 20.5409 19.1672 20.8266 18.5853 20.9424C18.0033 21.0581 17.4001 20.9987 16.8519 20.7716C16.3038 20.5446 15.8352 20.1601 15.5056 19.6667C15.1759 19.1734 15 18.5933 15 18C15 17.2044 15.3161 16.4413 15.8787 15.8787C16.4413 15.3161 17.2044 15 18 15Z" fill="black"/>
                        <path d="M23 29C24.5913 29 26.1174 28.3679 27.2426 27.2426C28.3679 26.1174 29 24.5913 29 23V13C29 11.4087 28.3679 9.88258 27.2426 8.75736C26.1174 7.63214 24.5913 7 23 7H13C11.4087 7 9.88258 7.63214 8.75736 8.75736C7.63214 9.88258 7 11.4087 7 13V23C7 24.5913 7.63214 26.1174 8.75736 27.2426C9.88258 28.3679 11.4087 29 13 29H23ZM9 23V13C9 11.9391 9.42143 10.9217 10.1716 10.1716C10.9217 9.42143 11.9391 9 13 9H23C24.0609 9 25.0783 9.42143 25.8284 10.1716C26.5786 10.9217 27 11.9391 27 13V23C27 24.0609 26.5786 25.0783 25.8284 25.8284C25.0783 26.5786 24.0609 27 23 27H13C11.9391 27 10.9217 26.5786 10.1716 25.8284C9.42143 25.0783 9 24.0609 9 23Z" fill="black"/>
                        <path d="M24 13.5C24.8284 13.5 25.5 12.8284 25.5 12C25.5 11.1716 24.8284 10.5 24 10.5C23.1716 10.5 22.5 11.1716 22.5 12C22.5 12.8284 23.1716 13.5 24 13.5Z" fill="black"/>
                    </svg>
                </Link>
                <Link className='footer__fila2--Link' to={"#"} key={"SocialNetwork2"} >
                    <span className='footer__fila2--LinkText'>
                        {"youtube"}
                    </span>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 9H8C7.20435 9 6.44129 9.31607 5.87868 9.87868C5.31607 10.4413 5 11.2044 5 12V24C5 24.7956 5.31607 25.5587 5.87868 26.1213C6.44129 26.6839 7.20435 27 8 27H28C28.7956 27 29.5587 26.6839 30.1213 26.1213C30.6839 25.5587 31 24.7956 31 24V12C31 11.2044 30.6839 10.4413 30.1213 9.87868C29.5587 9.31607 28.7956 9 28 9ZM29 24C29 24.2652 28.8946 24.5196 28.7071 24.7071C28.5196 24.8946 28.2652 25 28 25H8C7.73478 25 7.48043 24.8946 7.29289 24.7071C7.10536 24.5196 7 24.2652 7 24V12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H28C28.2652 11 28.5196 11.1054 28.7071 11.2929C28.8946 11.4804 29 11.7348 29 12V24Z" fill="black"/>
                        <path d="M16.33 22L21.67 18L16.33 14V22Z" fill="black"/>
                    </svg>
                </Link>
                <Link className='footer__fila2--Link' to={"#"} key={"SocialNetwork3"} >
                    <span className='footer__fila2--LinkText'>
                        {"facebook"}
                    </span>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 29H26C26.7956 29 27.5587 28.6839 28.1213 28.1213C28.6839 27.5587 29 26.7956 29 26V10C29 9.20435 28.6839 8.44129 28.1213 7.87868C27.5587 7.31607 26.7956 7 26 7H10C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10V26C7 26.7956 7.31607 27.5587 7.87868 28.1213C8.44129 28.6839 9.20435 29 10 29ZM9 10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H26C26.2652 9 26.5196 9.10536 26.7071 9.29289C26.8946 9.48043 27 9.73478 27 10V26C27 26.2652 26.8946 26.5196 26.7071 26.7071C26.5196 26.8946 26.2652 27 26 27H10C9.73478 27 9.48043 26.8946 9.29289 26.7071C9.10536 26.5196 9 26.2652 9 26V10Z" fill="black"/>
                        <path d="M16.45 25H19.18V18.41H21.42V16C21.4195 15.9286 21.3907 15.8603 21.34 15.81C21.317 15.7852 21.2892 15.7653 21.2582 15.7515C21.2273 15.7378 21.1939 15.7304 21.16 15.73H19.16V14.46C19.16 13.85 19.31 13.54 20.09 13.54H21.5V11H19.56C19.1368 10.9832 18.7148 11.0562 18.3218 11.2142C17.9288 11.3723 17.5737 11.6117 17.2799 11.9168C16.9861 12.222 16.7603 12.5859 16.6172 12.9845C16.4742 13.3832 16.4172 13.8077 16.45 14.23V15.72H14.5V18.41H16.45V25Z" fill="black"/>
                    </svg>
                </Link>
            </div>

            <div className='footer__fila2--column2'>
                <Link className='footer__fila2--Link' to={"#"} key={"TermsDocs1"} >
                    <span className='footer__fila2--LinkText'>
                        {"preguntas frec."}
                    </span>    
                </Link>
                <Link className='footer__fila2--Link' to={"#"} key={"TermsDocs1"} >
                    <span className='footer__fila2--LinkText'>
                        {"térm & cond"}
                    </span>    
                </Link>
                <Link className='footer__fila2--Link' to={"#"} key={"TermsDocs1"} >
                    <span className='footer__fila2--LinkText'>
                        {"mis pedidos"}
                    </span>    
                </Link>
            </div>
        </div>

        <div className='footer__fila3'>
        </div>
    </footer>
  )
}
