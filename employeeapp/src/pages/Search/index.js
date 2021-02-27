/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm/index";

function Search(){
    const [search, setSearch] = useState(20);
    const [results, setResults] = useState([]);

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        API.employeeSearch(search)
        .then(res => {
            console.log(res.data.results);
            setResults(res.data.results);
        })
    };
    
    useEffect(() => {
        console.log("Our new list is ", results);
    },[results]);

    return (
        <>
            <div>
                <SearchForm
                    results={search}
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                />
            </div>
            <div>
                {results.map((index) => {
                    return (<p key={index.email}>{index.name.first}</p>);
                    // return (<Table key={index.email} name={index.name.first} />)
                })}
            </div>
        </>
    );
}

export default Search;