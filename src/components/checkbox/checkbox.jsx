import "./checkbox.scss";

function Checkbox({label, value}){

    let caption=label.toString();
    label=String(label).split(" ").join("").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return (
        <div className="checkbox">
            <input type={"checkbox"} id={label} />
            <label className="checkbox__check" for={label}>{caption}</label>
        </div>
    );
}

export default Checkbox;