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
    Alert,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const { width,height } = Dimensions.get('window')

type Props = {};
export default class Two extends Component<Props> {


    render() {
        return (
            <View style={{flex:1}}>
                <View style={{backgroundColor:'rgba(58, 132, 243, 1.0)',width:width,height:64,flexDirection: 'row'}}>
                    <View style={styles.textViewStyle}>
                        <Image source={require('../image/home_search.png')} style={{height: 15, width: 15, marginLeft:15}}/>
                        <TextInput style={styles.textInputStyle} placeholder='请输入企业名、人名等关键字'></TextInput>
                    </View>

                    <View style={{marginRight: 5, alignItems: 'center',flexDirection:'row'}}>
                        <Button onPress={() => this.props.navigation.goBack()}
                                title={'取消'}
                                color={'white'}
                        />
                    </View>
                </View>

                <Text style={{marginTop: 15,marginLeft:10,fontSize:15}}>热门搜索</Text>
            </View>



        );
    }
}

// 样式
var styles = StyleSheet.create({
    container: {
        flex:1
    },

    textInputStyle: {
        // 设置尺寸
        // flex:1,
        marginLeft:5,
        // 设置背景颜色
        backgroundColor:'rgba(93, 158, 245, 1.0)',
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
    }
});
