const express = require("express");
const facultyallslots = require("../Models/facultyxchedule");
const FacultyCollection = require("../Models/Faculty");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchstudent = require("../middleware/fetchstudent");
const fetchfaculty = require("../middleware/fetchfaculty");
const nodemailer = require('nodemailer')
const { google } = require('googleapis')




const CLIENT_ID = '794035609931-udh1o79a1s86hudmgqr7u4ehg6mt48de.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04j6QXcglTi60CgYIARAAGAQSNwF-L9Ir3EyC3S6sioDx2ppk22xOYfeOZGsUF04edb3m0JF_TLUyV3oq5pyF7CTQJZYCLhgzyrM'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN})


const JWT_SECRET = "qwertyuiop";

router.put("/updateslot/:id", fetchstudent, async (req, res) => {
  const { slotid, available } = req.body;
  try {
    let sloti = req.body.slotid;
// console.log(FacultyCollection)
      let note = {};
      if (sloti == "mon1") {
        // note.mon1=req.body.
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        mon1: req.body.available,
      });
    }
    if (sloti == "mon2") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        mon2: req.body.available,
      });
    }
    if (sloti == "mon3") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        mon3: req.body.available,
      });
    }
    if (sloti == "mon4") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        mon4: req.body.available,
      });
    }
    if (sloti == "mon5") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        mon5: req.body.available,
      });
    }
    if (sloti == "mon6") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        mon6: req.body.available,
      });
    }
    if (sloti == "mon7") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        mon7: req.body.available,
      });
    }
    if (sloti == "tu1") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        tu1: req.body.available,
      });
    }
    if (sloti == "tu2") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        tu2: req.body.available,
      });
    }
    if (sloti == "tu3") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        tu3: req.body.available,
      });
    }
    if (sloti == "tu4") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        tu4: req.body.available,
      });
    }
    if (sloti == "tu5") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        tu5: req.body.available,
      });
    }
    if (sloti == "tu6") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        tu6: req.body.available,
      });
    }
    if (sloti == "tu7") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        tu7: req.body.available,
      });
    }
    if (sloti == "wed1") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        wed1: req.body.available,
      });
    }
    if (sloti == "wed2") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        wed2: req.body.available,
      });
    }
    if (sloti == "wed3") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        wed3: req.body.available,
      });
    }
    if (sloti == "wed4") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        wed4: req.body.available,
      });
    }
    if (sloti == "wed5") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        wed5: req.body.available,
      });
    }
    if (sloti == "wed6") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        wed6: req.body.available,
      });
    }
    if (sloti == "wed7") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        wed7: req.body.available,
      });
    }
    if (sloti == "thu1") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        thu1: req.body.available,
      });
    }
    if (sloti == "thu2") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        thu2: req.body.available,
      });
    }
    if (sloti == "thu3") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        thu3: req.body.available,
      });
    }
    if (sloti == "thu4") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        thu4: req.body.available,
      });
    }
    if (sloti == "thu5") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        thu5: req.body.available,
      });
    }
    if (sloti == "thu6") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        thu6: req.body.available,
      });
    }
    if (sloti == "thu7") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        thu7: req.body.available,
      });
    }
    if (sloti == "fri1") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        fri1: req.body.available,
      });
    }
    if (sloti == "fri2") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        fri2: req.body.available,
      });
    }
    if (sloti == "fri3") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        fri3: req.body.available,
      });
    }
    if (sloti == "fri4") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        fri4: req.body.available,
      });
    }
    if (sloti == "fri5") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        fri5: req.body.available,
      });
    }
    if (sloti == "fri6") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        fri6: req.body.available,
      });
    }
    if (sloti == "fri7") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        fri7: req.body.available,
      });
    }
    if (sloti == "sat1") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        sat1: req.body.available,
      });
    }
    if (sloti == "sat2") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        sat2: req.body.available,
      });
    }
    if (sloti == "sat3") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        sat3: req.body.available,
      });
    }
    if (sloti == "sat4") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        sat4: req.body.available,
      });
    }
    if (sloti == "sat5") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        sat5: req.body.available,
      });
    }
    if (sloti == "sat6") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        sat6: req.body.available,
      });
    }
    if (sloti == "sat7") {
      note = await FacultyCollection.findByIdAndUpdate(req.params.id, {
        sat7: req.body.available,
      });
    }

    console.log(note);
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});



