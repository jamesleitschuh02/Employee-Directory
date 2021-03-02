/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./index.css";
import SearchForm from "../../components/SearchForm";
import Table from "../../components/Table";
import Switch from "../../components/Switch";
import Filter from "../../components/Filter";

function Search(){
    const [search, setSearch] = useState(0);
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
                <Switch condition="Alphabetical" />
                <Filter />
            </div>
            <div className="employeeTable">
                <Table employeeList={results} />
            </div>
        </>
    );
}

export default Search;