import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules,
} from 'react-native';
var myPush = NativeModules.PushNative;

export default class RNAddNative extends Component {
    render() {


        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    我是RN界面
                </Text>
                <Text style={styles.instructions} onPress={() => {
                    myPush.RNOpenOneVC();
                }}>push</Text>
            </View>
        );
    }
    // btnOnclick =() =>{
    //
    //     InteractionManager.runAfterInteractions(()=> {
    //         Push.RNOpenOneVC('测试');
    //     });
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
