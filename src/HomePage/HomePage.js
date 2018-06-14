import React, { Component } from 'react';
import {Platform, StyleSheet,  View, ImageBackground, Image, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button ,Form ,Item ,Label,Input ,Text, StyleProvider } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Barcode from 'react-native-smart-barcode';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
export default class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
        codeip:'',
        }
    }
    

    Setcode(code){

        return fetch('http://commsk.com/recode/Service/Service.php?code='+code)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if(responseJson.Status == "Success"){
                    Actions.detail({data:responseJson.Data})
                }else{
                    this.openConfirm(true)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    SetCodeip(){
    console.warn(this.state.codeip);

        return fetch('http://commsk.com/recode/Service/Service.php?code='+this.state.codeip)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if(responseJson.Status == "Success"){
                    Actions.detail({data:responseJson.Data})
                }else{
                    this.openConfirm(true)
                }
            })
            .catch((error) => {
                console.error(error);
            });


    }
    
    openConfirm(show) {
        this.setState({ showConfirm: show })
    }
    clickAdd(){
        this.openConfirm(false);
        Actions.addproduct();

    }
    render(){
        return(
            <StyleProvider style={getTheme(material)}>
            <Container>
                    <Grid style={{ backgroundColor: '#FFFFFF'}} >
                        <Row style={styles.row_center} size={25}  >
                            <Image source={require('./images/logo.png')} style={{height:120,width:120,marginTop:20}} />
                        </Row>
                        <Row style={styles.row_center} size={50} >
                            <View style={{flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center',}}>
                                <Barcode style={{flex: 1, alignSelf: 'stretch',backgroundColor: '#FFFFFF' }}
                                         ref={ component => this._barCode = component }
                                         onBarCodeRead={this._onBarCodeRead}/>
                            </View>
                        </Row>
                        <Row style={styles.row_center} size={25} style={{ paddingRight:10 , paddingLeft:10 , paddingTop:10  }}  >
                            <Content>
                                <Item >
                                    <Input placeholder="กรอกรหัสบาร์โค๊ตที่ผลิตภัณฑ์"  Textbox onChangeText={(text) => this.setState({codeip:text})} />
                                </Item>
                                <Button block info onPress={() => this.SetCodeip()}  >
                                    <Text>ค้นหาจากรหัส</Text>
                                </Button>
                            </Content>
                        </Row>
                        <ConfirmDialog
                            title="สินค้ายังไม่มีข้อมูล"
                            message="คุณต้องการเพิ่มข้อมูลสินค้าหรือไม่ ?"
                            visible={this.state.showConfirm}
                            onTouchOutside={() => this.openConfirm(false)}
                            positiveButton={{
                                title: "เพิ่ม",
                                onPress: () => this.clickAdd()
                            }}
                            negativeButton={{
                                title: "ยกเลิก",  
                                onPress: () => this.openConfirm(false),                              
                                titleStyle: {
                                    color: 'blue',
                                    colorDisabled: 'red',
                                },
                                style: {
                                    backgroundColor: 'transparent',
                                    backgroundColorDisabled: 'transparent',
                                },
                                
                            }}
                        />
                    </Grid>
            </Container>
            </StyleProvider>
        )
    }

    _onBarCodeRead = (e) => {

        console.log(`e.nativeEvent.data.type = ${e.nativeEvent.data.type}, e.nativeEvent.data.code = ${e.nativeEvent.data.code}`)
        this._stopScan()
        //this.setState({${e.nativeEvent.data.code}});
        this.Setcode(e.nativeEvent.data.code);
      /*  Alert.alert(e.nativeEvent.data.type, e.nativeEvent.data.code, [
            { text: 'OK', onPress: () => this._startScan() },
        ])*/

    }

    _startScan = (e) => {
        this._barCode.startScan()
    }

    _stopScan = (e) => {
        this._barCode.stopScan()
    }
}

const styles = StyleSheet.create({
        row_center:{
            justifyContent: 'center',
            alignItems: 'center',
        }
});