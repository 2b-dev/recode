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
    Slider,
    TouchableHighlight,
    SafeAreaView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';
import Display from 'react-native-display';
import styles from './styles';

export default class Detail extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            starCount: 3.5,
            enableStandard: false,
            enableInfomation: true,
            enableNote: true,
            title:"",
            imageset:"",
            detail:"",
            prop:"",
            note:"",
            price:"",
        };
    }

    componentDidMount(){
        console.log(this.props.data)
        this.setState({title:this.props.data.title});
        this.setState({imageset:this.props.data.Image});
        this.setState({detail:this.props.data.detail});
        this.setState({prop:this.props.data.prop});
        this.setState({note:this.props.data.note});
        this.setState({price:this.props.data.price});
    }


    toggleDisplayStandard() {
        let toggle = !this.state.enableStandard;
        this.setState({enableStandard: toggle});
    }
    toggleDisplayInfomation() {
        let toggle = !this.state.enableInfomation;
        this.setState({enableInfomation: toggle});
    }
    toggleDisplayNote() {
        let toggle = !this.state.enableNote;
        this.setState({enableNote: toggle});
    }
    onStarRatingPress(rating){
        this.setState({
            starCount: rating
        });
    }
    
    render(){
        return(
            <SafeAreaView style={styles.safeArea}>
                <ScrollView 
                >
                    <View style={styles.v_contain_slider}>
                        <Swiper style={styles.wraper_slide}
                            onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                            dot={<View style={styles.s_dot} />}
                            activeDot={<View style={styles.s_dot_active} />}
                            paginationStyle={styles.s_pag}
                            loop
                        >
                            <View style={styles.v_slider}>
                                <Image style={styles.img_slide} source={{uri:this.state.imageset}} />
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.v_content}>
                        <View style={styles.v_name_product}>
                            <Text style={styles.t_name}>{this.state.title}: </Text>
                        </View>
                        <View style={styles.v_star_contain}>
                            <View style={styles.v_star_tab1}>
                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    starSize={16}
                                    starStyle={{margin: 0,}}
                                />
                            </View>
                            <View style={styles.v_star_tab1}>
                                <Text style={styles.t_score}>3.5 ดี</Text>
                            </View>
                        </View>
                        <View style={styles.v_review_contain}>
                            <View style={styles.v_review_tab1}>
                                <Text style={styles.defFont}>2,013 รีวิว</Text>
                            </View>
                            <View style={styles.v_review_tab2}>
                                <Text style={styles.defFont}>ดูรีวิวทั้งหมด</Text>
                            </View>
                        </View>
                        <View style={styles.v_block_price}>
                            <Text style={styles.defFont}>ราคา : {this.state.price} บาท</Text>
                        </View>

                        <TouchableOpacity
                            onPress={this.toggleDisplayStandard.bind(this)}
                        >
                            <View style={styles.v_block_standard}>
                                <View style={styles.v_block_title}>
                                    <Text style={styles.t_header}>มาตรฐานที่ได้รับ</Text>
                                </View>
                                <View style={styles.v_block_icon}>
                                    <Display
                                        enable={!this.state.enableStandard} 
                                        enterDuration={50} 
                                        exitDuration={50}
                                        exit="fadeOut"
                                        enter="fadeIn"
                                    >
                                        <Icon.Button name="plus" color="#000" size={15} iconStyle={{marginTop: 5}} backgroundColor="#fff" onPress={this.toggleDisplayStandard.bind(this)} />
                                    </Display>
                                    <Display
                                        enable={this.state.enableStandard} 
                                        enterDuration={50} 
                                        exitDuration={50}
                                        exit="fadeOut"
                                        enter="fadeIn"
                                    >
                                        <Icon.Button name="minus" color="#000" size={15} iconStyle={{marginTop: 5}} backgroundColor="#fff" onPress={this.toggleDisplayStandard.bind(this)} />
                                    </Display>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Display
                            enable={this.state.enableStandard} 
                            enterDuration={1000} 
                            exitDuratio={100}
                            exit="fadeOut"
                            enter="fadeIn"
                        >
                            <View style={styles.v_logo_contain}>
                                <View style={styles.v_logo_img_contain}>
                                    <View style={styles.v_logo_img}>
                                        <Image style={styles.img_logo} source={require('../logo/mok.png')} />
                                    </View>
                                    <View style={styles.v_text_logo}>
                                        <Text style={styles.t_logo}>มอก 1111/2541</Text>
                                    </View>
                                </View>  
                                <View style={styles.v_logo_img_contain}>
                                    <View style={styles.v_logo_img}>
                                        <Image style={styles.img_logo} source={require('../logo/mok.png')} />
                                    </View>
                                    <View style={styles.v_text_logo}>
                                        <Text style={styles.t_logo}>มอก 1111/2541</Text>
                                    </View>
                                </View>
                                <View style={styles.v_logo_img_contain}>
                                    <View style={styles.v_logo_img}>
                                        <Image style={styles.img_logo} source={require('../logo/mok.png')} />
                                    </View>
                                    <View style={styles.v_text_logo}>
                                        <Text style={styles.t_logo}>มอก 1111/2541</Text>
                                    </View>
                                </View>
                                <View style={styles.v_logo_img_contain}>
                                    <View style={styles.v_logo_img}>
                                        <Image style={styles.img_logo} source={require('../logo/oy.png')} />
                                    </View>
                                    <View style={styles.v_text_logo}>
                                        <Text style={styles.t_logo}>มอก 1111/2541</Text>
                                    </View>
                                </View>
                                <View style={styles.v_logo_img_contain}>
                                    <View style={styles.v_logo_img}>
                                        <Image style={styles.img_logo} source={require('../logo/mok.png')} />
                                    </View>
                                    <View style={styles.v_text_logo}>
                                        <Text style={styles.t_logo}>มอก 1111/2541</Text>
                                    </View>
                                </View>           
                            </View>
                        </Display>
                        <TouchableOpacity
                            onPress={this.toggleDisplayInfomation.bind(this)}
                        >
                            <View style={styles.v_block_information}>
                                <View style={styles.v_block_title}>
                                    <Text style={styles.t_header}>ข้อมูลพื้นฐาน</Text>
                                </View>
                                <View style={styles.v_block_icon}>
                                    <Display
                                        enable={!this.state.enableInfomation} 
                                        enterDuration={50} 
                                        exitDuration={50}
                                        exit="fadeOut"
                                        enter="fadeIn"
                                    >
                                        <Icon.Button name="plus" color="#000" size={15} iconStyle={{marginTop: 5}} backgroundColor="#4d9be4" onPress={this.toggleDisplayInfomation.bind(this)} />
                                    </Display>
                                    <Display
                                        enable={this.state.enableInfomation} 
                                        enterDuration={50} 
                                        exitDuration={50}
                                        exit="fadeOut"
                                        enter="fadeIn"
                                    >
                                        <Icon.Button name="minus" color="#000" size={15} iconStyle={{marginTop: 5}} backgroundColor="#4d9be4" onPress={this.toggleDisplayInfomation.bind(this)} />
                                    </Display>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Display
                            enable={this.state.enableInfomation} 
                            enterDuration={1000} 
                            exitDuratio={100}
                            exit="fadeOut"
                            enter="fadeIn"
                        >
                            <View style={styles.v_t_standard}>
                                <Text style={styles.defFont}>{this.state.detail}</Text>
                            </View>
                        </Display>

                        <TouchableOpacity
                            onPress={this.toggleDisplayNote.bind(this)}
                        >
                            <View style={styles.v_block_note}>
                                <View style={styles.v_block_title}>
                                    <Text style={styles.t_header}>คำแนะนำ</Text>
                                </View>
                                <View style={styles.v_block_icon}>
                                    <Display
                                        enable={!this.state.enableNote} 
                                        enterDuration={50} 
                                        exitDuration={50}
                                        exit="fadeOut"
                                        enter="fadeIn"
                                    >
                                        <Icon.Button name="plus" color="#000" size={15} iconStyle={{marginTop: 5}} backgroundColor="#f7244c" onPress={this.toggleDisplayNote.bind(this)} />
                                    </Display>
                                    <Display
                                        enable={this.state.enableNote} 
                                        enterDuration={50} 
                                        exitDuration={50}
                                        exit="fadeOut"
                                        enter="fadeIn"
                                    >
                                        <Icon.Button name="minus" color="#000" size={15} iconStyle={{marginTop: 5}} backgroundColor="#f7244c" onPress={this.toggleDisplayNote.bind(this)} />
                                    </Display>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Display
                            enable={this.state.enableNote} 
                            enterDuration={1000} 
                            exitDuratio={100}
                            exit="fadeOut"
                            enter="fadeIn"
                        >
                            <View style={styles.v_t_note}>
                                <Text style={styles.defFont}>{this.state.note}</Text>
                            </View>
                        </Display>

                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }    
}

