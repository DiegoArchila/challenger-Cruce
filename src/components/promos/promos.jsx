import "./promos.scss";
import svg from "../../svg/icon/promos.svg";


function Promos({value, type}){
    return (
        <div className="promos">
            <img src={svg} alt={svg} />
            <div className="promos__discount">
                <span className="promos__value">
                    {value}
                </span>
                <span className="promos__type">
                    {type}
                </span>
            </div>
        </div>
    );
}

export default Promos;