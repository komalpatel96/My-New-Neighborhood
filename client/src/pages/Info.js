import React from "react";
import {MapContainer} from "../components/Map";
import { Container, Row, Col } from "../components/Grid";
import {Demos, Chart, PieChart } from "../components/DEMOS";
import { EventList, EventListItem } from "../components/EventList";
import { WeatherList, WeatherListItem } from "../components/WeatherList";
import { YelpList, YelpListItem } from "../components/YelpList";

const Info = (props) => {

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

            <Row>
            <Col size="xs-12">
              <Demos data={props.CensusData}/>
              </Col>
            </Row>

          <Row>
           <Col size="lg-6 md-6 sm-6 xs-12">
            <h2 width="100%">Marital Status</h2>
           <Chart data={props.CensusData}/>
           </Col>

          <Col size="lg-6 md-6 sm-6 xs-12">
          <h2 width="100%"> Population By Gender </h2>

           <PieChart data={props.CensusData}/>
           </Col>
           </Row>
            <Row>
            <Col size="xs-12">
                <EventList> 
                {props.EBdata.map(event => {
                  console.log(event);
                   return(
                   <EventListItem
                      key = {event.EBname}
                      name={event.EBname}
                      description= {event.EBdescription}
                      image={event.EBimage}
                      link= {event.EBlink} 
                       />
                       );
                 }
                  )}

                </EventList> 
                <WeatherList>
                  {props.name
                ? <WeatherListItem
                    name={props.name}
                    icon={props.icon}
                    weather={props.weather}
                    temp={props.temp}
                    wind={props.wind}
                  />
                  : <h3>No Weather Results to Display</h3>
                }

                </WeatherList>
                <YelpList> 
                {props.YTdata.map(things => {
                  console.log(things);
                   return(
                   <YelpListItem
                      key = {things.YTname}
                      name={things.YTname}
                      address1={things.YTaddress1}
                      address2={things.YTaddress2}
                      image={things.YTimage}
                      link= {things.YTlink} 
                       />
                      );
                    }
                  )}
                </YelpList>

            </Col>
          </Row>

           </Row>
        </Container>
      </div>

    );
}

export default Info;
