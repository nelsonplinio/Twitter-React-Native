import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import UserImage from './components/UserImage';
import Chats from './pages/Chats';
import Home from './pages/Home';
import New, {navigationOptions as newTweetNavOpts} from './pages/New';
import Notification from './pages/Notification';
import Search from './pages/Search';
import Colors from './theme/colors';

const bottomTabNav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: props => (
          <Icons name="md-home" color={props.tintColor} size={24} />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: props => (
          <Icons name="md-search" color={props.tintColor} size={24} />
        ),
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarIcon: props => (
          <Icons
            name="md-notifications-outline"
            color={props.tintColor}
            size={24}
          />
        ),
      },
    },
    Chats: {
      screen: Chats,
      navigationOptions: {
        tabBarIcon: props => (
          <Icons name="md-mail" color={props.tintColor} size={24} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      tabStyle: {
        backgroundColor: Colors.background,
      },
      adaptive: true,
      activeTintColor: Colors.assets,
      inactiveTintColor: Colors.secondaryColor,
      showLabel: false,
    },
  },
);

const stackNav = createStackNavigator(
  {
    Main: {
      screen: bottomTabNav,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTitle: 'Home',
        headerTintColor: Colors.primaryTextColor,
        headerLeft: () => (
          <UserImage uri="https://avatars3.githubusercontent.com/u/14140891?s=120&v=4" />
        ),
      },
    },
    New: {
      screen: New,
      navigationOptions: newTweetNavOpts,
    },
  },
  {},
);

const routes = createAppContainer(stackNav);

export default routes;
