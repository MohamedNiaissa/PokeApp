import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async () => {
  const json = await AsyncStorage.getItem('userData');
  console.log('in get');
  console.log(JSON.parse(json));
  console.log('in get');
  return JSON.parse(json);
};

const setItem = async jsonData => {
  const json = JSON.stringify(jsonData);
  console.log('in helper');
  console.log(jsonData);
  console.log('in helper');
  await AsyncStorage.setItem('userData', json);
};

export {getItem, setItem};
