import React from "react";

function SearchForm(props) {
    return(
    <form className="search">
        <div className="form-group">
            <label htmlFor="language">Number</label>
            <input
                value={props.search}
                onChange={props.handleInputChange}
            />
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
        </button>
        </div>
    </form>
    );
}

export default SearchForm;