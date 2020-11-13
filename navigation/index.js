import React from 'react'; 
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { theme } from '../constants';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Forgot from '../screens/Forgot';
import Home from '../screens/Home'; 
import Settings from '../screens/Settings';
import Request from '../screens/Request';


/*
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
*/

const screens = createStackNavigator({
  Welcome,
  Login,
  Signup,
  Forgot,
  Home,
  Settings,
  Request,
  /*
  Explore,
  Browse,
  Product,
  ,*/
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: theme.sizes.base * 7,
      backgroundColor: '#f2f2f2', // or 'white
      borderBottomColor: "transparent",
      shadowOpacity: 0,
      borderBottomWidth: 0,
      elevation: 0, // for android only
    },
    title: ' ',
    headerBackImage: <Image source={require('../assets/icons/back.png')} />,
    headerBackTitle: ' ', //Doing this to hide the back button label  
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: theme.sizes.base * 2,    //for iOS multiply the value by 2
      paddingRight: theme.sizes.base * 2,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
    },
  }
});

export default createAppContainer(screens);