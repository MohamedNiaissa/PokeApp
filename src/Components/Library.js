import React, {useEffect} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {getItem} from '../helper/asyncStorageHelper';

const Library = () => {
  useEffect(() => {
    async function t() {
      const myValue = await getItem('users');
      console.log('userData userData userData');
      console.log(myValue);
      console.log('userData userData userData');
    }
    t();
  }, []);
  return (
    <>
      <Text> Library component </Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default Library;