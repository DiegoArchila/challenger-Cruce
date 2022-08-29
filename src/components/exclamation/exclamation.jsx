 import "./exclamation.scss"

 function Exclamation({children}){
    return (
        <div className="exclamation">
            <div className="circle-rightTop" />
            <div className="circle-rightBottom" />
            <div className="circle-leftTop" />
            <div className="circle-leftBottom" />
            {children}
        </div>
    );
 }

 export default Exclamation;