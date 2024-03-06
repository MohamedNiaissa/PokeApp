import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {actions as authActions} from '../redux/reducers/authreducer';
import {useDispatch, useSelector} from 'react-redux';

import {setItem} from '../helper/asyncStorageHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = props => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const checkFormValidity = useMemo(() => {
    return name.length > 2 && password.length > 5;
  }, [name, password]);

  const goToRegisterPage = () => {
    navigation.navigate('SignUp');
  };

  const logUser = useCallback(async () => {
    if (checkFormValidity) {
      dispatch(authActions.connectUser());
      //setItem({username: name, password: password});
      const json = JSON.stringify({username: name, password: password});
      await AsyncStorage.setItem('userData', json);
    }
  }, [checkFormValidity, dispatch, name, password]);

  const {isLoggedIn} = useSelector(s => s.auth);

  return (
    <View style={styles.loginContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.userameContainer}>
          <Text>Pseudo</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={[styles.inputField, styles.usernameInput]}
            placeholder={'Votre nom'}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Text>Mot de passe</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={[styles.inputField, styles.passwordInput]}
            placeholder={'Votre mot de passe'}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={logUser}>
          <Text> Se connecter </Text>
        </TouchableOpacity>
        <TouchableOpacity styles={styles.loginLink} onPress={goToRegisterPage}>
          <Text style={styles.loginLinkText}> Pas encore inscrit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 0.45,
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#C8C8',
  },
  userameContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  inputField: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    height: '35%',
    marginLeft: 30,
  },
  usernameInput: {
    flex: 1,
  },
  passwordContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  passwordInput: {
    flex: 1,
  },
  loginButton: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    borderRadius: 12,
  },
  loginLink: {
    padding: 10,
  },
  loginLinkText: {
    textDecorationLine: 'underline',
  },
});
export default Login;
