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
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import HomePage from './src/HomePage/HomePage';
import Home from './src/Home/Home';
import Scan from './src/Scan/Scan';
import Detail from './src/Detail/Detail';
import addproduct from './src/AddProduct/addproduct';
export default class App extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="homepage" component={HomePage}   hideNavBar={true} />
          <Scene key="home" component={Home}  initial={true} hideNavBar={true} />
          <Scene key="scan" component={Scan} hideNavBar={true} />
          <Scene key="detail" component={Detail} hideNavBar={false} title="ข้อมูลสินค้า"/>
          <Scene key="addproduct" component={addproduct} hideNavBar={false} title="เพิ่มข้อมูลสินค้า"/>
        </Scene>
      </Router>
    );
  }
}

