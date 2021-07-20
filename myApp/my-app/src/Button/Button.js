import React from "react";
import './Button.css'

const Button = ({handlerClick,color,text}) =>{



    return(
        <div>
            <button onClick={handlerClick} className="btn" style={ {backgroundColor: color}}>
                {text}
            </button>
        </div>
    )
}

export default Button