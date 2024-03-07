import React, {useEffect} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {getItem} from '../helper/asyncStorageHelper';
import {useSelector} from 'react-redux';

const Library = () => {
  const {username, userId, profilePicture} = useSelector(s => s.auth);
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
          console.log(profilePicture);
          console.log('********************');
        }}>
        <Text>cliiiiiiiick</Text>
        <Text> {profilePicture}</Text>
        <Image style={styles.zzzz} source={{uri: profilePicture}} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export default Library;
