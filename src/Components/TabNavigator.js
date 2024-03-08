import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Catch from './Catch';
import Library from './Library';
import Profil from './Profil';
import Icon from 'react-native-vector-icons/FontAwesome';
import CatchScreen from './CatchScreen/CatchScreen';
import {Image, StyleSheet} from 'react-native';
import Svg, {
  G,
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
    <Tab.Navigator>
      <Tab.Screen
        name="Library"
        component={Library}
        options={({}) => ({
          tabBarIcon: ({color, size}) => (
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
          header: () => null,
          tabBarIcon: ({color, size}) => (
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
          header: () => null,
          tabBarIcon: ({color, size}) => (
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
/*const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#eef59f',
  },
});*/

export default TabNavigator;
