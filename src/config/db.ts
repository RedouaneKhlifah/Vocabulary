import * as SQLite from 'expo-sqlite';

// Open a database (it creates the file if it doesn't exist)
const db = SQLite.openDatabaseSync('Vocabulary.db');

export default db;
