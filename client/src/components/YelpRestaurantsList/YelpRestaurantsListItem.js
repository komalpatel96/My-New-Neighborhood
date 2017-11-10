import React from "react";
import Thumbnail from "../Thumbnail";
import { Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const YelpRestaurantsListItem = props => (
  <div className="panel panel-danger">
  <div className="panel-heading"></div>
  <div className="panel-body">
    <Row>
      <Col size="xs-4 sm-4">
        <Thumbnail src={props.image || "http://via.placeholder.com/165x165"} />
      </Col>
      <Col size="xs-8 sm-8">
      <h3>{props.name}</h3>
        <p>Address:</p>
        <p>{props.address1}</p>
        <p>{props.address2}</p>
        <p>{props.phone}</p>
        <a rel="noreferrer noopener" target="_blank" href={props.link}>
          Yelp Link
        </a>
      </Col>
    </Row>
  </div>
</div>
);