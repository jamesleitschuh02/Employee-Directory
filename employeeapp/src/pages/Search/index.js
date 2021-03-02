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
    const [allEmployees, setAllEmployees] = useState([]);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(3);

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        API.employeeSearch(search)
        .then(res => {
            // console.log(res.data.results);
            setAllEmployees(res.data.results);
            setResults(res.data.results);
        })
    };

    const sortAge = event => {
        event.preventDefault();
        if (age === 0) {
            setAge(1);
            setResults(results.sort((a,b) => {
                return (a.dob.age > b.dob.age) ? 1 : -1
            }));
        } else {
            setAge(0);
            setResults(results.sort((a,b) => {
                return (a.dob.age < b.dob.age) ? 1 : -1
            }));
        }
    };

    const genderFunction = event => {
        event.preventDefault();
        setGender(event.target.value);
    };

    // useEffect(() => {
    //     console.log("Our new list is ", results);
    //     console.log("Our AGE value is ", age);
    // },[results, age]);

    useEffect(() => {
        // console.log("Our gender value is ", gender);

        switch(gender) {
            default:
                break;
            case "1":
                setResults(allEmployees.filter(a => a.gender === "male"));
                break;
            case "2":
                setResults(allEmployees.filter(a => a.gender === "female"));
                break;
            case "3":
                setResults(allEmployees);
                break;
        }
    },[gender]);

    return (
        <>       
            <div>
                <SearchForm
                    results={search}
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                />
                <Switch 
                    condition="Sort by Age"
                    switchFunction={sortAge} 
                />
                <Filter 
                    filterFunction = {genderFunction}
                />
            </div>
            <div className="employeeTable">
                <Table 
                    employeeList={results} 
                />
            </div>
        </>
    );
}

export default Search;