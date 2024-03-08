import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import GrassBackground from '../assets/images/Grass_Background.webp';
import {useSelector, useDispatch} from 'react-redux';
import {getItem} from '../helper/asyncStorageHelper';
import {useIsFocused} from '@react-navigation/native';
import {actions as authActions} from '../redux/reducers/authreducer';

const Profil = (callback, deps) => {
  const dispatch = useDispatch();
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
  }, [isFocused, userId]);

  const disconnect = useCallback(() => {
    console.log('disconnect ?');
    dispatch(authActions.clearData());
    dispatch(authActions.disconnectUser());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ImageBackground source={GrassBackground} style={styles.backgroundImage}>
        <View style={styles.logoTitleContainer}>
          <Image
            style={styles.logoTitleImage}
            source={require('../assets/images/PokeChoose-logo.png')}
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
        <TouchableOpacity onPress={disconnect} style={styles.SignOutBtn}>
          <Text style={styles.SignOutBtnText}>Sign Out</Text>
        </TouchableOpacity>
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
    marginTop: 20,
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
  SignOutBtn: {
    backgroundColor: '#FF7979',
    padding: 20,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 90,
    marginVertical: 18,
  },
  SignOutBtnText: {
    fontFamily: 'PressStart2P-Regular',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default Profil;
