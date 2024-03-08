import React, {useEffect, useState} from 'react';
import {getItem} from '../helper/asyncStorageHelper';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import apiHelper from '../../api/apiHelper.js';
import {useSelector} from 'react-redux';
import styles from './LibraryScreen/style/Library';

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
  const {username, profilePicture, userId} = useSelector(s => s.auth);
  const [pokemonCaptured, setPokemonCaptured] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        let pokedexs = await getItem('pokedex');
        if (pokedexs !== null) {
          for (let i = 0; i < pokedexs.length; i++) {
            let id = Object.keys(pokedexs[i])[0];
            if (id === userId) {
              let pokemons = [];
              const pokedex = Object.values(pokedexs[i])[0];
              for (let j = 0; j < Object.values(pokedexs[i])[0].length; j++) {
                const result = await apiHelper.getPokemonData(pokedex[j]);
                pokemons = [...pokemons, result];
              }
              setPokemonCaptured(pokemons);
              console.log(pokemons);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPokemon();
  }, []);

  const [mode = true, setMode] = useState();

  const onPocketPress = () => {
    setMode(false);
  };

  const onLibraryPress = () => {
    setMode(true);
  };

  return (
    <SafeAreaView style={styles.library}>
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <View style={styles.tabView}>
          <TouchableOpacity onPress={onPocketPress}>
            <Text style={[styles.tabBtn, {fontFamily: 'PressStart2P-Regular'}]}>
              POCKET
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onLibraryPress}>
            <Text style={[styles.tabBtn, {fontFamily: 'PressStart2P-Regular'}]}>
              LIBRARY
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.pokeList}>
            {mode && <FlatList data={pokemon} renderItem={renderItem} />}
            {!mode && (
              <FlatList data={pokemonCaptured} renderItem={renderItem} />
            )}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Library;
