import React, {useCallback, useMemo, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {actions as authActions} from '../redux/reducers/authreducer';
import {getItem, setItem} from '../helper/asyncStorageHelper';
import ImagePicker from 'react-native-image-crop-picker';
import GrassBackground from '../assets/images/Grass_Background.webp';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profilePictureLink, setProfilePictureLink] = useState(
    'https://picsum.photos/200/300',
  );
  const checkFormValidity = useMemo(() => {
    return name.length > 2 && password.length > 5;
  }, [name, password]);

  const goToLoginPage = () => {
    navigation.navigate('SignIn');
  };

  const takeProfilPicture = () => {
    ImagePicker.openCamera({
      cropping: true,
      freeStyleCropEnabled: true,
      mediaType: 'photo',
    }).then(image => {
      setProfilePictureLink(image.path);
    });
  };

  const signUp = useCallback(async () => {
    if (checkFormValidity) {
      dispatch(authActions.connectUser());
      const uniqueID = Date.now().toString();
      const users = await getItem('users');
      const newUser = {
        id: uniqueID,
        username: name,
        profilePicture: profilePictureLink,
        password: password,
      };
      const updatedUsers = users ? [...users, newUser] : [newUser];
      await setItem('users', updatedUsers);
      dispatch(authActions.setUserId(uniqueID));
      dispatch(authActions.setUsername(name));
      dispatch(authActions.setProfilePicture(profilePictureLink));
    }
  }, [checkFormValidity, dispatch, name, password, profilePictureLink]);

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
                source={require('../assets/images/PokeChoose-logo.png')}
              />
            </View>
            <View style={styles.loginContainer}>
              <View style={styles.cardContainer}>
                <View style={styles.fieldsContainer}>
                  <View style={styles.signupTextContainer}>
                    <Text style={styles.title}> Sign Up </Text>
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
                  <View style={styles.picFieldContainer}>
                    <Image
                      style={styles.profileImage}
                      source={{uri: profilePictureLink}}
                    />
                    <TouchableOpacity
                      onPress={takeProfilPicture}
                      style={styles.takePicContainer}>
                      <Text style={styles.takePicText}>Take a picture</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.actionContainer}>
                  <TouchableOpacity style={styles.button} onPress={signUp}>
                    <Text style={styles.buttonText}>Create Account</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.link} onPress={goToLoginPage}>
                    <Text style={styles.linkText}>Already registered ?</Text>
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
  signupTextContainer: {
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
  picFieldContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  takePicContainer: {
    backgroundColor: '#48abd9',
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  takePicText: {
    fontFamily: 'PressStart2P-Regular',
    width: 100,
    textAlign: 'center',
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

export default Register;
