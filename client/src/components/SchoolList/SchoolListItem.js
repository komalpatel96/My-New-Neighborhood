import React from "react";

export const SchoolListItem = props => (
    <tr>
        <td>{props.name}</td>
        <td>{props.type}</td>
        <td>{props.address}</td>
        <td>{props.gradeRange}</td>
        <td>{props.phone}</td>
        <td><a href={props.statsLink} target="_blank">See Stats</a></td>
        <td><a href={props.ratings} target="_blank">See Ratings</a></td>
        <td><a href={props.reviews} target="_blank">See Reviews</a></td>
   </tr>
);