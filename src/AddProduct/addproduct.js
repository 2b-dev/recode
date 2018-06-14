import React, { Component } from 'react';
import {Platform, StyleSheet,  View, ImageBackground, Image, Alert, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button ,Form ,Item ,Label,Input ,Text, Textarea, StyleProvider, } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import ImagePicker from 'react-native-image-picker';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

const options = {
    title: 'เลือกรูปภาพ/Choose a photo',
    takePhotoButtonTitle: 'ถ่ายรูปใหม่/Take a new photo',
    chooseFromLibraryButtonTitle: 'เลือกจากคลังภาพ/Choose from gallery',
    quality: 1,
}
export default class addproduct extends Component {

    constructor(props){
        super(props);
        this.state = {
            imageSource: null,
        }
    }
    
    choosePhoto(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                let source = { uri: response.uri };
            
                this.setState({
                    imageSource: source
                });
            }
        });
    }
    
    render(){
        return(
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Grid style={{ backgroundColor: '#FFFFFF'}} >
                    <Row style={styles.row_center} size={2}>
                        <View style={{flexDirection: 'column'}}>
                        <TouchableOpacity onPress={this.choosePhoto.bind(this)}>
                            <View style={styles.v_center}>
                                <Image source={this.state.imageSource != null ? this.state.imageSource : require('./images/choose.png')} style={{height:150,width:150, marginTop:20, borderWidth: 1, borderColor: '#42ab3f',}} /> 
                            </View>
                        </TouchableOpacity>
                            <View style={styles.v_center}>
                                <Text style={styles.t_choose}>เลือกรูปภาพ</Text>
                            </View>                                
                        </View>
                    </Row>
                    <Row style={styles.row_center} size={3.8}>
                        <Content padder>
                            <Form>
                                <Item stackedLabel>
                                    <Label>รหัสบาร์โค้ด</Label>
                                    <Input />
                                </Item>
                                <Item stackedLabel>
                                    <Label>ชื่อสินค้า</Label>
                                    <Input />
                                </Item>
                                <Item stackedLabel>
                                    <Label>ราคา (บาท)</Label>
                                    <Input />
                                </Item>
                                <Item stackedLabel>
                                    <Label>เลข มอก. (ถ้ามี)</Label>
                                    <Input />
                                </Item>
                                <Item stackedLabel>
                                    <Label>เลข อย. (ถ้ามี)</Label>
                                    <Input />
                                </Item>
                                <Item stackedLabel>
                                    <Label>เลข ฮาลาล (ถ้ามี)</Label>
                                    <Input />
                                </Item>
                                <Textarea rowSpan={5} bordered placeholder="ข้อมูลพื้นฐาน" />
                                <Textarea rowSpan={5} bordered placeholder="คำแนะนำ" />
                                <Button block>
                                    <Text>บันทึกและเพิ่มข้อมูล</Text>
                                </Button>
                            </Form>
                        </Content>
                    </Row>
                    

                </Grid>
            </Container>
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
        row_center:{
            justifyContent: 'center',
        },
        v_center:{
            justifyContent: 'center',
            alignItems: 'center',
        },
        t_choose:{
            fontFamily: 'Kanit-Regular',
            fontSize: 16,
            fontWeight: '100',
        }
});