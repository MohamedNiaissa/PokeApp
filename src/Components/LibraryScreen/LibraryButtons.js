import {Text, TouchableOpacity} from 'react-native';
import styles from './LibraryStyle';
import React, {useState} from 'react';

const LibraryButtons = ({pocket, setMode}) => {
  const onPocketPress = () => {
    setMode(false);
  };
  const onLibraryPress = () => {
    setMode(true);
  };
  return (
    <TouchableOpacity onPress={pocket ? onPocketPress : onLibraryPress}>
      <Text style={[styles.tabBtn, {fontFamily: 'PressStart2P-Regular'}]}>
        {pocket ? 'POCKET' : 'POKEDEX'}
      </Text>
    </TouchableOpacity>
  );
};

export default LibraryButtons;
