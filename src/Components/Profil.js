import React, {useEffect, useRef} from 'react';
import {Image, Text, View, ImageBackground, StyleSheet} from 'react-native';
import GrassBackground from '../assets/Grass_Background.webp';
import {useSelector} from 'react-redux';

const Profil = () => {
  const {username, profilePicture, userId} = useSelector(s => s.auth);

  useEffect(() => {
    console.log('*****************');
    console.log(userId);
    console.log(profilePicture);
    console.log('*****************');
  }, []);

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
              123 pokemons in my pocket
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
