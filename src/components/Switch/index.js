import React from "react";

function Switch(props) {
    return(
        <div className="form-check">
            <input 
                className="form-check-input" 
                type="checkbox" 
                value=""
                id="flexCheckDefault" 
                onClick={props.switchFunction} 
                unchecked
            />
            <label 
                className="form-check-label" 
                for="flexCheckDefault">
                    {props.condition}
            </label>
        </div>
    );
}

export default Switch;