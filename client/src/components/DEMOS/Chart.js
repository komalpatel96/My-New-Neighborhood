import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {VictoryLabel, VictoryPie , VictoryChart, VictoryContainer, VictoryBar,VictoryGroup,VictoryVoronoiContainer,VictoryTooltip, VictoryLegend} from "victory";

import { Demos } from "./Demos";

export class Chart extends React.Component {

  render()  {
   
  return (

<VictoryChart 
responsive={true}
domainPadding={{ x: 50}}
title="Marital Status"
fontSize={8}
>

<VictoryGroup 
containerComponent={

  <VictoryVoronoiContainer
      voronoiDimension="x"
      labelComponent={<VictoryTooltip/>}
      responsive={true}
      voronoiPadding={40} 

  />
}
offset={20} 
colorScale={["navy", "tomato"]}
padding={40}
fontSize={8} 

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
    pointerLength={10}
    activateData={false}
    text={(datum) =>  datum.x + " men" + "\n" + datum.y}
    />
  
}
    style={{
        data: {fill: "navy", width: 20},
        labels: { fill: "navy", fontSize:10 }
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
   pointerLength={10}
   text={(datum) =>  datum.x + " women" + "\n" + datum.y}
/>
    }
  style={{
          data: {fill: "tomato", width: 20},
          labels: { fill: "tomato",fontSize:10  }
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