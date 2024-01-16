const DatabaseService = require('../services/databaseService');

class StoryModel {
constructor(title, author, category, tags, status) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.tags = tags;
    this.status = status;
}

static getStoryList(callback) {
    DatabaseService.getStoryList((stories) => {
        callback(stories);
    });
}

static getStoryById(storyId, callback) {
    DatabaseService.getStoryById(storyId, (story) => {
        callback(new StoryModel(story.title, story.author, story.category, story.tags, story.status));
    });
}

static createStory(newStory, callback) {
    DatabaseService.createStory(newStory, (insertedId) => {
        callback(insertedId);
    });
}

static updateStory(storyId, updatedStory, callback) {
    DatabaseService.updateStory(storyId, updatedStory, (success) => {
        callback(success);
    });
}

static deleteStory(storyId, callback) {
    DatabaseService.deleteStory(storyId, (success) => {
        callback(success);
    });
    }
}

module.exports = StoryModel;
