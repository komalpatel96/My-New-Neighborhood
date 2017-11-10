import React from "react";
import Thumbnail from "../Thumbnail";
import { Row, Col } from "../Grid";

export const SchoolListItem = props => (
    <tr>
        <td>{props.name}</td>
        <td>{props.type}</td>
        <td>{props.address}</td>
        <td>{props.gradeRange}</td>
        <td>{props.phone}</td>
        <td><a href={props.statsLink} target="_blank">Great School Stats</a></td>
        <td><a href={props.ratings} target="_blank">Great School Rating</a></td>
        <td><a href={props.reviews} target="_blank">Great School Reviews</a></td>
   </tr>
);