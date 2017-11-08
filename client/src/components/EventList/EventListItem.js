import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export const EventListItem = props => (
  <div className={'container'}>
    <div className={'row'}>
      <div className={'col-md-4'}>
        <Thumbnail src={props.image || "http://via.placeholder.com/165x165"} />
      </div>
      <div className={'col-md-8'}>
        <h2>{props.name} </h2>
        <h4>{props.description}</h4>
        <a rel="noreferrer noopener" target="_blank" href={props.link}>
          Link to Event
        </a>
      </div>
    </div>
  </div>
);


// <h4>{props.description.substring(0, 220)+"..."}</h4>
