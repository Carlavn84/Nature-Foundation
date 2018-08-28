const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ForestAreaSchema = new Schema({
 size: {
    type: Number,
    require: true
  },
  lat: {
    type: Number,
    require: true
  },
  lng: {
    type:  Number,
    required: true
   
  },
  description:{
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = ForestArea = mongoose.model("ForestArea", ForestAreaSchema);
