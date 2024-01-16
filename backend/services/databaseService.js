const mysql = require('mysql');
const config = require('../config');

const pool = mysql.createPool(config.db);

class DatabaseService {
  static createStory(newStory, callback) {
    const query = 'INSERT INTO stories SET ?';
    pool.query(query, newStory, (error, results) => {
      if (error) {
        console.error('Error in createStory query:', error);
        throw error;
      }
      console.log('Create Story Query Results:', results);
      callback(results.insertId);
    });
  }

  static getStoryList(callback) {
    const query = 'SELECT * FROM stories';
    pool.query(query, (error, results) => {
      if (error) {
        console.error('Error in getStoryList query:', error);
        throw error;
      }
      console.log('Get Story List Query Results:', results);
      callback(results);
    });
  }

  static getStoryById(storyId, callback) {
    const query = 'SELECT * FROM stories WHERE id = ?';
    pool.query(query, [storyId], (error, results) => {
      if (error) {
        console.error('Error in getStoryById query:', error);
        throw error;
      }
      console.log('Get Story By ID Query Results:', results);
      callback(results[0]);
    });
  }

  static updateStory(storyId, updatedStory, callback) {
    const query = 'UPDATE stories SET ? WHERE id = ?';
    pool.query(query, [updatedStory, storyId], (error, results) => {
      if (error) {
        console.error('Error in updateStory query:', error);
        throw error;
      }
      console.log('Update Story Query Results:', results);
      callback(results.affectedRows > 0);
    });
  }

  static deleteStory(storyId, callback) {
    const query = 'DELETE FROM stories WHERE id = ?';
    pool.query(query, [storyId], (error, results) => {
      if (error) {
        console.error('Error in deleteStory query:', error);
        throw error;
      }
      console.log('Delete Story Query Results:', results);
      callback(results.affectedRows > 0);
    });
  }
}

module.exports = DatabaseService;
