const mongoose = require("mongoose");
const { Schema } = mongoose;

const FacultySchema = new Schema({
  name: {
    type: String,
  },
 
  branch: {
    type:String,
  },

  email: {
    type: String,
  },
  password: {
    type: String,
  },
  mon1: {
    type: Boolean,
  },
  mon1: {
    type: Boolean,
  },
mon2: {
    type: Boolean,
  },
mon3: {
    type: Boolean,
  },
mon4: {
    type: Boolean,
  },
mon5: {
    type: Boolean,
  },
mon6: {
    type: Boolean,
  },
mon7: {
    type: Boolean,
  },
tu1: {
    type: Boolean,
  },
tu2: {
    type: Boolean,
  },
tu3: {
    type: Boolean,
  },
tu4: {
    type: Boolean,
  },
tu5: {
    type: Boolean,
  },
tu6: {
    type: Boolean,
  },
tu7: {
    type: Boolean,
  },
wed1: {
    type: Boolean,
  },
wed2: {
    type: Boolean,
  },
wed3: {
    type: Boolean,
  },
wed4: {
    type: Boolean,
  },
wed5: {
    type: Boolean,
  },
wed6: {
    type: Boolean,
  },
wed7: {
    type: Boolean,
  },
thu1: {
    type: Boolean,
  },
thu2: {
    type: Boolean,
  },
thu3: {
    type: Boolean,
  },
thu4: {
    type: Boolean,
  },
thu5: {
    type: Boolean,
  },
thu6: {
    type: Boolean,
  },
thu7: {
    type: Boolean,
  },
fri1: {
    type: Boolean,
  },
fri2: {
    type: Boolean,
  },
fri3: {
    type: Boolean,
  },
fri4: {
    type: Boolean,
  },
fri5: {
    type: Boolean,
  },
fri6: {
    type: Boolean,
  },
fri7: {
    type: Boolean,
  },
sat1: {
    type: Boolean,
  },
sat2: {
    type: Boolean,
  },
sat3: {
    type: Boolean,
  },
sat4: {
    type: Boolean,
  },
sat5: {
    type: Boolean,
  },
sat6: {
    type: Boolean,
  },
sat7: {
    type: Boolean,
  },

});

module.exports = mongoose.model("faculty", FacultySchema);
