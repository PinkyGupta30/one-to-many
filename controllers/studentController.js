const { Student, Course } = require("../models");

const createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;

    const student = await Student.create({
      name,
      email,
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({
      message: "Error creating student",
      error: error.message,
    });
  }
};

const createCourse = async (req, res) => {
  try {
    const { name } = req.body;

    const course = await Course.create({
      name,
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({
      message: "Error creating course",
      error: error.message,
    });
  }
};

const assignCourseToStudent = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const student = await Student.findByPk(studentId);
    const course = await Course.findByPk(courseId);

    if (!student || !course) {
      return res.status(404).json({
        message: "Student or Course not found",
      });
    }

    await student.addCourse(course);

    res.status(200).json({
      message: "Course assigned to student successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error assigning course",
      error: error.message,
    });
  }
};

module.exports = {
  createStudent,
  createCourse,
  assignCourseToStudent
};