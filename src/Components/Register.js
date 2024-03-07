import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {actions as authActions} from '../redux/reducers/authreducer';
import {getItem, setItem} from '../helper/asyncStorageHelper';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = props => {
  const {navigation} = props;
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
      // showCropFrame: true,
      // showCropGuidelines:true,
      // multiple:true,
      freeStyleCropEnabled: true,
      mediaType: 'photo',
      // cropperToolbarTitle:'',
      // cropperCircleOverlay:true
      // showCropGuidelines:false,
      // showCropFrame:false,
      // hideBottomControls: true, //to hide bottom
    }).then(image => {
      console.log('imageeeee', image);
      setProfilePictureLink(image.path);
    });
    return null;
  };

  const signUp = useCallback(async () => {
    if (checkFormValidity) {
      dispatch(authActions.connectUser());
      const uniqueID = Date.now().toString();
      const users = await getItem('users');
      if (users == null) {
        await setItem('users', [
          {
            id: uniqueID,
            username: name,
            profilePicture: profilePictureLink,
            password: password,
          },
        ]);
        dispatch(authActions.setUserId(uniqueID));
        dispatch(authActions.setUsername(name));
        dispatch(authActions.setProfilePicture(profilePictureLink));
      } else {
        await setItem('users', [
          ...users,
          {
            id: uniqueID,
            username: name,
            profilePicture: profilePictureLink,
            password: password,
          },
        ]);
        dispatch(authActions.setUserId(uniqueID));
        dispatch(authActions.setUsername(name));
        dispatch(authActions.setProfilePicture(profilePictureLink));
      }
    }
  }, [checkFormValidity, dispatch, name, password, profilePictureLink]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          <View style={styles.pictureContainer} title="Camera">
            <Text>Votre photo</Text>
            <TouchableOpacity onPress={takeProfilPicture}>
              <Icon name="photo" size={30} color="black" />
            </TouchableOpacity>
            <Image
              source={{
                uri: profilePictureLink,
              }}
              style={styles.picturePreview}
            />
          </View>

          <TouchableOpacity style={styles.registerButton} onPress={signUp}>
            <Text> S'inscrire </Text>
          </TouchableOpacity>
          <TouchableOpacity styles={styles.loginLink} onPress={goToLoginPage}>
            <Text style={styles.loginLinkText}> Déjà membre </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picturePreview: {
    width: '20%',
    height: '100%',
  },
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
    height: '70%',
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
  pictureContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
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
