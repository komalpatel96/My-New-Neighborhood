const axios = require("axios");
const router = require("express").Router();
const db = require("../models")

// const stateController = require("../controllers/stateController");


// router.route("/")
//   .get(stateController.findAll)
//   .post(stateController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(stateController.findById)
//   .put(stateController.update)
//   .delete(stateController.remove);


router.get("/recipes", (req, res) => {
  axios
    .get("http://www.recipepuppy.com/api/", {
      params: req.query
    })
    .then(({
      data: {
        results
      }
    }) => res.json(results))
    .catch(err => res.status(422).json(err));
});


// List of codes for Demographic search with key
// 0 name = NAME
// 1 age = B01002_001E
// 2 population = B01003_001E
// 3 medHomeValue = B25077_001E
// 4 medGrossRent = B25064_001E
// 5 medContRent = B25058_001E
// 6 sameHouse1yr = B07001_017E
// 7 emplLF = B23025_002E
// 8 emplNotLF = B23025_007E
// 9 medMaleAge = B01002_002E
// 10 medFemaleAge = B01002_003E
// 11 sexMale = B01001_002E
// 12 sexFemale = B01001_026E 
// 13 incomePerCap = B19301_001E
// 14 income = B19013_001E
// 15 RaceTotal = B02001_001E B02003_001E
// 16 RaceWhite = B02001_002E
// 17 RaceBlack = B02001_003E
// 18 RaceAsian = B02001_005E
// 19 

// 20 two or more races = B02001_008E
// 21 white alone or mixed: B02008_001E
// 22 black alone or mixed: B02009_001E
// 23 american indian: B02010_001E
// 24 asian alone or combined: B02011_001E
// 25 hispanic or latino: B03001_003E
// 26 hispanic or latino by race: B03002_012E

// 27 bedrooms total: B25041_001E
// 28 no bedrooms: B25041_002E
// 29 1 bedroom: B25041_003E
// 30 2 bedroom: B25041_004E
// 31 3 bedrooms: B25041_005E
// 32 4 bedrooms: B25041_006E
// 33 5 or more BR: B25041_007E
// 34 owner occupied: B25003_002E
// 35 renter occupied: B25003_003E
// 36 male under 5 B01001_003E
// 37 male 5-9  B01001_004E
// 38 male10-14 B01001_005E
// 39 male 15-17  B01001_006E
// 40 male 18-19  B01001_007E
// 41 male 20 B01001_008E
// 42 male 21 B01001_009E
// 43 male 22-24  B01001_010E
// 44 male 25-29  B01001_011E
// 45 male 30-34  B01001_012E
// 46 male 35-39  B01001_013E
// 47 male 40-44  B01001_014E
// 48 male 45-49  B01001_015E
// 49 male 50-54  B01001_016E
// 50 male 55-59  B01001_017E
// 51 male 60-61  B01001_018E
// 52 male 62-64  B01001_019E
// 53 male 65-66  B01001_020E
// 54 male 67-69  B01001_021E
// 55 male 70-74  B01001_022E
// 56 male 75-79  B01001_023E
// 57 male 80-84  B01001_024E
// 58 male 85 and Older B01001_025E
  
  
// 59 female under 5  B01001_027E
// 60 female 5-9  B01001_028E
// 61 female10-14 B01001_029E
// 62 female 15-17  B01001_030E
// 63 female 18-19  B01001_031E
// 64 female 20 B01001_032E
// 65 female 21 B01001_033E
// 66 female 22-24  B01001_034E
// 67 female 25-29  B01001_035E
// 68 female 30-34  B01001_036E
// 69 female 35-39  B01001_037E
// 70 female 40-44  B01001_038E
// 71 female 45-49  B01001_039E
// 72 female 50-54  B01001_040E
// 73 female 55-59  B01001_041E
// 74 female 60-61  B01001_042E
// 75 female 62-64  B01001_043E
// 76 female 65-66  B01001_044E
// 77 female 67-69  B01001_045E
// 78 female 70-74  B01001_046E
// 79 female 75-79  B01001_047E
// 80 female 80-84  B01001_048E
// 81 female 85 and Older B01001_049E

