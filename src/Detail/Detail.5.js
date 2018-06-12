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
import styles, { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE, colors } from './styles.js';
import Swiper from 'react-native-swiper';


export default class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(            
            Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
            ),
            refreshing: false,
        };
    }
    _renderScrollViewContent() {
        const data = Array.from({ length: 30 });
        return (
            <View style={styles.scrollViewContent}>
            {data.map((_, i) => (
                <View key={i} style={styles.row}>
                <Text>{i}</Text>
                </View>
            ))}
            </View>
        );
    }
    _renderSlider(){
        return(
            <Swiper style={styles.wrapper} height={400}
            onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
            dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            paginationStyle={{
                bottom: -23, left: null, right: 10
            }} loop>
                <View style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../ProductImgs/i1.png')} />
                </View>
                <View style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../ProductImgs/i2.png')} />
                </View>
                <View style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../ProductImgs/i3.png')} />
                </View>
                <View style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../ProductImgs/i4.png')} />
                </View>
            </Swiper>
        );
    }


    render(){
        const scrollY = Animated.add(
                this.state.scrollY,
                Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
            );
        const headerTranslate = scrollY.interpolate({
                inputRange: [0, HEADER_SCROLL_DISTANCE],
                outputRange: [0, -HEADER_SCROLL_DISTANCE],
                extrapolate: 'clamp',
            });
    
        const imageOpacity = scrollY.interpolate({
                inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
                outputRange: [1, 1, 0],
                extrapolate: 'clamp',
            });
            const imageTranslate = scrollY.interpolate({
                inputRange: [0, HEADER_SCROLL_DISTANCE],
                outputRange: [0, 100],
                extrapolate: 'clamp',
            });
    
        const titleScale = scrollY.interpolate({
                inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
                outputRange: [1, 1, 0.8],
                extrapolate: 'clamp',
            });
        const titleTranslate = scrollY.interpolate({
                inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
                outputRange: [0, 0, -8],
                extrapolate: 'clamp',
            });
        return(
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.fill}>
                    <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.251)"
                    />
                    <Animated.ScrollView
                    style={styles.fill}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true },
                    )}
                    refreshControl={
                        <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={() => {
                            this.setState({ refreshing: true });
                            setTimeout(() => this.setState({ refreshing: false }), 1000);
                        }}
                        progressViewOffset={HEADER_MAX_HEIGHT}
                        />
                    }
                    contentInset={{
                        top: HEADER_MAX_HEIGHT,
                    }}
                    contentOffset={{
                        y: -HEADER_MAX_HEIGHT,
                    }}
                    >
                    {this._renderScrollViewContent()}
                    </Animated.ScrollView>
                    <Animated.View
                    pointerEvents="none"
                    style={[
                        styles.header,
                        { transform: [{ translateY: headerTranslate }] },
                    ]}
                    >
                        <Animated.View
                            style={[
                            styles.backgroundImage,
                            {
                                opacity: imageOpacity,
                                transform: [{ translateY: imageTranslate }],
                            },
                            ]}
                            //source={require('../ProductImgs/bag.jpg')}
                        >
                            {this._renderSlider}
                        </Animated.View>
                    </Animated.View>
                    <Animated.View
                    style={[
                        styles.bar,
                        {
                        transform: [
                            { scale: titleScale },
                            { translateY: titleTranslate },
                        ],
                        },
                    ]}
                    >
                    <Text style={styles.title}>กระเป๋า</Text>
                    </Animated.View>
                </View>
            </SafeAreaView>
        )
    }
    onSnap(event) {
        const { id } = event.nativeEvent;
        if (id === 'bottom') {
          this.setState({ canScroll: true });
        }
    }
    onScroll(event) {
        const { contentOffset } = event.nativeEvent;
        if (contentOffset.y === 0) {
          this.setState({ canScroll: false });
        }
    }
}

