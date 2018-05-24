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
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const NAV_HEIGHT = 50
const TOP_SPACING = NAV_HEIGHT + 5
const IMG_HEIGHT = 440
const IMG_CONTAINER_HEIGHT = IMG_HEIGHT - 100

export default class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            scrollY: new Animated.Value(0)
        }
    }
    render(){
        return(
            <View style={styles.container}>
                {this._renderNav()}
                <View style={{flex:1, width: '100%', height: '100%', marginTop: 20,}}>
                    <Animated.ScrollView
                        contentContainerStyle={[styles.contentContainer]}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
                            { useNativeDriver: true }
                        )}
                       >
                        {this._renderImgProduct()}
                        <View>
                            <Text style={{margin: 16}}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>
                            <Text style={{margin: 16}}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>
                            <Text style={{margin: 16}}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>
                            <Text style={{margin: 16}}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>
                            <Text style={{margin: 16}}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>
                            <Text style={{margin: 16}}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>
                            <Text style={{margin: 16}}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>
                            <Text style={{margin: 16}}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>
                            <Text style={{margin: 16}}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>
                            <Text style={{margin: 16}}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>
                        </View>
                    </Animated.ScrollView>
                </View>
            </View>
        )
    }
    _renderNav(){
            return  <Animated.View style={styles.v_nav}>
                        <View style={[styles.navDetail]}>
                            <Animated.View style={[styles.container2, {
                                opacity: this.state.scrollY.interpolate({
                                    inputRange: [-1, 0, IMG_HEIGHT - NAV_HEIGHT, IMG_HEIGHT + 1],
                                    outputRange: [0, 0, 0, 1]
                                }),
                                transform: [{
                                    translateY: this.state.scrollY.interpolate({
                                    inputRange: [0, IMG_HEIGHT / 2, IMG_HEIGHT, IMG_HEIGHT + 1],
                                    outputRange: [NAV_HEIGHT, NAV_HEIGHT, 0, 0]
                                    })
                                }]
                                }]}>
                                    <Text style={styles.title_product} numberOfLines={1}>กระเป๋า</Text>
                                    <Text style={styles.price}>259.00 ฿</Text>
                            </Animated.View>
                        </View>
                    </Animated.View>
    }

    _renderImgProduct() {
        return <View style={styles.v_imgProduct}>
                    <View style={styles.v_imgContainer}>
                        <Animated.Image source={require('../ProductImgs/bag.jpg')} style={styles.img_product_b} />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.title_product} numberOfLines={1}>กระเป๋า</Text>
                        <Text style={styles.price}>259.00 ฿</Text>
                    </View>
                </View>
    }

    

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    container2: {
        flex: 1,
        height: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    v_imgProduct: {
        alignItems: 'center',
        justifyContent: 'center',
        height: IMG_HEIGHT,
        position: 'relative',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    v_imgContainer: {
        height: 340,
    },
    img_product: {
        width: 300,
        height: 340,
        resizeMode: 'contain',
    },
    img_product_b: {
        width: 400,
        height: 340,
        resizeMode: 'contain',
    },
    title_product: {
        fontSize: 24,
    },
    price_product: {
        fontSize: 18,
    },
    v_navbar: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: NAV_HEIGHT,
        paddingTop: 10,
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomColor: '#ddd',
        //backgroundColor: '#000',
        backgroundColor: 'transparent'
    },
    placeHolder: {
        width: 40,
    },
    productDetailContainer: {
        paddingTop: NAV_HEIGHT,
    },
    navDetail: {
        //height: NAV_HEIGHT,
        minHeight: 0,
        maxHeight: NAV_HEIGHT,
        position: 'relative',
        borderBottomColor: '#ddd',
        //backgroundColor: '#000',
        backgroundColor: 'transparent'
    }
})