import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
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
    // console.log("inside getCENSUS")
    // console.log(query);

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
  }
};
