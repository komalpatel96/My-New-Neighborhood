import React, { Component } from "react";
import Info from "./Info";
import Jumbotron from "../components/Layout/Jumbotron";
import API from "../utils/API";
import { EventList, EventListItem } from "../components/EventList";
import { WeatherList, WeatherListItem } from "../components/WeatherList";
import { YelpList, YelpListItem } from "../components/YelpList";
import { Container, Row, Col } from "../components/Grid";
import { Demos, Chart,PieChart } from "../components/DEMOS";


const eventArray = [];

class Home extends Component {

  state = {
    locationSearch: "",
    location: '',
    latitude: null,
    longitude: null,
    results: null,
    redirectTo: null,
    eventResults: [],
    weatherStats: {},
    yelpResults: [],
    demo:[],
    gender:[],
    maleMaritalStatus:[],
    femaleMaritalStatus:[],
    maleMarried: 0,
    femaleMarried: 0,
    maleSingle: 0,
    femaleSingle:0,
    maleDivorced:0,
    femaleDivorced:0,
    maleSeparated:0,
    femaleSeparated:0,
    maleWidowed:0,
    femaleWidowed:0,
    population:0,
    medHomeValue:0,
    medContRent:0,
    income:0,
    incomePerCap:0,
    OCCowner: 0, 
    OCCrenter: 0,
    BRTotal: 0, 
    BR0: 0, 
    BR1: 0, 
    BR2: 0, 
    BR3: 0, 
    BR4: 0, 
    BR5: 0,
    age:0,
    maleAge: 0,
    femaleAge: 0,
    DwellingInfo:[],
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
         }).then(events => {

      API.getEvents(this.state.locationSearch)
      
      .then(res => {

       for (let i=0;i<10;i++) {

        if(res.data[i].name.text !== null && res.data[i].logo !== null && res.data[i].description.text !== null){

           let eventObject = {            
             EBname: res.data[i].name.text,
             EBdescription: (res.data[i].description.text.substring(0, 220)+"..."),
             EBimage: res.data[i].logo.url,
             EBlink: res.data[i].url,
           }

         eventArray.push(eventObject)
        }
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
           weatherId: res.data.weather[0].id,
           description: res.data.weather[0].description,
           temp: Math.round(((res.data.main.temp - 273.15) * 1.8 + 32)),
           wind: res.data.wind.speed
          };

        this.setState({ weatherStats: weatherObject });
      })
    }).then(event => {
      API.getYelp(this.state.locationSearch)
      .then(res => {
        
        console.log(res.data);
        
        const yelpArray = [];

        for (let i=0;i<res.data.length;i++) {

          let yelpObject = {            
            YTname: res.data[i].name,
            YTaddress1: res.data[i].location.display_address[0],
            YTaddress2: res.data[i].location.display_address[1],
            YTimage: res.data[i].image_url,
            YTlink: res.data[i].url,
          }

          yelpArray.push(yelpObject)
        }

        this.setState({ yelpResults: yelpArray });
      })
    }).then(query1=>{
      API.getCensus(this.state.locationSearch)
  // .then(res => this.setState({ recipes: res.data }))
  .then(res => { 
    console.log(res.data);

var updatedAge = parseFloat(res.data[1][6]).toFixed(2);
var updatedFemaleAge = parseFloat(res.data[1][7]).toFixed(2);
var updatedMaleAge = parseFloat(res.data[1][8]).toFixed(2);

console.log(updatedAge + "  " + updatedFemaleAge + "  " + "  " + updatedMaleAge);

  var demos = {
    name: res.data[1][0],
    sameHouse1yr2: res.data[1][1],
    population: res.data[1][2],
    medHomeValue: res.data[1][3],
    medGrossRent: res.data[1][4],
    medContractRent: res.data[1][5],
    age: updatedAge,
    medianFemaleAge: updatedFemaleAge,
    medianMaleAge: updatedMaleAge,
    employLF: res.data[1][9],
    employNotLF: res.data[1][10],
    income: res.data[1][11],
    incomePerCap: res.data[1][12],
    sameHouse1yr: res.data[1][13],
    sexMale: res.data[1][14],
    sexFemale: res.data[1][15],
    totalRace: res.data[1][16],
    raceWhite: res.data[1][17],
    raceBlack: res.data[1][18],
    raceAsian: res.data[1][19],
    racetwoOrMore: res.data[1][20],
    AOMwhite: res.data[1][21],
    AOMblack: res.data[1][22],
    AOMamericanIndian: res.data[1][23],
    AOMasian: res.data[1][24],
    AOMhispanic: res.data[1][25],
    BRTotal: res.data[1][27], 
    BR0: res.data[1][28], 
    BR1: res.data[1][29], 
    BR2: res.data[1][30], 
    BR3: res.data[1][31], 
    BR4: res.data[1][32], 
    BR5: res.data[1][33], 
    OCCowner: res.data[1][34], 
    OCCrenter: res.data[1][35],
    maleNeverMarried:res.data[1][36],
    maleMarried:res.data[1][37],
    maleSeparated:res.data[1][38],
    maleWidowed:res.data[1][39],
    maleDivorced:res.data[1][40],
    femaleNeverMarried:res.data[1][41],
    femaleMarried:res.data[1][42],
    femaleSeparated:res.data[1][43],
    femaleWidowed:res.data[1][44],
    femaleDivorced:res.data[1][45]
  }

  var malePercent = Math.round((demos.sexMale * 100) / demos.population);
 
  var femalePercent = 100 - malePercent;

  var genderSet = [
    {gender: "male", count: malePercent},
    {gender: "female", count: femalePercent}
  ]

  var maleMarried = res.data[1][37];
  var femaleMarried = res.data[1][42];
  var maleDivorced = res.data[1][40];
  var femaleDivorced = res.data[1][45];
  var maleSeparated = res.data[1][38];
  var femaleSeparated = res.data[1][43];
  var maleWidowed = res.data[1][39];
  var femaleWidowed = res.data[1][44];
  var maleSingle = res.data[1][36];
  var femaleSingle = res.data[1][41];

  var dwellingsArr = [
  {name: "OneBedroom", total:res.data[1][29]}, 
  {name: "Studio", total:res.data[1][28]}, 
  {name: "TwoBedrooms", total:res.data[1][30]}, 
  {name: "ThreeBedrooms", total:res.data[1][31]}, 
  {name: "FourBedrooms",total:res.data[1][32] },
  {name: "FiveBedrooms", total:res.data[1][33]  }, 

  ]

  // var dwellings = [];

  // for (var i = 0; i < dwellingsArr.length; i++ ){

  // var tempNumber=  (dwellingsArr[i].total * 100) / demos.BRTotal;
  
  // dwellingsArr[i].average = tempNumber.toFixed(2);
  // console.log(dwellingsArr[i]);

  // }

        this.setState({
          demo: demos,
          gender:genderSet,
          // maleMaritalStatus: maleMaritalStatus,
          // femaleMaritalStatus: femaleMaritalStatus,
          femaleMarried: femaleMarried,
          maleMarried: maleMarried,
          maleDivorced: maleDivorced,
          femaleDivorced: femaleDivorced,
          maleSeparated: maleSeparated,
          femaleSeparated: femaleSeparated,
          maleWidowed:maleWidowed,
          femaleWidowed: femaleWidowed,
          maleSingle: maleSingle,
          femaleSingle: femaleSingle,
          population: res.data[1][2],
          medHomeValue: res.data[1][3],
          medContractRent: res.data[1][5],
          age: updatedAge,
          maleAge: updatedMaleAge,
          femaleAge: updatedFemaleAge,
          income: res.data[1][11],
          incomePerCap: res.data[1][12],
          OCCowner: res.data[1][34], 
          OCCrenter: res.data[1][35],
          BRTotal: res.data[1][27], 
          BR0: res.data[1][28], 
          BR1: res.data[1][29], 
          BR2: res.data[1][30], 
          BR3: res.data[1][31], 
          BR4: res.data[1][32], 
          BR5: res.data[1][33],
          DwellingInfo: dwellingsArr
        });


    console.log("==========================  this is state.demo");
    console.log(this.state.DwellingInfo);
        console.log(this.state.demo);
        console.log(this.state.maleMarried);
  })
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
          handleFormSubmitCensus={this.handleFormSubmitCensus}
          ></Jumbotron>
        </div>
      );
    }

    else{
      return (
      <div>
      <Info 
        mapResults={this.state.results} 
        location={this.state.location} 
        longitude={this.state.longitude} 
        latitude={this.state.latitude}
        name={this.state.weatherStats.name}
        icon={this.state.weatherStats.weatherIcon}
        weather={this.state.weatherStats.weather}
        temp={this.state.weatherStats.temp}
        wind={this.state.weatherStats.wind}
        
        EBdata={this.state.eventResults}
        YTdata={this.state.yelpResults}
        CensusData = {this.state}

         >
      </Info>
      </div>
      )
    }

    
  }
}

export default Home;
