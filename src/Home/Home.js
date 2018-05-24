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
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Home extends Component {
  render() {
    return (
      <ImageBackground source={require('./images/home_bg.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.v_logo}>
            <Image source={require('./images/logo.png')} style={{resizeMode: 'center',}} />
          </View>
          <View style={styles.v_btn}>
            <View style={styles.v_each_btn}>
              <Button
                onPress= {() => {Actions.detail(); }}
                title="ค้นหาด้วยรหัสสินค้า"
                color="#000"
                backgroundColor="#000"
                accessibilityLabel="ค้นหาด้วยรหัสสินค้า"
              />
            </View>
            <View style={styles.v_each_btn}>
              <Button
                  onPress= {() => {Actions.scan(); }}
                  title="สแกนบาร์โค้ด"
                  color="#000"
                  backgroundColor="#000"
                  accessibilityLabel="สแกนบาร์โค้ด"
              />
              <Text></Text>
            </View>
          </View>
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
