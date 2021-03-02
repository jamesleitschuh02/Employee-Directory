import React from "react";

function Switch(props) {
    return(
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" for="flexSwitchCheckDefault">{props.condition}</label>
        </div>
    );
}

export default Switch;