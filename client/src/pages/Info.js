import React from "react";
import {MapContainer} from "../components/Map";
import { Container, Row, Col } from "../components/Grid";

const Info = (props) => {

  // state = {
  //   locationSearch: "",
  //   location: '',
  //   latitude: null,
  //   longitude: null,
  //   results: null
  // };

  // handleInputChange = event => {
  //   this.setState({ locationSearch: event.target.value })
  // };

  // handleLocationSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get location update the location state
  //   event.preventDefault();
  //   this.setState({
  //     location: this.state.locationSearch
  //   })

  //   API.getLocation(this.state.locationSearch)
  //     .then(res => {
  //       this.setState({ 
  //         results: res.data
  //        });
  //       this.setState({ 
  //         latitude: res.data.results[0].geometry.location.lat
  //        });
  //       this.setState({ 
  //         longitude: res.data.results[0].geometry.location.lng
  //        });
        
  //       console.log(res.data);

  //     }).catch(err => console.log(err));

  // };
  console.log(props)
    return (
      <div>
        <Container>
          <Row>
            <Col size="xs-12">
                {!props.mapResults ? 
                <h1 className="text-center">No Location to Display</h1>
               : <MapContainer _location={props.mapResults} /> }
            </Col>
           </Row>
        </Container>
      </div>

    );
}

export default Info;
