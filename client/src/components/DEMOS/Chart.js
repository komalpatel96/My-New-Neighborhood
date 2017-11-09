import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {VictoryLabel, VictoryPie , VictoryChart, VictoryContainer, VictoryBar,VictoryGroup,VictoryVoronoiContainer,VictoryTooltip, VictoryLegend} from "victory";

import { Demos } from "./Demos";

export class Chart extends React.Component {

  render() 
  {

    
  return (

<VictoryChart height={400} width={600}
domainPadding={{ x:  80}}
title="Marital Status"
containerComponent={

  <VictoryVoronoiContainer
      voronoiDimension="x"
      labelComponent={<VictoryTooltip/>}
      responsive={true}
      voronoiPadding={20}     
  />
}>

<VictoryGroup 
offset={20} 
colorScale={["lightblue", "lightpink"]}
padding={0}
> 
<VictoryBar 
    data={[ 
      { x: "married", y: parseInt(this.props.data.maleMarried) },
      { x: "single", y: parseInt(this.props.data.maleSingle)},
      { x: "divorced", y: parseInt(this.props.data.maleDivorced) },
      { x: "widowed", y: parseInt(this.props.data.maleWidowed) },
      { x: "separated", y: parseInt(this.props.data.maleSeparated) } ]}
    categories={{ x: ["married", "single", "divorced","widowed","separated"] }}
    
    labelComponent={
    <VictoryTooltip
    activateData={true}
    text={(datum) =>  datum.x + " men" + "\n" + datum.y}
    />
  
}
style={{
        data: {fill: "lightblue", width: 20},
        labels: { fill: "black" }
        }}
events={[{
  target: "data",
  eventHandlers: {
onMouseOver: () => {
      return [
        {
          target: "data",
          mutation: () => ({style: {fill: "gold", width: 25}})
        }, {
          target: "labels",
          mutation: () => ({ active: true }),
        
        }
      ];
    },
onMouseOut: () => {
      return [
        {
          target: "data",
          mutation: () => {}
        }, {
          target: "labels",
          mutation: () => ({ active: false })
        }
      ];
    }
  }
}]}

/>

<VictoryBar 
  data={[
    { x: "married", y: parseInt(this.props.data.femaleMarried)},
    { x: "single", y: parseInt(this.props.data.femaleSingle)},
    { x: "divorced", y: parseInt(this.props.data.femaleDivorced) },
    { x: "widowed", y: parseInt(this.props.data.femaleWidowed) },
    { x: "separated", y: parseInt(this.props.data.femaleSeparated) } 
    ]}
    labelComponent={

  <VictoryTooltip
  activateData={true}
   pointerLength={30}
   text={(datum) =>  datum.x + " women" + "\n" + datum.y}
/>
    }
  style={{
              data: {fill: "lightpink", width: 20},
              labels: { fill: "black", }
            }}
  events={[{
      target: "data",
      eventHandlers: {
  onMouseOver: () => {
          return [
            {
              target: "data",
              mutation: () => ({style: {fill: "gold", width: 25}})
            }, {
              target: "labels",
              mutation: () => ({ active: true })
            }
          ];
        },
  onMouseOut: () => {
          return [
            {
              target: "data",
              mutation: () => {}
            }, {
              target: "labels",
              mutation: () => ({ active: false })
            }
          ];
        }
      }
    }]}

    />

</VictoryGroup>

</VictoryChart>

    )//end of return
  }// end of render
}// end of class