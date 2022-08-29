import Header from "../../partials/header/header.jsx";

function Home() {

    const etiquetaMsg="Mantené pulsado cualquier artículo para agregarlo al carrito"

    return (
        <div className="app">
            <Header itemsCart={3} Msg={etiquetaMsg}/>
        </div>
    );
}

export default Home;