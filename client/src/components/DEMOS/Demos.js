
import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {VictoryLabel, VictoryPie , VictoryChart, VictoryContainer, VictoryBar,VictoryGroup,VictoryVoronoiContainer,VictoryTooltip, VictoryLegend} from "victory";

import DwellingPieChart from "./DwellingPieChart";

import Button from "../Layout/Button";
import Input from "../Layout/Input";

import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";


export class Demos extends React.Component {

render() {
return (
<div>

<Row>
<Col size="lg-4 md-4 sm-4 xs-12"> 

  <h2>POPULATION DATA:</h2>
   <p>Estimated Population: {this.props.data.population}</p> 
   <p>Estimated Income: {this.props.data.income}</p>
   <p>Estimated Income Per Capita: {this.props.data.incomePerCap}</p>    
  
</Col>

<Col size="lg-8 md-8 sm-8 xs-12">
<div className="population">
 <h2>REAL ESTATE DATA</h2>
    <p>Owner Occupied Units: {this.props.data.OCCowner}</p>
    <p>Renter Occupied Units: {this.props.data.OCCrenter}</p>
    <p>Total Dwellings: {this.props.data.BRTotal}</p>
 </div>

<div className="realEstateData">
 <DwellingPieChart data={this.props.data.DwellingInfo}/>

 </div>






</Col>
</Row>
      </div>
    );

  }


}//closes Component

