import React, {Component} from "react";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API"

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

  initMap = (latCoord1, lngCoord1) =>{
    console.log("inside initMap");
    var latCoord = this.props._location.results[0].geometry.location.lat;
    var lngCoord = this.props._location.results[0].geometry.location.lat;
    console.log(latCoord);

  };





// componentDidMount(){
//   this.getLocation(this.state.mapLocation)

// }
 // componentWillUpdate(nextProps){
 //  console.log("inside componentWillReceiveProps");
 //  console.log(nextProps);
 //  console.log(this.state.mapLocation)
 //  if (nextProps._location !== this.state.mapLocation) {
 //    this.setState ({mapLocation: nextProps._location})

 //    console.log("location: ", this.state.mapLocation)
    
 //    this.getLocation(this.state.mapLocation);
 //    console.log(this.getLocation)
 //  }
 // }

  // getLocation = (location) => {
  //   console.log("inside getLocation")
  //   API.getLocation(location)
  //     .then(res => {
  //       this.setState({ address: res.data });
  //       console.log(res.data);
  //     })

  //     .catch(err => console.log(err));
  // }

  // componentWillMount(){
  //   this.getLocation(this.props._location);
  // }


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
        </Row>
      </Container>
    </li>
    );

  }

}
