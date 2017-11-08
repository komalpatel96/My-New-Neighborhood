
import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {VictoryLabel, VictoryPie , VictoryChart, VictoryContainer, VictoryBar,VictoryGroup,VictoryVoronoiContainer,VictoryTooltip, VictoryLegend} from "victory";


import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";


export class PieChart extends React.Component {


render() {
return (
<div>
 <VictoryPie height={200} width={300}
  containerComponent={
      <VictoryVoronoiContainer
      voronoiDimension="x"
      labelComponent={<VictoryTooltip
      fontSize={10}
      />}
      responsive={true}
      voronoiPadding={0}     
    />  
    
  }
      data={this.props.data.gender}               
      // viewBox={"0 0 width, height"}
      innerRadius = {80}               
      colorScale={["lightblue", "lightpink" ]}
      labelRadius={75}
      fontSize={14}

      x="gender"

      y="count"

      labelComponent={

      <VictoryTooltip
        activateData={true}
        text={(datum) => datum.x + "\n" + datum.y + "%"}
        />}
      style={{
        labels: { fontSize: 10, width:30, height:30 }
        }}
      events={[{
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    target: "data",
                    mutation: () => ({style: {fill: "gold", width: 10}})
                  }, {
                    target: "labels",
                    mutation: () => ({ active: true }),
                    labelRadius: 0
                    
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
                ];}}
    }]}/>
      </div>
    );

  }


}//closes Component

