import React from "react";
import Input from "./Input";
import { Container, Row, Col } from "../Grid";
import Button from "./Button";
import API from "../../utils/API";

const Jumbotron = props => (
    // <Container>
    <div className="jumbotron" id="headerImage">
      <div className="container-title">
       <h1>Stop Dreaming, Start Searching</h1>
         <p> The neighborhood of your dreams is a quick search away
         </p>
          <Row>
          <div className="form-horizontal">
            <Col size="xs-9 sm-10 md-8">
              <Input
                name="locationSearch"
                className="city-search"
                value={props.locationSearch}
                onChange={props.handleInputChange}
                placeholder="Search City, State or Zipcode"
                id="location-input"
              />                   
            </Col>

            <Col size="xs-3 sm-2 md-4">
              <Button
                onClick={props.handleLocationSubmit}
                type="success" 
                className="btn btn-danger"
              ><span className="glyphicon glyphicon-search"></span> Search</Button>
            </Col>
          </div>
          </Row>
      </div>
    </div>
    // </Container>
  );

export default Jumbotron;