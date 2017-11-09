import React, {Component} from "react";
import { Container, Row, Col } from "../Grid";
import { MapWithASearchBox } from "./MyMapComponent";


//setting states
export class MapDataContainer extends Component {
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


    <div>

          <div>
          <h2 className="resultsHeading">Showing Results for:</h2>
          <h3 className="subHead"> {this.props._location.results ? this.props._location.results[0].formatted_address : ""}</h3>
          {/* <p>Latitude: {this.props._location.results ? this.props._location.results[0].geometry.location.lat : ""}</p>
          <p className="mapText">Longitude: {this.props._location.results ? this.props._location.results[0].geometry.location.lng : ""}  </p>*/}
          </div>

 </div>

    );
  }
}
