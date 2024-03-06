import React, {useEffect} from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getItem} from '../helper/asyncStorageHelper';

const Library = () => {
  useEffect(() => {
    //const json = AsyncStorage.getItem('userData');
    //const myValue = getItem();
    async function t() {
      const json = await AsyncStorage.getItem('userData');
      console.log('userData userData userData');
      console.log(json);
      console.log('userData userData userData');
    }
    t();
  }, []);
  return <Text> Library component</Text>;
};

export default Library;
