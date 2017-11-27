import React from 'react';

import {VictoryChart, VictoryBar,VictoryGroup,VictoryVoronoiContainer,VictoryTooltip} from "victory";

export class Chart extends React.Component {

  render()  {
   
  return (

<div>
<h2 className="centerContent">Marital Status by Gender
     </h2>

<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 spouse-data"> 
 <span className="spouse-header">MARRIED</span>
<p>Men: {this.props.data.maleMarried} | Women: {this.props.data.femaleMarried} </p>


<span className="spouse-header">SINGLE</span>
<p>Men: {this.props.data.maleSingle} | Women: {this.props.data.femaleSingle}</p>

<span className="spouse-header">DIVORCED</span>
<p>Men: {this.props.data.maleDivorced} | Women:  {this.props.data.femaleDivorced}</p>

<span className="spouse-header">WIDOWED</span>
<p>Men: {this.props.data.maleWidowed} | Women:  {this.props.data.femaleWidowed}</p>


<span className="spouse-header">SEPARATED</span>
<p>Men: {this.props.data.maleSeparated} | Women: {this.props.data.femaleSeparated}</p>

</div>

<div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
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
// padding={40}

> 
<VictoryBar 

    data={[ 
      { x: "Married", y: parseInt(this.props.data.maleMarried, 10) },
      { x: "Single", y: parseInt(this.props.data.maleSingle, 10)},
      { x: "Divorced", y: parseInt(this.props.data.maleDivorced, 10) },
      { x: "Widowed", y: parseInt(this.props.data.maleWidowed,10) },
      { x: "Separated", y: parseInt(this.props.data.maleSeparated, 10) } ]}
    categories={{ x: ["Married", "Single", "Divorced","Widowed","Separated"] }}
    
    labelComponent={

    <VictoryTooltip
    pointerLength={10}
    activateData={false}
    text={(datum) =>  datum.x + " Men\n" + datum.y}
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
    { x: "Married", y: parseInt(this.props.data.femaleMarried, 10)},
    { x: "Single", y: parseInt(this.props.data.femaleSingle, 10)},
    { x: "Divorced", y: parseInt(this.props.data.femaleDivorced, 10) },
    { x: "Widowed", y: parseInt(this.props.data.femaleWidowed, 10) },
    { x: "Separated", y: parseInt(this.props.data.femaleSeparated, 10) } 
    ]}
    labelComponent={

  <VictoryTooltip
  activateData={true}
   pointerLength={10}
   text={(datum) =>  datum.x + " Women\n" + datum.y}
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
</div>
</div>

    )//end of return
  }// end of render
}// end of class