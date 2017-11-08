import React, { Component } from "react";
import Jumbotron from "./components/Layout/Jumbotron";
import Nav from "./components/Layout/Nav";
import Input from "./components/Layout/Input";
import Button from "./components/Layout/Button";
import {MapContainer} from "./components/Map";
import { EventList, EventListItem } from "./components/EventList";
import { WeatherList, WeatherListItem } from "./components/WeatherList";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";

const eventArray = [];

class App extends Component {

  state = {
    locationSearch: "",
    location: '',
    latitude: null,
    longitude: null,
    results: null,
    eventResults: [],
    weatherStats: {}
  };

  handleInputChange = event => {
    this.setState({ locationSearch: event.target.value })
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

      }).then(events => {

      API.getEvents(this.state.locationSearch)
      
      .then(res => {

       for (let i=0;i<10;i++) {

         let eventObject = {            
           name: res.data[i].name.text,
           description: (res.data[i].description.text.substring(0, 220)+"..."),
           image: res.data[i].logo.url,
           link: res.data[i].url,
         }

         eventArray.push(eventObject)
       }
       console.log(eventArray);
       this.setState({ eventResults: eventArray })
      })
    }).then(query => {
      API.getWeather(this.state.locationSearch)
      .then(res => {

        console.log(res.data);

        const weatherObject = {
    
           name: res.data.name,
           weather: res.data.weather[0].main,
           weatherIcon: res.data.weather[0].icon,
           description: res.data.weather[0].description,
           temp: Math.round(((res.data.main.temp - 273.15) * 1.8 + 32)),
           wind: res.data.wind.speed
          };

        this.setState({ weatherStats: weatherObject });
      })
    })
      .catch(err => console.log(err));
  };

 //  handleEventSubmit = event => {
 //    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
 //    event.preventDefault();

 //   API.getEvents(this.state.locationSearch)
 //     .then(res => {
       
 //       console.log("Event Data" + res.data);

 //       for (let i=0;i<10;i++) {

 //         let eventObject = {            
 //           name: res.data[i].name.text,
 //           description: (res.data[i].description.text.substring(0, 220)+"..."),
 //           image: res.data[i].logo.url,
 //           link: res.data[i].url,
 //         }

 //         eventArray.push(eventObject)
 //       }
 //     }).then(res => {

 //       this.setState({ eventResults: eventArray });
 //     })
 //     .catch(err => console.log(err));
 // };

 //  searchWeather = query => {
 //    API.getWeather(query)
 //      .then(res => {

 //        console.log("Event Data" + res.data);

 //        const weatherObject = {
    
 //           name: res.data.name,
 //           weather: res.data.weather[0].main,
 //           weatherIcon: res.data.weather[0].icon,
 //           description: res.data.weather[0].description,
 //           temp: Math.round(((res.data.main.temp - 273.15) * 1.8 + 32)),
 //           wind: res.data.wind.speed
 //          };

 //        this.setState({ weatherStats: weatherObject });
 //      })
 //      .catch(err => console.log(err));
 //  };

 //  handleWeatherSubmit = event => {
 //    event.preventDefault();
 //    this.searchWeather(this.state.locationSearch);
 //  };

 
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron 
        handleLocationSubmit={this.handleLocationSubmit}
        handleInputChange={this.handleInputChange}
        ></Jumbotron>
        <Container>
          <Row>
            <Col size="xs-12">
                {!this.state.results ? 
                <h1 className="text-center">No Location to Display</h1>
               : <MapContainer _location={this.state.results} /> }
            </Col>
           </Row>
           <Row>
            <Col size="xs-12">
                <EventList>
                  {this.state.eventResults.map(event => {
                    if (event.name !== null && event.image !== null){
                    return (
                       <EventListItem
                       key={event.name}
                       name={event.name}
                       description={event.description}
                       image={event.image}
                       link={event.url}
                       />
                    );
                  }
                  })}
                </EventList>
                <WeatherList>

                  {this.state.weatherStats.name

                ? <WeatherListItem
                    name={this.state.weatherStats.name}
                    icon={this.state.weatherStats.weatherIcon}
                    weather={this.state.weatherStats.weather}
                    temp={this.state.weatherStats.temp}
                    wind={this.state.weatherStats.wind}
                  />
                  : <h3>No Weather Results to Display</h3>
                }

                </WeatherList>

            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default App;
