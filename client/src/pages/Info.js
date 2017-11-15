import React from "react";
import { MapContainer, MapDataContainer } from "../components/Map";
import { Container, Row, Col } from "../components/Grid";
import {Demos, Chart, PieChart, DwellingPieChart } from "../components/DEMOS";
import { EventList, EventListItem } from "../components/EventList";
import { WeatherList, WeatherListItem } from "../components/WeatherList";
import { YelpThingsList, YelpThingsListItem } from "../components/YelpThingsList";
import { YelpMovingList, YelpMovingListItem } from "../components/YelpMovingList";
import { YelpRestaurantsList, YelpRestaurantsListItem } from "../components/YelpRestaurantsList";
import { SchoolList, SchoolListItem } from "../components/SchoolList";

const Info = (props) => {

    return (

    <Container>


    <Row>
    <div className="bottom-border">
   
    <Col size="lg-5 md-5 sm-5 xs-12" className={'map'}>
    <div> 

    {!props.mapResults ? 
    <h1 className="text-center">No Location to Display</h1>

    :  <MapDataContainer cityState={props.CityState} /> }

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

  <Demos data={props.CensusData}/>
     
</div>
</Col>

<Col size="lg-7 md-7 sm-7 xs-12" className={'map'}>
          
      <div className="padding"> 
      
          {!props.mapResults ? 
          <h1 className="text-center">No Location to Display</h1>

          : <MapContainer _location={props.mapResults} /> }
      
          </div>
</Col>
</div>

</Row>
   
   <Row>  
        <div className="bottom-border centerContent">
        <Chart data={props.CensusData}/>
        </div>
    </Row>

<Row>
<div className="bottom-border">
  <Col size="lg-6 md-6 sm-6 xs-12">
    <h2 className="centerContent" width="100%"> 
    Population<p>by gender</p>
     </h2>
    
  <PieChart data={props.CensusData}/>

  </Col>

    <Col size="lg-6 md-6 sm-6 xs-12">
     <h2 className="centerContent" width="100%"> Dwellings 
     <p>by number of Bedrooms </p>
     </h2>
        <DwellingPieChart data={props.CensusData}/>
          </Col>

</div>
</Row>

  <div className="bottom-border centerContent">
    

        <Col size="lg-12">

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
      
  </div>

  <div className="bottom-border centerContent">
      
          <Col size="lg-12 md-12 sm-12 xs-12">

            <EventList>
            {props.EBdata.map(event => {
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

            </Col>
        
    </div>

        <div  className="bottom-border centerContent">
          
             <Col size="lg-12 md-12 sm-12 xs-12">
             <h2 className="marginTopBot">Things to Do - From Yelp</h2>
         
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
                </Col>
            
          </div>

    <div className="bottom-border centerContent">

        <Col size="lg-12 md-12 sm-12 xs-12">

        <h2 className="marginTopBot">Most Popular Restaurants - From Yelp</h2>
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

          </Col>
    
  </div>

  <div className="bottom-border centerContent">

        <Col size="lg-12 md-12 sm-12 xs-12">

        <h2 className="marginTopBot">Ready to Move? Check out these moving companies</h2>

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

        </Col>

    </div>

  </Container>

  );
}

export default Info;
