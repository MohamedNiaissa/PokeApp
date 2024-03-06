import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import TabNavigator from './Components/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {actions as authActions} from './redux/reducers/authreducer';
import Login from './Components/Login';
import Register from './Components/Register';
import {Provider, useSelector} from 'react-redux';
import {store} from './store';
import RouteNavigation from './Components/RouteNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <RouteNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
