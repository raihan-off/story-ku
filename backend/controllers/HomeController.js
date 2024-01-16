const DatabaseService = require('../services/databaseService');

const HomeController = {
    index: (req, res) => {
    res.json({ message: 'Welcome to the home page!' });
},

getStoryList: (req, res) => {
    DatabaseService.getStoryList((stories) => {
        res.json({ stories });
    });
},

getStoryById: (req, res) => {
    const storyId = req.params.id;
    DatabaseService.getStoryById(storyId, (story) => {
    if (story) {
        res.json({ story });
    } else {
        res.status(404).json({ message: 'Story not found' });
    }
    });
},

createStory: (req, res) => {
    const newStory = req.body;
    try {
    if (!newStory.title || !newStory.author || !newStory.category) {
        throw new Error('Title, author, and category are required fields.');
    }

    DatabaseService.createStory(newStory, (insertedId) => {
        res.json({ id: insertedId, message: 'Story created successfully' });
    });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
},

updateStory: (req, res) => {
    const storyId = req.params.id;
    const updatedStory = req.body;
    DatabaseService.updateStory(storyId, updatedStory, (success) => {
    if (success) {
        res.json({ message: 'Story updated successfully' });
    } else {
        res.status(404).json({ message: 'Story not found' });
    }
    });
},

deleteStory: (req, res) => {
    const storyId = req.params.id;
    DatabaseService.deleteStory(storyId, (success) => {
    if (success) {
        res.json({ message: 'Story deleted successfully' });
    } else {
        res.status(404).json({ message: 'Story not found' });
    }
    });
},
};

module.exports = HomeController;
