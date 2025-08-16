const express = require("express");
const router = express.Router();
const { contactUsController, getContactsController } = require("./contactUSController");

router.post("/sendEmail", contactUsController);

// New GET route to fetch all contacts
router.get("/entries", getContactsController);

module.exports = router;
