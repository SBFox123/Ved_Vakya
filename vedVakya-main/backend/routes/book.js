const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book-controller.js')
router.get("/", bookController.getAllBooks)
router.post("/", bookController.addBook)

module.exports = router