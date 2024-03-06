import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Catch from './Catch';
import Library from './Library';
import Profil from './Profil';
import Icon from 'react-native-vector-icons/FontAwesome';
import Register from './Register';

const TabNavigator = ({route}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Auth" component={Register} />
      <Tab.Screen
        name="Library"
        component={Library}
        options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={30} color="#900" />
          ),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      />
      <Tab.Screen
        name="Catch"
        component={Catch}
        options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={30} color="#900" />
          ),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={30} color="#900" />
          ),
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
