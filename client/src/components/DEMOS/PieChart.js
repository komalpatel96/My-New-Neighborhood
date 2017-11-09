
import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {VictoryLabel, VictoryPie , VictoryChart, VictoryContainer, VictoryBar,VictoryGroup,VictoryVoronoiContainer,VictoryTooltip, VictoryLegend} from "victory";


import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";


export class PieChart extends React.Component {


render() {
return (
<div className="background-icon-mw">
 <VictoryPie 

containerComponent={

  <VictoryVoronoiContainer
      voronoiDimension="x"
      labelComponent={<VictoryTooltip/>}
      responsive={true}
      voronoiPadding={20}     
  />
}

      data={this.props.data.gender}               
      colorScale={["navy", "tomato" ]}

      // viewBox={"0 0 width, height"}
      labelRadius={90}
      innerRadius = {80}                    
      
      x="gender"
      y="count"
      
      padAngle={1}

      labelComponent={

      <VictoryTooltip
        activateData={true}
        text={(datum) => datum.x + "\n" + datum.y + "%"}
        height= {60}
        width={80}
        />}
      style={{
        labels: { fontSize: 18 }
        }}
      events={[{
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    target: "data",
                    mutation: () => ({style: {fill: "gold"}})
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
                ];}}
    }]}/>
      </div>
    );

  }


}//closes Component

