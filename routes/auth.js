const express = require("express");
const StudentCollection = require("../Models/Student");
const FacultyCollection = require("../Models/Faculty");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchstudent = require("../middleware/fetchstudent");
const fetchfaculty = require("../middleware/fetchfaculty");

const JWT_SECRET = "qwertyuiop";

// Student Signup
//Route 1
router.post(
  "/studentsignup",
  [
    body("name", "Enter a valid name").isLength({ min: 1 }),
    body("password").isLength({ min: 2 }),
    body("email", "Enter a valid email").isEmail(),

    body("branch"),
  ],
  async (req, res) => {
    //if there are errors, return bad request and error
    const errors = validationResult(req);
    let sucess = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ sucess: sucess, errors: errors.array() });
    }

    //check email already exist or not
    try {
      let student = await StudentCollection.findOne({ email: req.body.email });
      if (student) {
        return res
          .status(400)
          .json({
            sucess: sucess,
            error: "sorry a user with this email already exist",
          });
      }
      const salt = await bcrypt.genSalt(10);
      secpass = await bcrypt.hash(req.body.password, salt);

      //create ney user
      student = await StudentCollection.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,

        branch: req.body.branch,

       
      });

      const data = {
        user: {
          id: student.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(authtoken)
      sucess = true;
      res.json({ sucess, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

//uthenticate a user "./api/auth/login"
//ROUte 2
router.post(
  "/studentlogin",
  [
    // body('name', 'Enter a valid name').isLength({min:5}),
    body("password", "password cannot be blank").exists(),

    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    //if there are errors, return bad request and error
    const errors = validationResult(req);
    let sucess = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let student = await StudentCollection.findOne({ email });
      if (!student) {
        sucess = false;
        return res
          .status(400)
          .json({ sucess: sucess, errors: "enter correct login credentials" });
      }
      const passcompare = await bcrypt.compare(password, student.password);
      if (!passcompare) {
        sucess = false;
        return res
          .status(400)
          .json({ sucess: sucess, errors: "enter correct login credentials" });
      }
      const data = {
        user: {
          id: student.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(authtoken)
      sucess = true;

      res.json({ sucess, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);

// get logedin user details
// ROuTe 3

router.post("/getstudent", fetchstudent, async (req, res) => {
  try {
    studentId = req.student.id;
    console.log(req.student.id);

    const student = await StudentCollection.findById(studentId).select(
      "-password"
    );
    res.send(student);
  } catch (error) {
    console.error(error);
    res.status(500).send("internal server error occured");
  }
});

//faculty apis

// faculty Signup
//Route 1
router.post(
  "/facultysignup",
  [
    body("name", "Enter a valid name").isLength({ min: 1 }),
    body("password").isLength({ min: 2 }),
    body("email", "Enter a valid email").isEmail(),

    body("branch"),
  ],
  async (req, res) => {
    //if there are errors, return bad request and error
    const errors = validationResult(req);
    let sucess = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ sucess: sucess, errors: errors.array() });
    }

    //check email already exist or not
    try {
      let faculty = await FacultyCollection.findOne({ email: req.body.email });
      if (faculty) {
        return res
          .status(400)
          .json({
            sucess: sucess,
            error: "sorry a user with this email already exist",
          });
      }
      const salt = await bcrypt.genSalt(10);
      secpass = await bcrypt.hash(req.body.password, salt);

      //create ney user
      faculty = await FacultyCollection.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,
        mon1: "false",
        mon2: "false",
        mon3: "false",
        mon4: "false",
        mon5: "false",
        mon6: "false",
        mon7: "false",
        tu1: "false",
        tu2: "false",
        tu3: "false",
        tu4: "false",
        tu5: "false",
        tu6: "false",
        tu7: "false",
        wed1: "false",
        wed2: "false",
        wed3: "false",
        wed4: "false",
        wed5: "false",
        wed6: "false",
        wed7: "false",
        thu1: "false",
        thu2: "false",
        thu3: "false",
        thu4: "false",
        thu5: "false",
        thu6: "false",
        thu7: "false",
        fri1: "false",
        fri2: "false",
        fri3: "false",
        fri4: "false",
        fri5: "false",
        fri6: "false",
        fri7: "false",
        sat1: "false",
        sat2: "false",
        sat3: "false",
        sat4: "false",
        sat5: "false",
        sat6: "false",
        sat7: "false",
        branch: req.body.branch,
      });

      const data = {
        user: {
          id: faculty.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(authtoken)
      sucess = true;
      res.json({ sucess, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

//uthenticate a user "./api/auth/login"
//ROUte 2
router.post(
  "/facultylogin",
  [
    // body('name', 'Enter a valid name').isLength({min:5}),
    body("password", "password cannot be blank").exists(),

    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    //if there are errors, return bad request and error
    const errors = validationResult(req);
    let sucess = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let faculty = await FacultyCollection.findOne({ email });
      if (!faculty) {
        sucess = false;
        return res
          .status(400)
          .json({ sucess: sucess, errors: "enter correct login credentials" });
      }
      const passcompare = await bcrypt.compare(password, faculty.password);
      if (!passcompare) {
        sucess = false;
        return res
          .status(400)
          .json({ sucess: sucess, errors: "enter correct login credentials" });
      }
      const data = {
        user: {
          id: faculty.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(authtoken)
      sucess = true;

      res.json({ sucess, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);

// get logedin user details
// ROuTe 3

router.post("/getfaculty", fetchfaculty, async (req, res) => {
  try {
    facultyId = req.faculty.id;
    // console.log(req.faculty.id)

    const faculty = await FacultyCollection.findById(facultyId).select(
      "-password"
    );
    res.send(faculty);
  } catch (error) {
    console.error(error);
    res.status(500).send("internal server error occured");
  }
});

router.post(
  "/getfacultyinfo",
  [body("name", "Enter a valid name").isLength({ min: 1})],
  async (req, res) => {
    try{ const user = await FacultyCollection.find({ name: req.body.name}).select("-password");
    res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("internal server error occured");
    }
  }
);

module.exports = router;
