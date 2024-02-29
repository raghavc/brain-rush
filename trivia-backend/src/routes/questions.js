// src/routes/questions.js
const express = require('express');
const router = express.Router();
const { getQuestions, submitAnswer } = require('../controllers/questionsController');

router.get('/', getQuestions);
router.post('/answer', submitAnswer);

module.exports = router;
