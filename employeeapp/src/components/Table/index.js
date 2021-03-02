import React from "react";

function Table(props){
    return(
        (<p>|| Name: {props.name} || Age: {props.age} || Country: {props.country} || Gender: {props.gender} ||</p>)
    );
}

export default Table;