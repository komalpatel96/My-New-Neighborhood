import axios from "axios";

export default {
  getLocation: function(query) {
  	console.log(query);
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
		params: {
			address: query,
			key: 'AIzaSyBi38CXkWj_pgUUI2QKeNOjI2rghEKPZr4'
		}
    	})
  },
  getCensus: function(query) {
    return axios.get("/api/census", { params: { for: "zip code tabulation area:" + query }});
  },

  getCensusState: function(query) {
    return axios.get("/api/census/state");
  },
  
  getEvents: function(query) {
    return axios.get("/api/events", { params: { "location.address": query}});
  },

  getWeather: function(query) {
    return axios.get("/api/weather", { params: { zip: query}});
  },

  getYelpThings: function(query) {
    return axios.get("/api/yelpThings", {params: {location: query}});
  },

  getYelpMoving: function(query) {
    return axios.get("/api/yelpMoving", {params: {location: query}});
  },

  getYelpRestaurants: function(query) {
    return axios.get("/api/yelpRestaurants", {params: {location: query}});
  },

  getSchools: function(query, query2) {
     return axios.get("/api/schools", {params: {state: query, zip: query2}});
  }
};
