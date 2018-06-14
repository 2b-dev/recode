/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Button,
    TouchableHighlight, AppState,

} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Home extends Component {


  render() {
    return (
      <ImageBackground  style={{width: '100%', height: '100%',backgroundColor: '#FFFFFF'}}>
        <View style={styles.container}>
          <TouchableHighlight style={styles.v_logo} onPress= {() => {Actions.homepage(); }} >
            <Image source={require('./images/logo.png')} style={{resizeMode: 'center',}} />
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  v_logo: {
    flex: 4,
    justifyContent: 'center',
    //backgroundColor: '#ffffff',
    
  },
  v_btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  v_each_btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
