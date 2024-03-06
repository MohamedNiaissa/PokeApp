import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Register = props => {
  const {navigation} = props;

  const goToLoginPage = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.registerContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.userameContainer}>
          <Text>Pseudo</Text>
          <TextInput
            style={[styles.inputField, styles.usernameInput]}
            placeholder={'Votre nom'}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Text>Mot de passe</Text>
          <TextInput
            style={[styles.inputField, styles.passwordInput]}
            placeholder={'Votre mot de passe'}
          />
        </View>
        <Text>Votre photo</Text>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => console.log('register')}>
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
