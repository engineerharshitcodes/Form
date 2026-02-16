const express = require("express");
const router = express.Router();

const {
  createForm,
  getForms,
  getFormById
} = require("../controllers/formController");

// POST
router.post("/submit", createForm);

// GET all with filters
router.get("/", getForms);

// GET one by ID
router.get("/:id", getFormById);

module.exports = router;
