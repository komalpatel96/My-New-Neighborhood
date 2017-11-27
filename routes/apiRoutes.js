const axios = require("axios");
const router = require("express").Router();

router.get("/events", (req, res) => {
  axios
    .get("https://www.eventbriteapi.com/v3/events/search/?token=3G7I3225EHLBXE7DBWB7", { params: req.query })
    .then(({ data: { events } }) => res.json(events))
    .catch(err => res.status(422).json(err));
});

router.get("/weather", (req, res) => {
  axios
    .get("https://api.openweathermap.org/data/2.5/weather?appid=166a433c57516f51dfab1f7edaed8413", { params: req.query })
    .then(({ data }) => res.json(data))
    .catch(err => res.status(422).json(err));
});

router.get("/census", (req, res) => {
  axios
  .get("https://api.census.gov/data/2015/acs5?get=NAME,B07001_017E,B01003_001E,B25077_001E,B25064_001E,B25058_001E,B01002_001E,B01002_003E,B01002_002E,B23025_002E,B23025_007E,B19013_001E,B19301_001E,B07001_017E,B01001_002E,B01001_026E,B02001_001E,B02001_002E,B02001_003E,B02001_005E,B02001_008E,B02008_001E,B02009_001E,B02010_001E,B02011_001E,B03001_003E,B03002_012E,B25041_001E,B25041_002E,B25041_003E,B25041_004E,B25041_005E,B25041_006E,B25041_007E,B25003_002E,B25003_003E,B12002_003E,B12002_018E,B12002_034E,B12002_065E,B12002_080E,B12002_096E,B12002_111E,B12002_128E,B12002_158E,B12002_173E&key=b33b68a562b3dfab4b940f69ca95e9618aa6c3e5", { params: req.query })
    .then(({ data }) => res.json(data))   
    .catch(err => res.status(422).json(err));
});

router.get("/yelpThings", (req, res) => {
  axios
    .get("https://yproxy-01.herokuapp.com/search?term=things%20to%20do&limit=10&radius=1000", { params: req.query })
    .then(({ data: { businesses } }) => res.json(businesses))
    .catch(err => res.status(422).json(err));
});

router.get("/yelpMoving", (req, res) => {
  axios
    .get("https://yproxy-01.herokuapp.com/search?term=moving%20companies&limit=10&radius=1000", { params: req.query })
    .then(({ data: { businesses } }) => res.json(businesses))
    .catch(err => res.status(422).json(err));
});

router.get("/yelpRestaurants", (req, res) => {
  axios
    .get("https://yproxy-01.herokuapp.com/search?term=restaurants&limit=10&radius=1000", { params: req.query })
    .then(({ data: { businesses } }) => res.json(businesses))
    .catch(err => res.status(422).json(err));
});

router.get("/schools", (req, res) => {
  axios
    .get("https://api.greatschools.org/schools/nearby?key=76ef0963b03ae1a3bcbd9b88b1af71b5&limit=6", { params: req.query })
    .then(({ data }) => res.json(data))   
    .catch(err => res.status(422).json(err));
});

router.get("/weather", (req, res) => {
  axios
    .get("https://api.openweathermap.org/data/2.5/weather?appid=166a433c57516f51dfab1f7edaed8413", { params: req.query })
    .then(({ data }) => res.json(data))
    .catch(err => res.status(422).json(err));
});

router.get("/census", (req, res) => {
  axios
  .get("https://api.census.gov/data/2015/acs5?get=NAME,B07001_017E,B01003_001E,B25077_001E,B25064_001E,B25058_001E,B01002_001E,B01002_003E,B01002_002E,B23025_002E,B23025_007E,B19013_001E,B19301_001E,B07001_017E,B01001_002E,B01001_026E,B02001_001E,B02001_002E,B02001_003E,B02001_005E,B02001_008E,B02008_001E,B02009_001E,B02010_001E,B02011_001E,B03001_003E,B03002_012E,B25041_001E,B25041_002E,B25041_003E,B25041_004E,B25041_005E,B25041_006E,B25041_007E,B25003_002E,B25003_003E,B12002_003E,B12002_018E,B12002_034E,B12002_065E,B12002_080E,B12002_096E,B12002_111E,B12002_128E,B12002_158E,B12002_173E&key=b33b68a562b3dfab4b940f69ca95e9618aa6c3e5", { params: req.query })
    .then(({ data }) => res.json(data))   
    .catch(err => res.status(422).json(err));
});
module.exports = router;
