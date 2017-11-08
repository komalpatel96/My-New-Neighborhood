const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  axios
    .get("http://www.recipepuppy.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

router.get("/events", (req, res) => {
  axios
    .get("https://www.eventbriteapi.com/v3/events/search/?token=3G7I3225EHLBXE7DBWB7", { params: req.query })
    // .then(data => console.log(data))
    .then(({ data: { events } }) => res.json(events))
    .catch(err => res.status(422).json(err));
});

router.get("/weather", (req, res) => {
  axios
    .get("https://api.openweathermap.org/data/2.5/weather?appid=166a433c57516f51dfab1f7edaed8413", { params: req.query })
    // .then(data => console.log(data))
    .then(({ data }) => res.json(data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
