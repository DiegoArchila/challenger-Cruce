import { Link } from "react-router-dom";
import "./header.scss";
import Etiqueta from "../../components/etiqueta/etiqueta.jsx";
import menu from "../../svg/icon/menu.svg";
import logo from "../../svg/portada/logo.svg";
import Cart from "../../svg/icon/carrito.jsx";
import user from "../../svg/icon/usuario.svg";
import Buscar from "../../components/buscar/buscar";
import Exclamation from "../../components/exclamation/exclamation.jsx";
import { Fragment } from "react";

function Header({ itemsCart, Msg }) {
  return (
    <Fragment>
    <header className="header">
      <nav className="header__nav">
        {/*Logo Menu*/}
        <Link to={"#"} className={"header__menu"}>
          <img className="header__menu" src={menu} alt={menu} />
        </Link>

        {/*Enlaces*/}
        <div to="#" className="header__links">
          <Link to={"#"} className={"header__link active"}>
            <span className="header__linkTxt">Categorias</span>
          </Link>

          <Link to={"#"} className={"header__link"}>
            <span className="header__linkTxt">LOL</span>
          </Link>

          <Link to={"#"} className={"header__link"}>
            <span className="header__linkTxt">CryBabies</span>
          </Link>

          <Link to={"#"} className={"header__link"}>
            <span className="header__linkTxt">Funko</span>
          </Link>

          <Link to={"#"} className={"header__link"}>
            <Exclamation>
              <span className="header__linkTxt exclamation">Hot sale!</span>
            </Exclamation>
          </Link>
        </div>

        {/*Logo*/}
        <Link to="#" className="header__logo">
          <img className="header__logo" src={logo} alt={menu} />
        </Link>

        {/*Acciones*/}
        <div className="actions">
          <Buscar id={"searchNav"} />

          <Link to="#" className="header__user">
            <img className="header__userLogo" src={user} alt={menu} />
          </Link>

          <Link to="#" className="header__cart">
            <Cart />
            <span className="header__cartTxt">{itemsCart}</span>
          </Link>
        </div>
      </nav>
      
      <Buscar id={"searchHeader"} />
      <Etiqueta Message={Msg} />
    </header>
    </Fragment>
  );
}

export default Header;
