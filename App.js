import {AppLoading} from 'expo'; 
import {Asset} from 'expo-asset'; 
import Navigation from './navigation/index'; 
import React from 'react';
import { StyleSheet } from 'react-native';
import { Block } from './components'; 

export default class App extends React.Component { 
  state = {
    isLoadingComplete: false,
  };
    
  handleResourcesAsync = async () => { 
    // we're caching all the images 
    // for better app performance 

    const cacheImages = images.map( image => {
      Asset.fromModule(image).downloadAsync(); 
    }); 

    return Promise.all(cacheImages); 
  }

  render(){ 
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen){ 
      return (
        <AppLoading
          startAsync = {this.handleResourcesAsync}
          onError = {error => console.log(error)}
          onFinish = {() => {this.setState({isLoadingComplete: true})}}
        />
      )
    }
      return (
        <Block white>
          <Navigation/>
        </Block>
      ); 
    
  }
}

const styles = StyleSheet.create({

})

const images = [
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/illustration_1.png'),
  require('./assets/images/illustration_2.png'),
  require('./assets/images/illustration_3.png'),
  require('./assets/images/avatar.png'),
];




