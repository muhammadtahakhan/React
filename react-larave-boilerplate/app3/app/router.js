import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator,  createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Bookcase from './screens/Bookcase';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import Lists from './screens/Lists';
import Profile from './screens/Profile';
import Map from './screens/Map';

let screen = Dimensions.get('window');




export const TabNavigator = createBottomTabNavigator({
  'Bookcase': {
    screen: Bookcase,
    navigationOptions: {
      tabBarLabel: 'Bookcase',
      tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor}/>
    },
  },
  'Explore': {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-map-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Add Book': {
    screen: AddBook,
    navigationOptions: {
      tabBarLabel: 'Add Book',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Lists': {
    screen: Lists,
    navigationOptions: {
      tabBarLabel: 'Lists',
      tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
    },
  },
  'My Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="person" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Map':{
    screen:Map,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-add-map-outline" type="ionicon" size={28} color={tintColor} />
    },
  }
});


export const createRootNavigator = () => {
  return StackNavigator(
    {
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
  );
};