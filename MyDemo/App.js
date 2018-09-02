/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Two from './src/Two';
import One from './src/One';
import Three from './src/Three';
import Four from './src/Four';
import Five from './src/Five';
import SearchDetail from './Detaill/SearchDetail';
import WebDetail from './Detaill/WebDetail';


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        // 只要切换tab,push,pop,这里一定走
                        console.log(prevState)
                        console.log(currentState)

                    }
                }
            />
        );
    }

    componentDidMount() {
        console.disableYellowBox = true;
    }
}


const Tab = TabNavigator({
        One: {
            screen: One,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ?  require('./image/icons/homepage_fill.png') : require('./image/icons/homepage.png')}
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },
        Two: {
            screen: Two,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '消息',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ?  require('./image/icons/message_fill.png') : require('./image/icons/message.png')}
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },
        Three: {
            screen: Three,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '应用',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ?  require('./image/icons/manage_fill.png') : require('./image/icons/manage.png')}
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },
        Four: {
            screen: Four,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '通讯录',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ?  require('./image/icons/businesscard_fill.png') : require('./image/icons/businesscard.png')}
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },
        Five: {
            screen: Five,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused  ? require('./image/icons/people_fill.png') : require('./image/icons/people.png')}
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },

    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: Platform.OS === 'ios' ? false : true,
        animationEnabled: Platform.OS === 'ios' ? false : true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#979797',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },

    });

const Navigator = StackNavigator(
    {
    Tab: {
        screen: Tab,
    },
    SearchDetail:{
        screen:SearchDetail,
    },
        WebDetail:{
         screen:WebDetail,
        }
    },
    {
        //隐藏导航栏
        navigationOptions: {
            header: null,
        }
    }

);


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
