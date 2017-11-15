import React from "react";
import "./WeatherListItem.css";

export const WeatherListItem = props => (
  <div className="weather-container">
  
          <div className="weather-image">
          <img 
            className={props.icon}
            alt=""/> 
            
            </div>
  
          <div className="current-weather floatLeft">Current <br/> Weather</div>
          <div className="weather-degrees"> {props.temp}˚</div>
        
          <div className="weather-details-weather">{props.weather}</div>
          

  </div>
);


