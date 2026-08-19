const express = require("express");

const {
  createStudent,
  createCourse,
  assignCourseToStudent
} = require("../controllers/studentController");

const router = express.Router();

router.post("/students", createStudent);
router.post("/courses", createCourse);
router.post("/students/assign-course", assignCourseToStudent);

module.exports = router;