import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class Two extends Component<Props> {
    ItemSeparatorComponent(){
        return <View style={{height:20,backgroundColor:'red'}}/>
    }

    _header = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是头部</Text>;
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                data = {[
                    {   key : 'junjie'
                    },
                    {   key : 'nannn'
                    },
                    {   key : 'yuchao'
                    },
                    {   key : 'jingyu'
                    },
                    {   key : 'huihui'
                    },
                    {   key : 'lijun'
                    },
                    {   key : 'aolin'
                    },
                ]}

                renderItem={({item}) => <View style={{backgroundColor :'yellow', height: 100}}></View>}
                ListHeaderComponent={this._header}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
                />
            </View>



        );
    }xs
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
        height: 30,
    },
})
