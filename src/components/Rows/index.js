import React from "react";

function Rows(props) {
   return( 
    <tr>
      <th scope="row">{props.name}</th>
      <td>{props.age}</td>
      <td>{props.gender}</td>
      <td>{props.country}</td>
    </tr>
   );
}

export default Rows;