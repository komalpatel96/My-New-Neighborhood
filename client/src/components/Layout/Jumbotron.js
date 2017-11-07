import React from "react";

const Jumbotron = () => (
<div className="jumbotron" id="headerImage">
  <div className="container-title">
    <h1>Stop Dreaming, Start Searching</h1>
    <p> The neighborhood of your dreams is a quick search away
    </p>
    <div className="form-horizontal">
      
      <input 
        className="city-search" 
        name="search" 
        id="search" 
        placeholder="Search City, State or Zipcode" />

      <span className="input-group-btn">
        <button className="btn btn-danger"><span className="glyphicon glyphicon-search"></span> Search</button>
      </span>
    </div>
  </div>
</div>
);

export default Jumbotron;
