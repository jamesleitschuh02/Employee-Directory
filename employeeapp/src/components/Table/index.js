import React from "react";
import Columns from "../Columns";

function Table(props){
    return(
        <>
            <table className="table">
                <Columns />
                {props.info.map((index) => {
                    return (
                        <p>{index.name.first}</p>
                        );
                    })}
            </table>
        </>
    );
}

export default Table;