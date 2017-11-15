import React, { Component } from "react";
import Info from "./Info";
import Jumbotron from "../components/Layout/Jumbotron";
import API from "../utils/API";

let eventArray = [];

class Home extends Component {

  state = {
    state: "",
    zipCode: "",
    locationSearch: "",
    location: '',
    latitude: null,
    longitude: null,
    results: null,
    redirectTo: null,
    eventResults: [],
    weatherStats: {},
    yelpThingsResults: [],
    yelpMovingResults: [],
    yelpRestaurantsResults: [],
    schoolsResults: [],
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
    cityState: ""
  };

  handleInputChange = event => {
    this.setState({ locationSearch: event.target.value })
  };

  handleLocationSubmit = event => {
    
    event.preventDefault();
    API.getLocation(this.state.locationSearch)
    .then(res =>{
      this.setState({
      locationSearch: res.data.results[0].geometry.location.lat+" "+res.data.results[0].geometry.location.lng
      });
    }).then( event => {
      API.getLocation(this.state.locationSearch)
      .then(res => {
        
        let postalCodes = res.data.results[0].address_components.filter(function (it) {return it.types.indexOf('postal_code') !== -1;}).map(function (it) {return it.long_name;});
        let str = res.data.results[0].formatted_address;
        let str2 = str.split(",");
        let saveState = str2[2].split(" ");
        
        let string = res.data.results[0].formatted_address;
        let resp = string.split(",").reverse();
        var cityState = resp[2] + ", " + resp[1];

        this.setState({
          location: this.state.locationSearch, 
          results: res.data,
          latitude: res.data.results[0].geometry.location.lat,
          longitude: res.data.results[0].geometry.location.lng,
          zipCode: postalCodes[0],
          state: saveState[1],
          cityState: cityState,
          redirectTo: "/info"
          });
    }).then(events => {

      API.getEvents(this.state.zipCode)
      
      .then(res => {
       
       console.log(res.data);

       for (let i=0;i<10;i++) {

        if(res.data.length !== 0 && res.data[i] !== undefined && res.data[i].name.text !== null && res.data[i].logo !== null && res.data[i].description.text !== null){

           let eventObject = {            
             EBname: res.data[i].name.text,
             EBdescription: (res.data[i].description.text.substring(0, 220)+"..."),
             EBimage: res.data[i].logo.original.url,
             EBlink: res.data[i].url,
           }

         eventArray.push(eventObject)
        }
       }
       
       this.setState({ eventResults: eventArray })
      })
    }).then(query => {
      API.getWeather(this.state.zipCode)
      .then(res => {

        let weatherObject = {
    
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

      API.getYelpThings(this.state.zipCode)

      .then(res => {
        
        let yelpThingsArray = [];

        for (let i=0;i<res.data.length;i++) {

          let yelpThingsObject = {            
            YTname: res.data[i].name,
            YTaddress1: res.data[i].location.display_address[0],
            YTaddress2: res.data[i].location.display_address[1],
            YTimage: res.data[i].image_url,
            YTphone: res.data[i].display_phone,
            YTlink: res.data[i].url,
          }

          yelpThingsArray.push(yelpThingsObject)
        }

        this.setState({ yelpThingsResults: yelpThingsArray });
      })
    }).then(event => {

      API.getYelpRestaurants(this.state.zipCode)

      .then(res => {
        
        let yelpRestaurantsArray = [];

        for (let i=0;i<res.data.length;i++) {

          let yelpRestaurantsObject = {            
            YRname: res.data[i].name,
            YRaddress1: res.data[i].location.display_address[0],
            YRaddress2: res.data[i].location.display_address[1],
            YRimage: res.data[i].image_url,
            YRphone: res.data[i].display_phone,
            YRlink: res.data[i].url,
          }

          yelpRestaurantsArray.push(yelpRestaurantsObject)
        }

        this.setState({ yelpRestaurantsResults: yelpRestaurantsArray });
      })
    }).then(event => {

      API.getYelpMoving(this.state.zipCode)

      .then(res => {

        let yelpMovingArray = [];

        for (let i=0;i<res.data.length;i++) {

          let yelpMovingObject = {            
            YMname: res.data[i].name,
            YMaddress1: res.data[i].location.display_address[0],
            YMaddress2: res.data[i].location.display_address[1],
            YMimage: res.data[i].image_url,
            YMphone: res.data[i].display_phone,
            YMlink: res.data[i].url,
          }

          yelpMovingArray.push(yelpMovingObject)
        }

        this.setState({ yelpMovingResults: yelpMovingArray });
      })
    }).then(event => {

      API.getSchools(this.state.state, this.state.zipCode)

      .then(res => {

        let schoolsArray = [];

        for (let i=0;i<res.data.schools.school.length;i++) {

          let schoolsObject = {            
            Sname: res.data.schools.school[i].name,
            Stype: res.data.schools.school[i].type,
            SgradeRange: res.data.schools.school[i].gradeRange,
            Saddress: res.data.schools.school[i].address,
            Sphone: res.data.schools.school[i].phone,
            SstatsLink: res.data.schools.school[i].schoolStatsLink,
            Sratings: res.data.schools.school[i].ratingsLink,
            Sreviews: res.data.schools.school[i].reviewsLink,
          }

          schoolsArray.push(schoolsObject)
        }
        
        this.setState({ schoolsResults: schoolsArray });
        
      })
    }).then(query1=>{
      API.getCensus(this.state.zipCode)
  .then(res => { 

var updatedAge = parseFloat(res.data[1][6]).toFixed(2);
var updatedFemaleAge = parseFloat(res.data[1][7]).toFixed(2);
var updatedMaleAge = parseFloat(res.data[1][8]).toFixed(2);

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
  {name: "FourBedrooms",total:res.data[1][32]},
  {name: "FiveBedrooms", total:res.data[1][33]}, 
  ]

        this.setState({
          demo: demos,
          gender:genderSet,
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

  })
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
        YTdata={this.state.yelpThingsResults}
        YRdata={this.state.yelpRestaurantsResults}
        YMdata={this.state.yelpMovingResults}
        CensusData={this.state}
        Sdata={this.state.schoolsResults}
        CityState={this.state.cityState}

         >
      </Info>
      </div>
      )
    }

    
  }
}

export default Home;
