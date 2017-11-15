import React from 'react';


export class Demos extends React.Component {

render() {
return (
<div>



<div className="dataRow">
      <div className="popContainerHeading">
      <div className="popContainerTag pop-title">
      Population
      </div> 
      <div className="popContainerNumber">
      {this.props.data.population}
      </div>

      </div>

</div>



<div className={'dataRow'}>

      <div className="popContainerLeft"> 
      <div className="popContainerTag pop-title">
      Income
      </div>
      <div className="popContainerNumber">
      {this.props.data.income}
      </div>

      </div>

      <div className="popContainer"> 
       <div className="popContainerTag pop-title">
      Income <span className="small-text"> (per cap)</span>
      </div>
      <div className="popContainerNumber">
      {this.props.data.incomePerCap}
      </div>
     
      </div>

</div>

<div className={'dataRow'}>

<div className="popContainerHeading"> 
<div  className="popContainerTag occ-title">
Total Dwellings
</div>
<div className="popContainerNumber">
{this.props.data.BRTotal}
</div>

</div>

</div>

<div className={'dataRow'}>

      <div className="popContainerLeft"> 
      <div className="popContainerTag occ-title">
      Owner Occupied
      </div> 
      <div className="popContainerNumber">
      {this.props.data.OCCowner}
      </div>

      </div>

      <div className="popContainer">
       <div className="popContainerTag occ-title">
      Renter Occupied
      </div> 
      <div className="popContainerNumber">
      {this.props.data.OCCrenter}
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

