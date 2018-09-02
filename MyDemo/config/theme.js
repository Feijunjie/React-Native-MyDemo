import {PixelRatio, Dimensions, Platform} from 'react-native';


const globalTextColor = '#000';

export default {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    themeColor: 'rgb(22,131,251)',
    pageBackgroundColor: '#f4f4f4',
    grayColor: '#c4c4c4',
    btnActiveOpacity: 0.7,
    actionBar: {
        height: (Platform.OS === 'android') ? 49 : 69,
        backgroundColor: 'rgb(22,131,251)',
        fontSize: 16,
        fontColor: 'white'
    },
    text: {
        color: globalTextColor,
        fontSize: 15
    },
    scrollView: {
        fontSize: 15,
        underlineStyle: {
            backgroundColor: 'white'
        }
    }
};
