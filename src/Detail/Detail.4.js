import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    Platform,
    RefreshControl,
    StatusBar,
    ListView,
    Button,
    WebView,
    ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Interactable from 'react-native-interactable';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 75
  }
  

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this._deltaY = new Animated.Value(Screen.height-100);
      }
      render() {
        return (
          <View style={styles.container}>
    
            <Image style={styles.map} source={require('../ProductImgs/bag.jpg')} />
    
    
            <View style={styles.panelContainer} pointerEvents={'box-none'}>
              <Animated.View
                pointerEvents={'box-none'}
                style={[styles.panelContainer, {
                backgroundColor: 'black',
                opacity: this._deltaY.interpolate({
                  inputRange: [0, Screen.height-100],
                  outputRange: [0.5, 0],
                  extrapolateRight: 'clamp'
                })
              }]} />
              <Interactable.View
                verticalOnly={true}
                snapPoints={[{y: 40}, {y: Screen.height-300}, {y: Screen.height-100}]}
                boundaries={{top: -300}}
                initialPosition={{y: Screen.height-100}}
                animatedValueY={this._deltaY}>
                <View style={styles.panel}>
                  <View style={styles.panelHeader}>
                    <View style={styles.panelHandle} />
                  </View>
                  <Text style={styles.panelTitle}>กระเป๋าแฟชั่น</Text>
                  <Text style={styles.panelSubtitle}>ราคา 250.00 บาท</Text>
                  
                  <Image style={styles.photo} source={require('../ProductImgs/bag.jpg')} />
                </View>
              </Interactable.View>
            </View>
    
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',
      },
      panelContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      panel: {
        height: Screen.height + 300,
        padding: 20,
        backgroundColor: '#f7f5eee8',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
        shadowOpacity: 0.4
      },
      panelHeader: {
        alignItems: 'center'
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10
      },
      panelTitle: {
        fontSize: 27,
        height: 35
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10
      },
      panelButton: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#318bfb',
        alignItems: 'center',
        marginVertical: 10
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
      },
      photo: {
        width: Screen.width-40,
        height: 225,
        marginTop: 30
      },
      map: {
        height: Screen.height,
        width: Screen.width
      }
    });