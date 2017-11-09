var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var StateDataSchema = new Schema({

  name: {
    type: String,
    unique: true   
    },
  age: {
    type: Number
  },
  population:
  {
    type: Number
  },
  medHomeValue:
  {
    type: Number
  },
  medGrossRent:
  {
    type: Number
  },
  medContRent:
  {
    type: Number
  },
  sameHouse1yr:
  {
    type: Number
  },
   employLF:
  {
    type: Number
  },
   employNotLF:
  {
    type: Number
  },
  medMaleAge:
  {
    type: Number
  },
  medFemaleAge:
  {
    type: Number
  },
  incomePerCap:
  {
    type: Number
  },
  income:
  {
    type: Number
  },  
  raceTotal:
  {
    type: Number
  },
  raceWhite:
  {
    type: Number
  },
  raceBlack:
  {
    type: Number
  },
  raceAsian:
  {
    type: Number
  }
});



// This creates our model from the above schema, using mongoose's model method
var StateData = mongoose.model("StateData", StateDataSchema);

// Export the Article model
module.exports = StateData;
