import React from "react";

function SearchForm(props) {
    return(
    <form className="search">
        <div className="form-group">
            <label htmlFor="language">Number</label>
            <input
                value={props.search}
            />
        </div>
    </form>
    );
}

export default SearchForm;