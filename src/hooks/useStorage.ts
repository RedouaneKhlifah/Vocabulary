import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useStorage() {
  // Save item to AsyncStorage
  const saveItem = async <T>(key: string, value: T): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to save ${key}:`, error);
    }
  };

  // Get item from AsyncStorage
  const getItem = async <T>(key: string): Promise<T | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Failed to fetch ${key}:`, error);
      return null;
    }
  };

  // Remove item from AsyncStorage
  const removeItem = async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Failed to remove ${key}:`, error);
    }
  };

  return { saveItem, getItem, removeItem };
}
