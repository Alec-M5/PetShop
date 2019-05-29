const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {type: String, required:[true, 'you need to have a name'], minlength:[3,'name must be longer than 3 characters']},
  type: {type: String, required:[true, 'pet type needs to be there'], minlength:[3,'pet type must be longer than 3 charactes']},
  description: {type: String, required: [true,'you need a description'], minlength: [3,'Description must be longer than 3 characters']},
  // name: {type: String},
  // type: {type: String},
  // description: {type: String},
  skill1: {type: String , default: ""},
  skill2: {type: String , default: ""},
  skill3: {type: String , default: ""}
},{timestamps: true});

mongoose.model('Pet', petSchema);
