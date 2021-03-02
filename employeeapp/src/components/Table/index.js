import React from "react";
import Columns from "../Columns";
import Rows from "../Rows";

function Table(props){
    return(
        <>
            <table className="table">
                <Columns />
                <tbody>
                    {props.employeeList.map((index) => {
                        return (
                            <Rows 
                            name={index.name.first}
                            age={index.dob.age}
                            gender={index.gender}
                            country={index.location.country} 
                            />
                            );
                        })}
                </tbody>
            </table>
        </>
    );
}

export default Table;