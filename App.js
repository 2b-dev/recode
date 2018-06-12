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
import Home from './src/Home/Home';
import Scan from './src/Scan/Scan';
import Detail from './src/Detail/Detail';
export default class App extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="home" component={Home} initial={true} hideNavBar={true} />
          <Scene key="scan" component={Scan} hideNavBar={true} />
          <Scene key="detail" component={Detail} hideNavBar={false} title="ข้อมูลสินค้า"/>
        </Scene>
      </Router>
    );
  }
}

