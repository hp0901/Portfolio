const express = require("express")
const router = express.Router()
const { contactUsController } = require('./contactUSController')

router.post("/sendEmail", contactUsController)

module.exports = router