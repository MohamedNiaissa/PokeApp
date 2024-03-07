import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import CatchScreen from "./src/Components/CatchScreen/CatchScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <CatchScreen></CatchScreen>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
