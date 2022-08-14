import "./control.scss";

/**
 * Component control
 * @param {import("react").ReactSVGElement} Children Svg 
 * @returns Component Control
 */
function Control({children}){
    return (
        <button type="submit" className="control">
            {children}
        </button>
    );
}

export default Control;