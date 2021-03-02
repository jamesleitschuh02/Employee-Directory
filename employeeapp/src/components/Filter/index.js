import React from "react";

function Filter() {
    return (
        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option defaultValue>Filter gender by:</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Neither</option>
        </select>
    );
}

export default Filter;