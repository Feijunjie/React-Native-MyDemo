import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    Button,
    Alert, NativeModules, InteractionManager,
    Linking, AppRegistry,
    Keyboard,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import {SearchInput} from 'teaset';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const { width,height } = Dimensions.get('window')

var myPush = NativeModules.PushNative;

type Props = {};
export default class Two extends Component<Props> {

    constructor(props) {
      super(props);
      this.state = {
          value : '请输入企业名、人名等关键字'
      };
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{backgroundColor:'rgba(58, 132, 243, 1.0)',width:width,height:64,flexDirection: 'row'}}>
                    <View style={styles.textViewStyle}>
                        <Image source={require('../image/home_search.png')} style={{height: 15, width: 15, marginLeft:15}}/>
                        <TextInput
                                   keyboardType='web-search'
                                   placeholder = '请输入企业名、人名等关键字'
                                   style={styles.textInputStyle}
                                   onChangeText={(text) => {
                                       this.setState({value: text});
                                   }}
                                   onSubmitEditing={(event) => {
                                       // Alert.alert(this.state.value);
                                   }}
                        />
                    </View>

                    <View style={{marginRight: 5, alignItems: 'center',flexDirection:'row'}}>
                        <Button onPress={() => this.props.navigation.goBack()}
                                title={'取消'}
                                color={'white'}
                        />
                    </View>
                </View>

                <Text style={styles.contentStyle}>热门搜索</Text>
                <Text style={styles.contentStyle} onPress={() => this.linking('tel:' + '18756921531')}>拨打电话</Text>
            </View>



        );
    }

    //拨打电话
    linking=(url)=>{

        console.log(url);

        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));

    }

}

// 样式
var styles = StyleSheet.create({
    container: {
        flex:1
    },

    textInputStyle: {
        // 设置尺寸
        flex:1,
        marginLeft:2,
        // 设置背景颜色
        backgroundColor:'rgba(93, 158, 245, 1.0)',
        marginRight:5,
        color:'white',
    },
    textViewStyle: {
        marginRight:10,
        flex:1,
        marginTop:15,
        marginLeft:10,
        marginBottom:10,
        // 设置背景颜色
        backgroundColor:'rgba(93, 158, 245, 1.0)',
        flexDirection:'row',
        alignItems: 'center',
    },
    contentStyle: {
        marginTop: 15,marginLeft:10,fontSize:15,
    }
});
