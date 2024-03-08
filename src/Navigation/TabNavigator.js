import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Catch from '../Screens/Catch';
import Library from '../Screens/Library';
import Profil from '../Screens/Profil';
import Icon from 'react-native-vector-icons/FontAwesome';
import CatchScreen from '../Components/CatchScreen/CatchScreen';
import {Image, StyleSheet, Text} from 'react-native';
import Svg, {
  G,
  SvgXml,
  Path,
  Circle,
  Mask,
  Rect,
  Defs,
  Pattern,
  Use,
} from 'react-native-svg';

const TabNavigator = ({route}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Catch">
      <Tab.Screen
        name="Library"
        component={Library}
        options={({}) => ({
          tabBarLabel: () => null,
          header: () => null,
          tabBarIcon: ({color, size}) => (
            <>
              <SvgXml
                xml={`
             <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 97" width="70" height="50">
              <title>Group 7</title>
              <defs>
              <image  width="112" height="91" id="img1" href="data:image/png;base64,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"/>
              <image  width="110" height="91" id="img2" href="data:image/png;base64,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"/>
              </defs>
              <style>
              </style>
              <use id="Calque 1" href="#img1" x="5" y="5"/>
              <use id="Background" href="#img2" x="7" y="5"/>
              </svg>
              `}
              />
              <Text style={styles.nameSection}> Library </Text>
            </>
          ),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#ebf5ac',
            height: 70,
          },
        })}
      />
      <Tab.Screen
        name="Catch"
        component={CatchScreen}
        options={({}) => ({
          tabBarLabel: () => null,
          header: () => null,
          tabBarIcon: ({color, size}) => (
            <>
              <Svg
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Circle cx="25.3211" cy="24.9528" r="21.7358" fill="white" />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.8034 25.46H4.22823C4.59963 36.6569 13.8058 45.62 25.1082 45.62C36.4107 45.62 45.6168 36.6569 45.9882 25.46H35.413C35.0511 30.8285 30.5758 35.0712 25.1082 35.0712C19.6407 35.0712 15.1654 30.8285 14.8034 25.46ZM24.8682 48.5C11.6134 48.5 0.868225 37.7548 0.868225 24.5C0.868225 11.2452 11.6134 0.5 24.8682 0.5C38.1231 0.5 48.8682 11.2452 48.8682 24.5C48.8682 37.7548 38.1231 48.5 24.8682 48.5ZM24.8682 17.78C21.1569 17.78 18.1482 20.7886 18.1482 24.5C18.1482 28.2114 21.1569 31.22 24.8682 31.22C28.5796 31.22 31.5882 28.2114 31.5882 24.5C31.5882 20.7886 28.5796 17.78 24.8682 17.78Z"
                  fill="black"
                />
              </Svg>
              <Text style={styles.nameSection}> Catch </Text>
            </>
          ),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#ebf5ac',
            height: 70,
          },
        })}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={({}) => ({
          tabBarLabel: () => null,
          header: () => null,
          tabBarIcon: ({color, size}) => (
            <>
              <Svg
                width="44"
                height="53"
                viewBox="0 0 44 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M43.4865 45.6426C43.4865 36.3111 35.9115 28.7468 26.5677 28.7468H17.7869C8.44317 28.7468 0.868225 36.3111 0.868225 45.6426L0.908598 47.6407C0.908598 50.2475 3.02477 52.3614 5.63609 52.3614H38.8001C41.4107 52.3614 43.5268 50.2475 43.5268 47.6407L43.4865 45.6426Z"
                  fill="black"
                />
                <Path
                  d="M41.079 45.262C41.079 37.2644 34.306 30.7813 25.9513 30.7813H18.1C9.74542 30.7813 2.97235 37.2644 2.97235 45.262L3.00845 46.9745C3.00845 49.2086 4.90061 51.0204 7.23549 51.0204H36.8888C39.223 51.0204 41.1151 49.2086 41.1151 46.9745L41.079 45.262Z"
                  fill="white"
                />
                <Circle cx="22.3922" cy="13.2503" r="11.2104" fill="white" />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.9677 13.5119H11.5135C11.7051 19.2867 16.4532 23.9095 22.2825 23.9095C28.1117 23.9095 32.8598 19.2867 33.0514 13.5119H27.5972C27.4105 16.2807 25.1024 18.4689 22.2825 18.4689C19.4625 18.4689 17.1544 16.2807 16.9677 13.5119ZM22.1587 25.3948C15.3224 25.3948 9.78058 19.853 9.78058 13.0167C9.78058 6.1805 15.3224 0.638641 22.1587 0.638641C28.9949 0.638641 34.5368 6.1805 34.5368 13.0167C34.5368 19.853 28.9949 25.3948 22.1587 25.3948ZM22.1587 9.55087C20.2445 9.55087 18.6928 11.1026 18.6928 13.0167C18.6928 14.9309 20.2445 16.4826 22.1587 16.4826C24.0728 16.4826 25.6245 14.9309 25.6245 13.0167C25.6245 11.1026 24.0728 9.55087 22.1587 9.55087Z"
                  fill="black"
                />
              </Svg>
              <Text style={styles.nameSection}> Profil </Text>
            </>
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#ebf5ac',
            height: 70,
          },
        })}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  nameSection: {
    fontFamily: 'PressStart2P-Regular',
  },
});

export default TabNavigator;
