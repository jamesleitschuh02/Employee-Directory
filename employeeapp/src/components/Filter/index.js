import React from "react";

function Filter() {
    return (
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Filter gender by:</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Neither</option>
        </select>
    );
}

export default Filter;