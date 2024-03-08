import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, View, ImageBackground, StyleSheet} from 'react-native';
import GrassBackground from '../assets/Grass_Background.webp';
import {useSelector} from 'react-redux';
import {getItem} from '../helper/asyncStorageHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const Profil = () => {
  const {username, profilePicture, userId} = useSelector(s => s.auth);
  const [pokemonInPocket, setPokemonInPocket] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let pokedexs = await getItem('pokedex');
        console.log(pokedexs);
        if (pokedexs !== null) {
          for (let i = 0; i < pokedexs.length; i++) {
            let id = Object.keys(pokedexs[i])[0];
            if (id === userId) {
              setPokemonInPocket(Object.values(pokedexs[i])[0].length);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ImageBackground source={GrassBackground} style={styles.backgroundImage}>
        <View style={styles.logoTitleContainer}>
          <Image
            style={styles.logoTitleImage}
            source={require('../assets/PokeChoose-logo.png')}
          />
        </View>
        <View style={styles.infoUserContainer}>
          <View style={styles.profilPictureContainer}>
            <Image
              style={styles.profilPicture}
              source={{uri: profilePicture}}
            />
          </View>
          <View style={styles.usernameContainer}>
            <Text style={styles.usernameText}> {username} </Text>
          </View>
          <View style={styles.pokemonNumberContainer}>
            <Text style={styles.pokemonNumberText}>
              {pokemonInPocket} pokemons in my pocket
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoTitleContainer: {
    alignItems: 'center',
  },
  logoTitleImage: {
    width: 500,
    height: 100,
    resizeMode: 'contain',
  },
  infoUserContainer: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  profilPictureContainer: {
    width: '100%',
    alignItems: 'center',
  },
  profilPicture: {
    width: 200,
    height: 190,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 50,
  },
  usernameContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 50,
  },
  usernameText: {
    fontFamily: 'PressStart2P-Regular',
    fontSize: 20,
  },
  pokemonNumberContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 50,
  },
  pokemonNumberText: {
    fontFamily: 'PressStart2P-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default Profil;
