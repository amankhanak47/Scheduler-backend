const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
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
    type: String,
  }
});

module.exports = mongoose.model("student", StudentSchema);
