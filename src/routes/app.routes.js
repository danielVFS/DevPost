import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import PostsUser from '../pages/PostsUser';
import NewPost from '../pages/NewPost';

const Tab = createBottomTabNavigator();

function AppRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: '#202225',
          borderTopWidth: 0,
        },
        activeTintColor: '#FFF',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="search" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="user" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
