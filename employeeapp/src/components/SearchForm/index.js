import React from "react";
import "./index.css";

function SearchForm(props) {
    return(
    <form className="search">
        <div className="form-group">
            <label htmlFor="language">Enter Number of Employees</label>
            <br></br>
            <input
                value={props.search}
                onChange={props.handleInputChange}
            />
            <br></br>
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
        </button>
        </div>
    </form>
    );
}

export default SearchForm;