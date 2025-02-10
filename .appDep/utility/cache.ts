import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import { log } from './logger';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key: string, value: string) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    if (error instanceof Error) {
      log(error.message);
    } else {
      log('An unknown error occurred');
    }
  }
};

const isExpired = (item: { timestamp: string }) => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, 'minute') > expiryInMinutes;
};

const get = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);

    if (value === null) {
      return null;
    }

    const item = JSON.parse(value);

    if (!item || isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    if (error instanceof Error) {
      log(error.message);
    } else {
      log('An unknown error occurred');
    }
    return null;
  }
};

export default {
  store,
  get,
};
