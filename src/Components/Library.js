import React, {useEffect} from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getItem} from '../helper/asyncStorageHelper';

const Library = () => {
  useEffect(() => {
    async function t() {
      const myValue = await getItem();
      console.log('userData userData userData');
      console.log(myValue);
      console.log('userData userData userData');
    }
    t();
  }, []);
  return <Text> Library component</Text>;
};

export default Library;
