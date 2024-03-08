import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions as authActions} from '../redux/reducers/authreducer';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../Components/DetailScreen/DetailScreen';

const RouteNavigation = () => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();

  const {isLoggedIn} = useSelector(s => s.auth);
  useEffect(() => {}, [isLoggedIn]);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            options={{
              header: () => null,
            }}
            component={TabNavigator}
          />
          <Stack.Screen name={'Detail'} component={DetailScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              header: () => null,
            }}
            name="SignIn"
            component={Login}
          />
          <Stack.Screen
            options={{
              header: () => null,
            }}
            name="SignUp"
            component={Register}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
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
});
export default RouteNavigation;
