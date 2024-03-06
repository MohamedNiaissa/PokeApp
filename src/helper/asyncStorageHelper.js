import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async () => {
  const json = await AsyncStorage.getItem('userData');
  return JSON.parse(json);
};

const setItem = async jsonData => {
  const json = JSON.stringify(jsonData);
  await AsyncStorage.setItem('userData', json);
};
