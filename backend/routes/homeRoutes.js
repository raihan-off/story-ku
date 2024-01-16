const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

router.get('/story-list', HomeController.getStoryList);
router.get('/story/:id', HomeController.getStoryById);
router.post('/story', HomeController.createStory);
router.put('/story/:id', HomeController.updateStory);
router.delete('/story/:id', HomeController.deleteStory);

module.exports = router;