router.put("/updateslot/", async (req, res) => {
 const { slotid,faculty, available } = req.body;
  try {
    let sloti = req.body.slotid;
      
console.log(sloti,req.body.faculty,req.body.available)
    //   let note = {};
      let olduset= await FacultyCollection.find({ name: req.body.faculty}).select("-password");
      console.log(olduset[0].id)
      if (sloti == "mon1") {
        // note.mon1=req.body.
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        mon1: req.body.available,
      });
    }
    if (sloti == "mon2") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        mon2: req.body.available,
      });
    }
    if (sloti == "mon3") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        mon3: req.body.available,
      });
    }
    if (sloti == "mon4") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        mon4: req.body.available,
      });
    }
    if (sloti == "mon5") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        mon5: req.body.available,
      });
    }
    if (sloti == "mon6") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        mon6: req.body.available,
      });
    }
    if (sloti == "mon7") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        mon7: req.body.available,
      });
    }
    if (sloti == "tu1") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        tu1: req.body.available,
      });
    }
    if (sloti == "tu2") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        tu2: req.body.available,
      });
    }
    if (sloti == "tu3") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        tu3: req.body.available,
      });
    }
    if (sloti == "tu4") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        tu4: req.body.available,
      });
    }
    if (sloti == "tu5") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        tu5: req.body.available,
      });
    }
    if (sloti == "tu6") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        tu6: req.body.available,
      });
    }
    if (sloti == "tu7") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        tu7: req.body.available,
      });
    }
    if (sloti == "wed1") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        wed1: req.body.available,
      });
    }
    if (sloti == "wed2") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        wed2: req.body.available,
      });
    }
    if (sloti == "wed3") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        wed3: req.body.available,
      });
    }
    if (sloti == "wed4") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        wed4: req.body.available,
      });
    }
    if (sloti == "wed5") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        wed5: req.body.available,
      });
    }
    if (sloti == "wed6") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        wed6: req.body.available,
      });
    }
    if (sloti == "wed7") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        wed7: req.body.available,
      });
    }
    if (sloti == "thu1") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        thu1: req.body.available,
      });
    }
    if (sloti == "thu2") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        thu2: req.body.available,
      });
    }
    if (sloti == "thu3") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        thu3: req.body.available,
      });
    }
    if (sloti == "thu4") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        thu4: req.body.available,
      });
    }
    if (sloti == "thu5") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        thu5: req.body.available,
      });
    }
    if (sloti == "thu6") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        thu6: req.body.available,
      });
    }
    if (sloti == "thu7") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        thu7: req.body.available,
      });
    }
    if (sloti == "fri1") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        fri1: req.body.available,
      });
    }
    if (sloti == "fri2") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        fri2: req.body.available,
      });
    }
    if (sloti == "fri3") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        fri3: req.body.available,
      });
    }
    if (sloti == "fri4") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        fri4: req.body.available,
      });
    }
    if (sloti == "fri5") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        fri5: req.body.available,
      });
    }
    if (sloti == "fri6") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        fri6: req.body.available,
      });
    }
    if (sloti == "fri7") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        fri7: req.body.available,
      });
    }
    if (sloti == "sat1") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        sat1: req.body.available,
      });
    }
    if (sloti == "sat2") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        sat2: req.body.available,
      });
    }
    if (sloti == "sat3") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        sat3: req.body.available,
      });
    }
    if (sloti == "sat4") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        sat4: req.body.available,
      });
    }
    if (sloti == "sat5") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        sat5: req.body.available,
      });
    }
    if (sloti == "sat6") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        sat6: req.body.available,
      });
    }
    if (sloti == "sat7") {
      note = await FacultyCollection.findByIdAndUpdate(olduset[0]._id, {
        sat7: req.body.available,
      });
    }

    console.log(note);
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


router.post(
    "/sendmail",
  
    [
   
        body("fltemail",).isEmail(),
        body("stdemail",).isEmail(),

        body("stdname"),
        body("fltname"),
        body("time"),
    ], async (req, res) => {
        
      try {
              console.log(`${req.body.stdemail}`)
                const accessToken = await oAuth2Client.getAccessToken()

                const transport = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        type: 'OAuth2',
                        user: 'scheduler.bvrit@gmail.com',
                        clientId: CLIENT_ID,
                        clientSecret: CLIENT_SECRET,
                        refreshToken: REFRESH_TOKEN,
                        accessToken: accessToken
                    }
                })

                const mailOptions = {
                    from: 'SCHEDULER <scheduler.bvrit@gmail.com>',
                    to: `${req.body.fltemail}`,
                    // to: `${req.body.fltmail}`,
                    subject: `Booking Confirmation`,
                    html: `An Appointment has been scheduled between ${req.body.stdname} and ${req.body.fltname} at ${req.body.time} period`
                };

                  transport.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      // console.log('Message sent: %s', info.messageId);   
      // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // res.render('contact', {msg:'Email has been sent'});
  });

            } catch (e) {
                return e;
            }
        
    }
);
        // .then((result) => console.log('Emailsent...', result))
        // .catch((error) => console.log(error.message));




 




module.exports = router;
