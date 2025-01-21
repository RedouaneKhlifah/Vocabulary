import * as SQLite from 'expo-sqlite';

// Centralize the database connection logic
const getDatabase = async () => {
  return SQLite.openDatabaseAsync('VocabularyDb.db');
};

export default getDatabase;