import React from "react";
import Thumbnail from "../Thumbnail";

export const YelpRestaurantsListItem = props => (
 <div className={'col-md-3 card'}>
 
    <Thumbnail className="restaurant-image" src={props.image || "http://via.placeholder.com/165x165"} />
       
      <h3>{props.name}</h3>

         <a rel="noreferrer noopener" target="_blank" href={props.link}>
         <button className="btn btn-list-link btn-sm">
       
          Get Info
          </button>
        </a>

  </div>

);