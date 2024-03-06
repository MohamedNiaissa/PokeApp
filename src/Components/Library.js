import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {getItem} from '../helper/asyncStorageHelper';
import {useSelector} from 'react-redux';

const Library = () => {
  const {username, userId} = useSelector(s => s.auth);
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
      <TouchableOpacity
        onPress={() => {
          console.log('********************');
          console.log(username);
          console.log(userId);
          console.log('********************');
        }}>
        <Text>cliiiiiiiick</Text>
      </TouchableOpacity>
    </>
  );
};

export default Library;
