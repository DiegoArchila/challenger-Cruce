import Control from "../control/control";

function Paginado({current, next}) {
    const withPaginado = 5;
    const middlePaginado=3;
    
    return(
        <nav className="paginado">
            <Control />
                <ul>
                        
                </ul>
            <Control />
        </nav>
    );
}

export default Paginado;