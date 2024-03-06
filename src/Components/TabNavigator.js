import React, {useCallback, Image} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Catch from './Catch';
import Library from './Library';
import Profil from './Profil';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabNavigator = ({route}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Library"
        component={Library}

      />
      <Tab.Screen
        name="Catch"
        component={Catch}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}

      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
