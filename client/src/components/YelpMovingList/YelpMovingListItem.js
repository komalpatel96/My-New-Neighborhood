import React from "react";
import Thumbnail from "../Thumbnail";

export const YelpMovingListItem = props => (
  <div className={'col-md-3 card'}>
      <Thumbnail src={props.image || "http://via.placeholder.com/165x165"} />
    
      <h3>{props.name}</h3>
        
        <a rel="noreferrer noopener" target="_blank" href={props.link}>
        <button className="btn-sm btn-list-link  ">
        
          Learn More
        
        </button>
        </a>
</div>
);