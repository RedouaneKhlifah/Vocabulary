import db from './db';

// Create a users table with additional columns
await db.execAsync(`
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY NOT NULL, 
        name TEXT,      
        howDidYouHear TEXT,    
        ageGroup TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`);

export default db;