router.get("/census/state", (req, res) => {
  console.log("made it to the route");
  axios
  .get("https://api.census.gov/data/2015/acs5?get=NAME,B01002_001E,B01003_001E,B25077_001E,B25064_001E,B25058_001E,B07001_017E,B23025_002E,B23025_007E,B01002_002E,B01002_003E,B01001_002E,B01001_026E,B19301_001E,B19013_001E,B02001_001E,B02001_002E,B02001_003E,B02001_005E&key=b33b68a562b3dfab4b940f69ca95e9618aa6c3e5&for=state:*")
   // .then(data => console.log(data))
  .then(({data})  => {
      res.json(data);

      console.log("============================================&&&&&&&&&&&&&&&&&&&&&this is the data Test");
      console.log(data[2][0]);
      console.log(data.length);

  var stateList = [];
  for (var i = 1; i < data.length;i++) {

    var demos = {
    name: data[i][0],
    age: data[i][1],
    population: data[i][2],
    medHomeValue: data[i][3],
    medGrossRent: data[i][4],
    medContRent: data[i][5],
    sameHouse1yr: data[i][6],
    employLF: data[i][7],
    employNotLF: data[i][8],
    medMaleAge: data[i][9],
    medFemaleAge: data[i][10],
    sexMale: data[i][11],
    sexFemale: data[i][12],
    incomePerCap: data[i][13],
    income: data[i][14],
    raceTotal: data[i][15],
    raceWhite: data[i][16],
    raceBlack: data[i][17],
    raceAsian: data[i][18],
    racetwoOrMore: data[i][19]

  }

  console.log(demos);

  stateList.push(demos);

} //end of for loop

    db.StateData
    .insertMany(stateList)
    .then(function(dbState) {
      console.log(dbState);

    });

    
    })// end of then 
    .catch(err => res.status(422).json(err));
});

router.get("/census", (req, res) => {
  axios
  .get("https://api.census.gov/data/2015/acs5?get=NAME,B07001_017E,B01003_001E,B25077_001E,B25064_001E,B25058_001E,B01002_001E,B01002_003E,B01002_002E,B23025_002E,B23025_007E,B19013_001E,B19301_001E,B07001_017E,B01001_002E,B01001_026E,B02001_001E,B02001_002E,B02001_003E,B02001_005E,B02001_008E,B02008_001E,B02009_001E,B02010_001E,B02011_001E,B03001_003E,B03002_012E,B25041_001E,B25041_002E,B25041_003E,B25041_004E,B25041_005E,B25041_006E,B25041_007E,B25003_002E,B25003_003E,B12002_003E,B12002_018E,B12002_034E,B12002_065E,B12002_080E,B12002_096E,B12002_111E,B12002_128E,B12002_158E,B12002_173E&key=b33b68a562b3dfab4b940f69ca95e9618aa6c3e5", { params: req.query })
    // .then(data => console.log(data))
    .then(({ data }) => res.json(data))   
    .catch(err => res.status(422).json(err));
});

 
// census.apiRequest(request, function(response) {
//   console.log(response);

//   console.log("&&&&&&&&&&&&&&=----------=&&&&&&&");

//   for (var i = 0; i < response.data.length; i++) {

//     console.log(response.data[i].population);


//     totalPop = totalPop + parseInt(response.data[i].population);
//   };

//   console.log("total pop = " + totalPop);

// });







module.exports = router;



// {
//     "level": "county",
//     "lat": "38.9047",
//     "lng": "-77.0164",
//     "variables": [
//         "age",
//         "commute_time_other",
//         "education_associates",
//         "education_doctorate",
//         "education_masters"
//     ],
//     "api": "acs5",
//     "year": "2014"
// }