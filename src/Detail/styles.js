import { StyleSheet, Platform, Dimensions } from 'react-native';

export const HEADER_MAX_HEIGHT = 400;
export const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
export const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const { width } = Dimensions.get('window');

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};


export default StyleSheet.create({
    defFont:{
        fontFamily: 'Kanit-Regular',
        fontSize: 16,
        fontWeight: '100',
        paddingTop: 7,
        paddingBottom: 7,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    v_contain_slider: {
        height: 350,
        backgroundColor: 'transparent',
        /*borderColor: '#85af48',
        borderWidth: 0,
        borderBottomWidth: 1,*/
    },
    v_slider: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    img_slide: {
        width,
        flex: 1,
        //resizeMode: 'stretch',
        resizeMode: 'contain',
    },
    wraper_slide: {
        height: 350,
    },
    s_dot:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: 5,
        height: 5,
        borderRadius: 4,
        margin: 3,
    },
    s_dot_active:{
        backgroundColor: '#85af48',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    s_pag:{
        bottom: -5,
        alignItems: 'center',
    },
    v_content:{        
        paddingTop: 20,
        alignItems: 'stretch',
        flexDirection: 'column',
        flex: 1,
    },
    v_name_product: {
        padding: 15,
        paddingTop: 7,
        paddingBottom: 7,
    },
    v_star_contain:{
        flexDirection: 'row',
        flex: 1,
        padding: 15,
        paddingTop: 7,
        paddingBottom: 7
    },
    v_star_tab1:{
        flex: 1,
    },
    v_star_tab2: {
        flex: 1,
    },
    t_name:{
        fontFamily: 'Kanit-Regular',
        fontSize: 18,
        fontWeight: '100',
        paddingTop: 7,
        paddingBottom: 7,
    },
    t_header:{
        fontFamily: 'Kanit-Regular',
        fontSize: 18,
        fontWeight: '100',
        paddingTop: 7,
        paddingBottom: 7,
    },
    t_score: {
        fontFamily: 'Kanit-Regular',
        fontSize: 16,
        fontWeight: '100',
        paddingLeft: 15,
        bottom: 3,
    },
    v_review_contain:{
        flexDirection: 'row',
        flex: 1,
        padding: 15,
        paddingTop: 7,
        paddingBottom: 7
    },
    v_review_tab1: {
        flex: 1,
    },
    v_review_tab2: {
        flex: 1,
    },
    v_block_price: {
        flex: 1,
        padding: 15,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#85af48',
        borderColor: '#5d7b32',
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    v_logo_contain: {
        paddingTop: 7,
        paddingBottom: 7,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    v_logo_img_contain: {
        width: 100,
        height: 105,
        alignItems: 'center',
    },
    v_logo_img: {
        width: 75,
        height: 75,
        alignItems: 'center',
    },
    img_logo: {
        flex: 1,
        resizeMode: 'contain',
    },
    v_text_logo: {
        height: 30,
        alignItems: 'center',
    },
    t_logo: {
        fontFamily: 'Kanit-Regular',
        fontSize: 14,
        fontWeight: '100',
    },
    v_block_standard: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#fff',
    },
    v_block_information: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#4d9be4',
    },
    v_t_standard: {
        flex: 1,
        padding: 15,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#d2e8fc',
    },
    v_block_note: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#f7244c',
    },
    v_t_note: {
        flex: 1,
        padding: 15,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#fccfd7',
    },
    v_block_title: {
        flex: 9,
    },
    v_block_icon: {
        flex: 1.2,
    }
});