
import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {VictoryLabel, VictoryPie , VictoryChart, VictoryContainer, VictoryBar,VictoryGroup,VictoryVoronoiContainer,VictoryTooltip, VictoryLegend} from "victory";


export class Demos extends React.Component {

render() {
return (
<div>



<div className="dataRow">
      <div className="popContainerHeading"> 
      <div className="popContainerNumber">
      {this.props.data.population}
      </div>
      <div className="popContainerTag">
      Population
      </div>
      </div>

</div>



<div className={'dataRow'}>

      <div className="popContainerLeft"> 
      <div className="popContainerNumber">
      {this.props.data.income}
      </div>
      <div className="popContainerTag">
      Income
      </div>
      </div>

      <div className="popContainer"> 
      <div className="popContainerNumber">
      {this.props.data.incomePerCap}
      </div>
      <div className="popContainerTag">
      Income <span className="small-text"> (per cap)</span>
      </div>
      </div>

</div>

<div className={'dataRow'}>

<div className="popContainerHeading"> 
<div className="popContainerNumber">
{this.props.data.BRTotal}
</div>
<div className="popContainerTag">
Total Dwellings
</div>
</div>

</div>

<div className={'dataRow'}>

      <div className="popContainerLeft"> 
      <div className="popContainerNumber">
      {this.props.data.OCCowner}
      </div>
      <div className="popContainerTag">
      Owner Occupied
      </div>
      </div>

      <div className="popContainer"> 
      <div className="popContainerNumber">
      {this.props.data.OCCrenter}
      </div>
      <div className="popContainerTag">
      Renter Occupied
      </div>
      </div>

</div>

<div className="small-text bold">
*All numbers are estimated based on 2013 US CENSUS ACS-5 data.
</div>


      </div>
    );

  }


}//closes Component

