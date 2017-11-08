import React, { Component } from "react";
import Info from "./Info";
import Jumbotron from "../components/Layout/Jumbotron";
import API from "../utils/API";

class Home extends Component {

  state = {
    locationSearch: "",
    location: '',
    latitude: null,
    longitude: null,
    results: null,
    redirectTo: null
  };

  handleInputChange = event => {
    this.setState({ locationSearch: event.target.value })
  };

  handleLocationSubmit = event => {
    // When the form is submitted, prevent its default behavior, get location update the location state
    event.preventDefault();

    API.getLocation(this.state.locationSearch)
      .then(res => {
        this.setState({
          location: this.state.locationSearch, 
          results: res.data,
          latitude: res.data.results[0].geometry.location.lat,
          longitude: res.data.results[0].geometry.location.lng,
          redirectTo: "/info"
         });
        
        console.log(res.data);

      }).catch(err => console.log(err));

  };

  setRedirect = path => {
    this.setState({
      redirectTo: path
    });
  }

 
  render() {
    if(!this.state.redirectTo){
      return (
        <div>
          <Jumbotron 
          handleLocationSubmit={this.handleLocationSubmit}
          handleInputChange={this.handleInputChange}
          setRedirect={this.setRedirect}
          ></Jumbotron>
        </div>
      );
    }

    else{
      return (
      <Info 
      mapResults={this.state.results} 
      location={this.state.location} 
      longitude={this.state.longitude} 
      latitude={this.state.latitude} />);
    }
    
  }
}

export default Home;
