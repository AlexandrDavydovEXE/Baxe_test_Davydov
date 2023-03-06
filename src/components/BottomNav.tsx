import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ChatIcon from '../icons/ChatIcon';
import HomeIcon from '../icons/HomeIcon';
import CommunityIcon from '../icons/Community';
import FinanceIcon from '../icons/Finance';
import EcosystemIcon from '../icons/Ecosystem';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import React from 'react';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  const screenOptions = {
    tabBarStyle: {
      height: 90,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },
    tabBarItemStyle: {
      marginTop: 5,
    },
  };

  return (
    <Tab.Navigator {...{screenOptions}} initialRouteName={'Chat'}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false, tabBarIcon: () => <HomeIcon />}}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{headerShown: false, tabBarIcon: () => <ChatIcon />}}
      />
      <Tab.Screen
        name="Community"
        component={HomeScreen}
        options={{headerShown: false, tabBarIcon: () => <CommunityIcon />}}
      />
      <Tab.Screen
        name="Finance"
        component={ChatScreen}
        options={{headerShown: false, tabBarIcon: () => <FinanceIcon />}}
      />
      <Tab.Screen
        name="Ecosystem"
        component={HomeScreen}
        options={{headerShown: false, tabBarIcon: () => <EcosystemIcon />}}
      />
    </Tab.Navigator>
  );
}
