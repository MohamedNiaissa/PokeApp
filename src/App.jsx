import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
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
