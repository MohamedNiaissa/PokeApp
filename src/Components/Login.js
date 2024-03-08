import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import {actions as authActions} from '../redux/reducers/authreducer';
import {useDispatch, useSelector} from 'react-redux';
import GrassBackground from '../assets/Grass_Background.webp';

import {getItem, setItem} from '../helper/asyncStorageHelper';
const Login = props => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const {userId, username} = useSelector(s => s.auth);

  const checkFormValidity = useMemo(() => {
    return name.length > 2 && password.length > 5;
  }, [name, password]);

  const goToRegisterPage = () => {
    navigation.navigate('SignUp');
  };

  const getProfilePicture = async iduser => {
    let users = await getItem('users');
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === iduser) {
        return users[i].profilePicture;
      }
    }
  };
  const logUser = useCallback(async () => {
    const users = await getItem('users');
    if (users !== null) {
      for (let i = 0; i < users.length; i++) {
        if (name === users[i].username && password === users[i].password) {
          dispatch(authActions.connectUser());
          dispatch(authActions.setUserId(users[i].id));
          dispatch(authActions.setUsername(name));
          let pictureUrl = await getProfilePicture(users[i].id);
          dispatch(authActions.setProfilePicture(pictureUrl));
          console.log('****M**M**M***MM*M**M***M*M');
          break;
        }
      }
    } else {
      console.log('no one is registered :(');
    }
  }, [dispatch, name, password]);

  const {isLoggedIn} = useSelector(s => s.auth);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <ImageBackground
            source={GrassBackground}
            style={styles.backgroundImage}>
            <View style={styles.logoTitleContainer}>
              <Image
                style={styles.logoTitleImage}
                source={require('../assets/PokeChoose-logo.png')}
              />
            </View>
            <View style={styles.loginContainer}>
              <View style={styles.cardContainer}>
                <View style={styles.fieldsContainer}>
                  <View style={styles.signinTextContainer}>
                    <Text style={styles.title}> Sign In </Text>
                  </View>
                  <TextInput
                    value={name}
                    onChangeText={setName}
                    style={styles.inputField}
                    placeholder={'Username'}
                  />
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.inputField}
                    placeholder={'Password'}
                  />
                </View>
                <View style={styles.actionContainer}>
                  <TouchableOpacity style={styles.button} onPress={logUser}>
                    <Text style={styles.buttonText}>Sign in</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.link}
                    onPress={goToRegisterPage}>
                    <Text style={styles.linkText}>not registered ?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoTitleContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  logoTitleImage: {
    width: 500,
    height: 100,
    resizeMode: 'contain',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    borderRadius: 22,
    padding: 22,
    width: '90%',
  },
  fieldsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  signinTextContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 12,
    borderWidth: 3,
  },
  title: {
    fontSize: 21,
    fontFamily: 'PressStart2P-Regular',
    textAlign: 'center',
  },
  inputField: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    fontFamily: 'PressStart2P-Regular',
    height: 50,
    width: '100%',
    marginTop: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  actionContainer: {
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#c48fb4',
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'PressStart2P-Regular',
    textAlign: 'center',
    fontSize: 15,
  },
  link: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#78c470',
  },
  linkText: {
    fontFamily: 'PressStart2P-Regular',
    textDecorationLine: 'underline',
    fontSize: 10,
  },
});
export default Login;
