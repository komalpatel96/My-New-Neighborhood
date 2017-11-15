import React from "react";
import Thumbnail from "../Thumbnail";


export const EventListItem = props => (
 
      <div className={'col-md-3 card'}>
        <Thumbnail src={props.image || "http://via.placeholder.com/165x165"} />
     
        <h3 className="bold">{props.name} </h3>
        <p>{props.description}</p>
         <a rel="noreferrer noopener" target="_blank" href={props.link}>
         <button className="btn btn-list-link btn-sm">
       
          Get Info
          </button>
        </a>
     
    </div>
 
);