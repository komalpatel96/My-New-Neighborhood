import React from 'react';

import {VictoryPie , VictoryTooltip,VictoryVoronoiContainer} from "victory";



export class DwellingPieChart extends React.Component {

render() {
return (
<div className="background-icon-dwell">


<VictoryPie

containerComponent={

  <VictoryVoronoiContainer
      voronoiDimension="x"
      labelComponent={<VictoryTooltip/>}
      responsive={true}
      voronoiPadding={20}     
  />
}

      // width={250} height={250}
      data={this.props.data.DwellingInfo}

      responsive={true}

      // categories={{ x: ["studio", "1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4 Bedrooms", "5 or more Bedrooms"] }}
      colorScale={["tomato", "orange", "yellow", "green", "navy","purple"]}
      
      labelRadius={90}
      innerRadius={80}
      
      x="name"
      y="total"
      
      // labels={(d) => `${d.y}`}
      padAngle={1}   
   
//      labels={(datum) => datum.x + "\n" + datum.y + " units"} 
//      style={{
//      labels: {
//        fontSize: 20, fill: "black"
//      }

      labelComponent={

      <VictoryTooltip
        activateData={true}
        text={(datum) => datum.x + "\n" + datum.y + " units"}
        // height= {60}
        // width={80}
        style={{
        labels: { fontSize: 18 }
        }}
        />}
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
    }]}


/>
      </div>


    );

  }


}//closes Component

