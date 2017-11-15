import React, {Component} from "react";

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
          <h3 className="subHead"> {this.props.cityState ? this.props.cityState : ""}</h3>
          </div>
    </div>
    );
  }
}
