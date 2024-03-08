import React, {useEffect, useState} from 'react';
import {getItem} from '../helper/asyncStorageHelper';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import apiHelper from '../../api/apiHelper.js';
import {useSelector} from 'react-redux';
import styles from '../Components/LibraryScreen/LibraryStyle';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import LibraryButtons from '../Components/LibraryScreen/LibraryButtons';
import Pocketlist from '../Components/LibraryScreen/Pocketlist';
import PokedexList from '../Components/LibraryScreen/PokedexList';

const backgroundImage = {
  uri: 'https://images-ext-1.discordapp.net/external/bpnz1mgvLmSzMmGVy4Jxwe6dxvDt8xPQtFZQDAhOif8/%3Fcb%3D20100315205316/https/static.wikia.nocookie.net/pokemoncrater/images/b/bc/Grass_Type.jpg/revision/latest?format=webp&width=892&height=892',
};

const Library = () => {
  const navigation = useNavigation();

  useEffect(() => {
    async function t() {
      const myValue = await getItem('users');
      console.log('userData userData userData');
      console.log(myValue);
      console.log('userData userData userData');
    }
    t();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail', {
            cry: item.cry,
            weight: item.weight,
            height: item.height,
            sprite: item.sprite,
            name: item.name,
            types: item.types,
          });
        }}
        style={styles.pokeItem}>
        <Image style={styles.pokeItemImg} source={{uri: item.sprite}} />
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'PressStart2P-Regular',
            color: 'black',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const [mode = true, setMode] = useState();
  return (
    <SafeAreaView style={styles.library}>
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <View style={styles.tabView}>
          <LibraryButtons pocket setMode={setMode} />
          <LibraryButtons setMode={setMode} />
        </View>
        <View>
          <View style={styles.pokeList}>
            {mode && <Pocketlist renderItem={renderItem} />}
            {!mode && <PokedexList renderItem={renderItem} />}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Library;
