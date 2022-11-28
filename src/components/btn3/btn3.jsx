import "./btn3.scss";

function Btn({caption}) {
    return (
        <button type="submit" className="btn3">
            <span>{caption}</span>
        </button>
        
    );
}

export default Btn;