import React from "react";
import Thumbnail from "../Thumbnail";

export const YelpThingsListItem = props => (

  <div className={'col-md-3 card'}>
    
    <Thumbnail src={props.image || "http://via.placeholder.com/165x165"} />
      
      <h3>{props.name}</h3>
        <p>Address:</p>
        <p>{props.address1}</p>
        <p>{props.address2}</p>
        <p>{props.phone}</p>
         <a rel="noreferrer noopener" target="_blank" href={props.link}>
         <button className="btn btn-list-link btn-sm">
       
          Get Info
          </button>
        </a>


  </div>

);