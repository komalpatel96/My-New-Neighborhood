import React, {Component} from "react";

import { MapWithASearchBox } from "./MyMapComponent";


//setting states
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
  
        <div>

          <div>
            <MapWithASearchBox
              google={this.props.google}
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBi38CXkWj_pgUUI2QKeNOjI2rghEKPZr4&libraries=places,geometry,drawing"
              centerMe={{
                lat: this.props._location.results ? this.props._location.results[0].geometry.location.lat : "", 
                lng: this.props._location.results ? this.props._location.results[0].geometry.location.lng : ""}}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height:`500px`, width: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            </div>
        </div>

    );
  }
}
