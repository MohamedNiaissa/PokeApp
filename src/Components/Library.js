import React, {useEffect, useState} from 'react';
import {getItem} from '../helper/asyncStorageHelper';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import apiHelper from '../../api/apiHelper.js';
import {useSelector} from 'react-redux';

const renderItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.pokeItem}>
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

const backgroundImage = {
  uri: 'https://images-ext-1.discordapp.net/external/bpnz1mgvLmSzMmGVy4Jxwe6dxvDt8xPQtFZQDAhOif8/%3Fcb%3D20100315205316/https/static.wikia.nocookie.net/pokemoncrater/images/b/bc/Grass_Type.jpg/revision/latest?format=webp&width=892&height=892',
};

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

  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemons = await apiHelper.getAllPokemonData(15);
      setPokemon(pokemons);
    };
    fetchPokemon();
  }, []);

  return (
    <View style={styles.library}>
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <View style={styles.tabView}>
          <TouchableOpacity>
            <Text style={[styles.tabBtn, {fontFamily: 'PressStart2P-Regular'}]}>
              POCKET
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.tabBtn, {fontFamily: 'PressStart2P-Regular'}]}>
              LIBRARY
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.pokeList}>
            <FlatList data={pokemon} renderItem={renderItem} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBtn: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    padding: 20,
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
    fontFamily: 'PressStart2p-Regular',
  },
  backgroundImage: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flex: 1,
    gap: 30,
  },
  library: {
    flex: 1,
    flexDirection: 'column',
    gap: 40,
    fontFamily: 'PressStart2p-Regular',
    justifyContent: 'space-evenly',
  },
  tabView: {
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  pokeList: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    maxHeight: '80%',
  },
  pokeItem: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  pokeItemImg: {
    height: 50,
    width: 50,
  },
  pokePoket: {},
});

export default Library;
