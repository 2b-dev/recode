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
  Alert
} from 'react-native';
import Barcode from 'react-native-smart-barcode';
export default class Scan extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center',}}>
          <Barcode style={{flex: 1, alignSelf: 'stretch', }}
            ref={ component => this._barCode = component }
            onBarCodeRead={this._onBarCodeRead}/> 
      </View>
    );
  }
  _onBarCodeRead = (e) => {
      console.log(`e.nativeEvent.data.type = ${e.nativeEvent.data.type}, e.nativeEvent.data.code = ${e.nativeEvent.data.code}`)
      this._stopScan()
      Alert.alert(e.nativeEvent.data.type, e.nativeEvent.data.code, [
          { text: 'OK', onPress: () => this._startScan() },
      ])
  }

  _startScan = (e) => {
      this._barCode.startScan()
  }

  _stopScan = (e) => {
      this._barCode.stopScan()
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
