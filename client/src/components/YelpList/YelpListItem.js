import React from "react";
import Thumbnail from "../Thumbnail";
import { Row, Col } from "../Grid";

export const YelpListItem = props => (

 
   <div className={'col-md-3 card'}>
    <Thumbnail src={props.image || "http://via.placeholder.com/165x165"} />

       <h3 className="bold">{props.name}</h3>
        <p>Address:</p>
        <p>{props.address1}</p>
        <p>{props.address2}</p>
        <a rel="noreferrer noopener" target="_blank" href={props.url}>
          Yelp Link
        </a>

  </div>

);