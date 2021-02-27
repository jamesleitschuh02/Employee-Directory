/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { useEffect } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm/index";

function Search(){
    const [search, setSearch] = useState("20");
    const [results, setResults] = useState([]);

    // useEffect(() => {
    //     if (!search) {
    //         return;
    //     }
    // })

    const handleFormSubmit = event => {
        event.preventDefault();
        API.employeeSearch(search)
        .then(res => {
            setResults(res);
        })
    };

    return (
        <div>
            <SearchForm
                results={search}
            />
        </div>
    );
}

export default Search;