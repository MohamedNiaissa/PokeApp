import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async key => {
  const json = await AsyncStorage.getItem(key);
  return JSON.parse(json);
};

const setItem = async (key, jsonData) => {
  const json = JSON.stringify(jsonData);
  await AsyncStorage.setItem(key, json);
};

export {getItem, setItem};
