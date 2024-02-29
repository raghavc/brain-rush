// Assume questionsDb is either imported or defined in this file
const questionsDb = require('../data/questionsDb');
exports.getQuestions = async (req, res) => {
    try {
      // For simplicity, randomly select a question to send back
      const randomIndex = Math.floor(Math.random() * questionsDb.length);
      const question = questionsDb[randomIndex];
      
      // Create a copy of the question object without the answer
      const { answer, ...questionWithoutAnswer } = question;
  
      res.json(questionWithoutAnswer);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
      res.status(500).send("Error fetching questions");
    }
  };
  
  exports.submitAnswer = async (req, res) => {
    const { questionId, answer } = req.body;
  
    if (!questionId || !answer) {
      return res.status(400).send("Question ID and answer are required");
    }
  
    const question = questionsDb.find(q => q.id === questionId);
  
    if (!question) {
      return res.status(404).send("Question not found");
    }
  
    const isCorrect = question.answer === answer;
  
    res.json({ correct: isCorrect });
  };
  