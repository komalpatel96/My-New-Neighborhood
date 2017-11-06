import React, {Component} from "react";
import { Container, Row, Col } from "../Grid";
import { MyMapComponent } from "../MapDiv";


// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    address: "",
    latitude:'',
    longitude:'',
    mapLocation: props._location

    }
  };


  render() {
   
    return(

    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-12">
          <h3> Formatted address: {this.props._location.results ? this.props._location.results[0].formatted_address : ""}  </h3>
          <h3> Latitude: {this.props._location.results ? this.props._location.results[0].geometry.location.lat : ""}  </h3>
          <h3> Longitude: {this.props._location.results ? this.props._location.results[0].geometry.location.lng : ""}  </h3>
          </Col>
          <Col size="xs-12">
            <MyMapComponent
              google={this.props.google}
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"
              center={{
                lat: this.props._location.results ? this.props._location.results[0].geometry.location.lat : "", 
                lng:  this.props._location.results ? this.props._location.results[0].geometry.location.lng : "", }}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            </Col>

        </Row>
      </Container>
    </li>
    );

  }

}
