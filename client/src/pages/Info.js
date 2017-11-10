import React from "react";
import { MapContainer, MapDataContainer } from "../components/Map";
import { Container, Row, Col } from "../components/Grid";
import {Demos, Chart, PieChart, DwellingPieChart } from "../components/DEMOS";
import { EventList, EventListItem } from "../components/EventList";
import { WeatherList, WeatherListItem } from "../components/WeatherList";
import { SchoolList, SchoolListItem } from "../components/SchoolList";
import { YelpThingsList, YelpThingsListItem } from "../components/YelpThingsList";
import { YelpMovingList, YelpMovingListItem } from "../components/YelpMovingList";
import { YelpRestaurantsList, YelpRestaurantsListItem } from "../components/YelpRestaurantsList";

const Info = (props) => {

  console.log(props)
    return (

<div className={"overflowHidden"}>
    <Container>

  {/*FIRST ROW */}
    <Row>
    <div className="bottom-border">
   
    <Col size="lg-6 md-6 sm-6 xs-12" className={'map'}>
    <div> 

  {/*location data */}
    {!props.mapResults ? 
    <h1 className="text-center">No Location to Display</h1>

    :  <MapDataContainer _location={props.mapResults} /> }   
  {/*Census data
  //*/}
  <Demos data={props.CensusData}/> 
     
</div>
</Col>

<Col size="lg-6 md-3 sm-4 xs-12" className={'map'}>
          
      <div className="padding"> 
      {/* MAP */}
          {!props.mapResults ? 
          <h1 className="text-center">No Location to Display</h1>

          : <MapContainer _location={props.mapResults} /> }
      
          </div>
</Col>
</div>

</Row>

 {/* SECOND ROW */}
   <div className="bottom-border">
   <Row>  
   <Col size="lg-4 md-4 sm-4 xs-12">

     {/*Census data */}
   <Demos data={props.CensusData}/>
   </Col>
    <Col size="lg-8 md-8 sm-8 xs-12">


        <h2 className="centerContent">Marital Status<p>by gender</p>
     </h2>
        <Chart data={props.CensusData}/>
    </Col>

    </Row>

    <Row>

  <Col size="lg-6 md-6 sm-6 xs-12">
    <h2 className="centerContent" width="100%"> Population<p>by gender </p>
     </h2>
    
  <PieChart data={props.CensusData}/>

  </Col>

    <Col size="lg-6 md-6 sm-6 xs-12">
     <h2 className="centerContent" width="100%"> Dwellings 
     <p>by number of Bedrooms </p>
     </h2>
        <DwellingPieChart data={props.CensusData}/>
          </Col>
</Row>
</div>

   <div className="bottom-border">

 {/*THIRD ROW */}

          <Row>

          <Col size="lg-12 md-12 sm-12 xs-12">

          <h2>Upcoming Events In This Area </h2>

          <div>
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

            </div>
            </Col>
            </Row>
          </div>
 {/* FOURTH ROW */}

    <div className="bottom-border">
             <Row>
             <Col size="lg-12 md-12 sm-12 xs-12">


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
          
            <YelpThingsList> 
                {props.YTdata.map(things => {
                   return(
                   <YelpThingsListItem
                      key = {things.YTname}
                      name={things.YTname}
                      address1={things.YTaddress1}
                      address2={things.YTaddress2}
                      image={things.YTimage}
                      link= {things.YTlink}
                      phone={things.YTphone} 
                       />
                      );
                    }
                  )}
                </YelpThingsList>

                <YelpRestaurantsList> 
                {props.YRdata.map(restaurants => {
                   return(
                   <YelpRestaurantsListItem
                      key = {restaurants.YRname}
                      name={restaurants.YRname}
                      address1={restaurants.YRaddress1}
                      address2={restaurants.YRaddress2}
                      image={restaurants.YRimage}
                      link= {restaurants.YRlink}
                      phone={restaurants.YRphone} 
                       />
                      );
                    }
                  )}
                </YelpRestaurantsList>

                <YelpMovingList> 
                {props.YMdata.map(moving => {
                   return(
                   <YelpMovingListItem
                      key = {moving.YMname}
                      name={moving.YMname}
                      address1={moving.YMaddress1}
                      address2={moving.YMaddress2}
                      image={moving.YMimage}
                      link= {moving.YMlink}
                      phone={moving.YMphone} 
                       />
                      );
                    }
                  )}
                </YelpMovingList>

                <SchoolList> 
                {props.Sdata.map(schools => {
                   return(
                   <SchoolListItem
                      key = {schools.Sname}
                      name={schools.Sname}
                      type={schools.Stype}
                      address={schools.Saddress}
                      gradeRange={schools.SgradeRange}
                      statsLink={schools.SstatsLink}
                      ratings={schools.Sratings}
                      reviews={schools.Sreviews}
                      phone={schools.Sphone} 
                       />
                      );
                    }
                  )}
                </SchoolList>

          </Col>
        
        </Row>

    </div>

  </Container>

  </div>
  );
}

export default Info;
