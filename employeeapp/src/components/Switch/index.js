import React from "react";

function Switch(props) {
    return(
        <div className="form-check form-switch">
            <input 
                className="form-check-input" 
                type="checkbox" id="flexSwitchCheckDefault" 
                onClick={props.switchFunction} 
            />
            <label 
                className="form-check-label" 
                htmlFor="flexSwitchCheckDefault">{props.condition}
            </label>
        </div>
    );
}

export default Switch;