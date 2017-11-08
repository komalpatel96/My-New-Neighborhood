
import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {VictoryLabel, VictoryPie , VictoryChart, VictoryContainer, VictoryBar,VictoryGroup,VictoryVoronoiContainer,VictoryTooltip, VictoryLegend} from "victory";


import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";


export default class DwellingPieChart extends React.Component {


render() {
return (
<div>


<VictoryPie
      responsive={true}
      width={500} height={500}

      categories={{ x: ["studio", "1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4 Bedrooms", "5 or more Bedrooms"] }}
      colorScale={["tomato", "orange", "gold", "cyan", "navy","purple"]}
      innerRadius={100}
      labelRadius={170}
      // labels={(d) => `${d.y}`}
      padAngle={1}
      x="name"
      y="total"
      data={this.props.data}
      labels={(datum) => datum.x + "\n" + datum.y + " units"} 
          style={{
      labels: {
        fontSize: 25, fill: "#c43a31"
      }
    }}


/>
      </div>


    );

  }


}//closes Component

