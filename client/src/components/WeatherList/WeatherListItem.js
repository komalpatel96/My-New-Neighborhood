import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./WeatherListItem.css"



export const WeatherListItem = props => (
  <li className="list-group-item text-center">
    <Container>
      <Row>
        <Col size="xs-8 sm-9">
          <h4>{props.name}</h4>
          
          <h3>Currently</h3>
          <h1>{props.temp}˚</h1>
          <img 
            className={props.icon}
            // className="icon"
            />
          <p>{props.weather}</p>
          <p>{props.wind} mph</p>
        </Col>
      </Row>
    </Container>
  </li>
  // if ({props.weatherIcon} === "01d") {
  //               $("#icon").addClass("sunny");
  //           } else if ({props.weatherIcon} === "01n") {
  //               $("#icon").addClass("clearNight");
  //           } else if ({props.weatherIcon} === "02d") {
  //               $("#icon").addClass("partlyCloudyDay");
  //           } else if ({props.weatherIcon} === "02n") {
  //               $("#icon").addClass("partlyCloudyNight");
  //           } else if ({props.weatherIcon} === "03d" || {props.weatherIcon} === "03n" || {props.weatherIcon} === "04d" || {props.weatherIcon} === "04n") {
  //               $("#icon").addClass("cloudy");
  //           } else if ({props.weatherIcon} === "09d" || {props.weatherIcon} === "09n") {
  //               $("#icon").addClass("lightRain");
  //           } else if ({props.weatherIcon} === "10d" || {props.weatherIcon} === "10n") {
  //               $("#icon").addClass("rain");
  //           } else if ({props.weatherIcon} === "11d" || {props.weatherIcon} === "11n") {
  //               $("#icon").addClass("thunderstorm");
  //           } else if ({props.weatherIcon} === {props.weatherIcon} === "13d" || {props.weatherIcon} === "13n") {
  //               $("#icon").addClass("snow");
  //           } else if ({props.weatherIcon} === "50d" || {props.weatherIcon} === "50n") {
  //               $("#icon").addClass("fog");
  //           }
);


