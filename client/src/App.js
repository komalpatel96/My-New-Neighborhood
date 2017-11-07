import React, { Component } from "react";
import Jumbotron from "./components/Layout/Jumbotron";
import Nav from "./components/Layout/Nav";
import Input from "./components/Layout/Input";
import Button from "./components/Layout/Button";
import {MapContainer} from "./components/Map";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {

  state = {
    locationSearch: "",
    location: '',
    latitude: null,
    longitude: null,
    results: null
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLocationSubmit = event => {
    // When the form is submitted, prevent its default behavior, get location update the location state
    event.preventDefault();
    this.setState({
      location: this.state.locationSearch
    })

    API.getLocation(this.state.locationSearch)
      .then(res => {
        this.setState({ 
          results: res.data
         });
        this.setState({ 
          latitude: res.data.results[0].geometry.location.lat
         });
        this.setState({ 
          longitude: res.data.results[0].geometry.location.lng
         });
        
        console.log(res.data);

      }).catch(err => console.log(err));

  };

 
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
          
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                  <div className="form-horizontal">
                    <Col size="xs-9 sm-10 md-8">
                      <Input
                        name="locationSearch"
                        className="city-search"
                        value={this.state.locationSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search City, State or Zipcode"
                        id="location-input"
                      />                   
                    </Col>

                    <Col size="xs-3 sm-2 md-4">
                      <Button
                        onClick={this.handleLocationSubmit}
                        type="success" 
                        className="btn btn-danger"
                      ><span className="glyphicon glyphicon-search"></span> Search</Button>
                    </Col>
                  </div>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
                {!this.state.results ? 
                <h1 className="text-center">No Location to Display</h1>
               : <MapContainer _location={this.state.results} /> }
            </Col>
           </Row>
        </Container>
      </div>

    );
  }
}

export default App;
