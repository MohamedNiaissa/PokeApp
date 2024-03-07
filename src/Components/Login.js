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

  const logUser = useCallback(async () => {
    const users = await getItem('users');
    if (users !== null) {
      for (let i = 0; i < users.length; i++) {
        if (name === users[i].username && password === users[i].password) {
          dispatch(authActions.connectUser());
          dispatch(authActions.setUserId(users[i].id));
          dispatch(authActions.setUsername(name));
          break;
        }
      }
    } else {
      console.log('no one is registered :(');
    }
  }, [dispatch, name, password]);

  const {isLoggedIn} = useSelector(s => s.auth);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewStyle}>
      <ImageBackground source={GrassBackground} style={styles.backgroundImage}>
        {/*        <View>
          <Image
            source={require('../assets/PokeChoose-logo.png')}
            style={styles.titleLogo}
          />
        </View>*/}

        <View style={styles.loginContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.fieldsdContainer}>
              <View style={styles.signInSubtitleContainer}>
                <Text style={styles.signInSubtitle}> Sign In </Text>
              </View>
              <View style={styles.userameContainer}>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  style={[styles.inputField, styles.usernameInput]}
                  placeholder={'Username'}
                />
              </View>
              <View style={styles.passwordContainer}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  style={[styles.inputField, styles.passwordInput]}
                  placeholder={'Password'}
                />
              </View>
            </View>
            <View style={styles.actionContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={logUser}>
                <Text> Sign in </Text>
              </TouchableOpacity>
              <TouchableOpacity
                styles={styles.loginLink}
                onPress={goToRegisterPage}>
                <Text style={styles.loginLinkText}> not registered ? </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    // You can also specify additional background styles like size and position
    //backgroundSize: 'cover',
    //backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleLogo: {
    //objectFit: 'cover',
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
  },
  loginContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 0.4,
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
    width: '90%',
    //backgroundColor: '#C8C8',
    justifyContent: 'space-between',
  },
  fieldsdContainer: {
    //flex: 1,
    // backgroundColor: 'red',
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  signInSubtitleContainer: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    marginTop: 5,
  },

  signInSubtitle: {
    fontSize: 21,
    fontFamily: 'PressStart2P-Regular',
  },
  userameContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  inputField: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    fontFamily: 'PressStart2P-Regular',
    height: 50, // Set a reasonable height
    width: '100%',
    marginTop: 7,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  usernameInput: {
    //flex: 1,
  },
  passwordContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  passwordInput: {
    //flex: 1,
  },
  actionContainer: {
    flexDirection: 'row-reverse',
    //backgroundColor: 'green',
    width: '100%',
    padding: 0,
    margin: 0,
    //  height: 60,
    //  justifyContent: 'space-between',
    //alignItems: 'baseline',
    alignItems: 'baseline',
    height: 100,
    justifyContent: 'space-between',
    //alignItems: 'flex-start', // Align children to the bottom
  },
  loginButton: {
    //marginTop: 20,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#c48fb4',
  },
  loginLink: {
    padding: 10,
  },
  loginLinkText: {
    fontFamily: 'PressStart2P-Regular',
    textDecorationLine: 'underline',
    padding: 6,
    fontSize: 10,
    fontWeight: 'normal',
    backgroundColor: '#78c470',
    borderRadius: 10,
    width: 200,
  },
});
export default Login;
