import "./btn2.scss";

function Btn({text}) {
    return (
        <button type="submit" className="btn2">
            <span>{text}</span>
        </button>
        
    );
}

export default Btn;