const mongoose = require("mongoose");
const { Schema } = mongoose;

const facultySchedule = new Schema({
  fid:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'user'
  }
  

});

module.exports = mongoose.model("sheduleslots", facultySchedule);


// 101: {
//     available: false
//   },
//   102: {
//     available: false
//   },
//   103: {
//     available: false
//   },
//   104: {
//     available: false
//   },
//   105: {
//     available: false
//   },
//   106: {
//     available: false
//   },
//   107: {
//     available: false
//   },
//   201: {
//     available: false
//   },
//   202: {
//     available: false
//   },
//   203: {
//     available: false
//   },
//   204: {
//     available: false
//   },
//   205: {
//     available: false
//   },
//   206: {
//     available: false
//   },
//   207: {
//     available: false
//   },
//   301: {
//     available: false
//   },
//   302: {
//     available: false
//   },
//   303: {
//     available: false
//   },
//   304: {
//     available: false
//   },
//   305: {
//     available: false
//   },
//   306: {
//     available: false
//   },
//   307: {
//     available: false
//   },
//   401: {
//     available: false
//   },
//   402: {
//     available: false
//   },
//   403: {
//     available: false
//   },
//   404: {
//     available: false
//   },
//   405: {
//     available: false
//   },
//   406: {
//     available: false
//   },
//   407: {
//     available: false
//   },
//   501: {
//     available: false
//   },
//   502: {
//     available: false
//   },
//   503: {
//     available: false
//   },
//   504: {
//     available: false
//   },
//   505: {
//     available: false
//   },
//   506: {
//     available: false
//   },
//   507: {
//     available: false
//   },
//   601: {
//     available: false
//   },
//   602: {
//     available: false
//   },
//   603: {
//     available: false
//   },
//   604: {
//     available: false
//   },
//   605: {
//     available: false
//   },
//   606: {
//     available: false
//   },
//   607: {
//     available: false
//   }
 