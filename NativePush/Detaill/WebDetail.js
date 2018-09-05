import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, Dimensions
} from 'react-native';
import WebView from 'WebView';

const { width,height } = Dimensions.get('window')

export default class Two extends Component<Props> {


    render() {
        return (
            <View style={{width:'100%',height:'100%'}}>
                <View style={{height: 64, width:width,backgroundColor:'rgba(58, 132, 243, 1.0)'}}></View>
                <WebView
                    source={{uri:this.props.navigation.state.params.key}}
                    style={{width:width}}
                />
            </View>


        );
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params)
    }
}
