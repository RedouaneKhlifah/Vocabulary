import * as SQLite from 'expo-sqlite';

// Define the database initialization function
const initializeDatabase = async () => {
  try {
    // Open a database (it creates the file if it doesn't exist)
    const db = await SQLite.openDatabaseAsync('VocabularyDb.db');

    // Create table if it doesn't exist
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY NOT NULL, 
        name TEXT,      
        howDidYouHear TEXT,    
        ageGroup TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('User table initialized successfully');
  } catch (error) {
    console.error('Error initializing the database:', error);
  }
};

// Call the initialization function
initializeDatabase();