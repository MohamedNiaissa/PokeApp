import React, {useCallback, useMemo, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {actions as authActions} from '../redux/reducers/authreducer';

const Register = props => {
  const {navigation} = props;
  const {isLoggedIn} = useSelector(s => s.auth);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const checkFormValidity = useMemo(() => {
    return name.length > 2 && password.length > 5;
  }, [name, password]);

  const goToLoginPage = () => {
    navigation.navigate('SignIn');
  };

  const signUp = useCallback(() => {
    console.log(name);
    console.log(password);
    console.log(checkFormValidity);
    checkFormValidity ? dispatch(authActions.connectUser()) : undefined;
  }, [name, password, checkFormValidity, dispatch]);

  return (
    <View style={styles.registerContainer}>
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
        <Text>Votre photo</Text>
        <TouchableOpacity style={styles.registerButton} onPress={signUp}>
          <Text> S'inscrire </Text>
        </TouchableOpacity>
        <TouchableOpacity styles={styles.loginLink} onPress={goToLoginPage}>
          <Text style={styles.loginLinkText}> Déjà membre </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
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
  registerButton: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    borderRadius: 12,
  },
});
export default Register;
