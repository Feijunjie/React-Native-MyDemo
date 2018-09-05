import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    FlatList,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback,
    NativeEventEmitter,
    NativeModules,
    InteractionManager,
    Alert
} from 'react-native';
import WebViewDetail from '../Detaill/WebDetail';

import Swiper from 'react-native-swiper';
import SearchDetail from '../Detaill/SearchDetail';
import FetchUtils from '../FetchNetWork/FetchUtils';
import Api, {AUTH_HOST} from '../config/api';
import moment from 'moment';
import {
    createStackNavigator,
} from 'react-navigation';

const bannerImages = [
    require('../image/2018/banner_0.jpg'),
    require('../image/2018/banner_1.jpg'),
    require('../image/2018/banner_2.jpg'),
    require('../image/2018/banner_3.jpg'),
    require('../image/2018/banner_4.jpg'),
];

const { width,height } = Dimensions.get('window')

//拿到原生模块
var NativeIOS = NativeModules.PushNative;
//创建自定义事件接口
const NativeManagerEmitter = new NativeEventEmitter(NativeIOS);

const styles = StyleSheet.create({
    wrapper: {

    },
    slide1: {
        width:width,
        height:200,
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        width:width,
        height:200,
        backgroundColor: '#97CAE5',
    },
    slide3: {
        width:width,
        height:200,
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    img: {
        width: width,
        height: 200,
    },
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

// var Push = NativeModules.Push;//这个PushNative就是原生中的PushNative类

// const {PushNative} = NativeModules;

// var nativeModule = NativeModules.PushNative;
var Push = NativeModules.PushNative;


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource:[{},{},{},{}],
        };
    }

    _header = () => {
        return (
            <View style={{backgroundColor:'rgba(58, 132, 243, 1.0)',height:290,justifyContent: 'space-between'}}>
                <View style={{backgroundColor:'red',height:200}}>
                    {/*轮播图*/}
                    <Swiper
                        style={styles.wrapper}
                        horizontal={true}//水平方向，为false可设置为竖直方向
                        paginationStyle={{bottom: 10}}//小圆点的位置：距离底部10px
                        autoplay={true}//自动播放

                        showsButtons={false}
                        autoplayTimeout={4}//每隔4s


                    >
                        <View style={styles.img}>
                            <Image source={bannerImages[0]} style={styles.img} resizeMode="stretch"/>
                        </View>

                        <View style={styles.img}>
                            <Image source={bannerImages[1]} style={styles.img} resizeMode="stretch"/>
                        </View>

                        <View style={styles.img}>
                            <Image source={bannerImages[2]} style={styles.img} resizeMode="stretch"/>
                        </View>

                        <View style={styles.img}>
                            <Image source={bannerImages[3]} style={styles.img} resizeMode="stretch"/>
                        </View>

                        <View style={styles.img}>
                            <Image source={bannerImages[4]} style={styles.img} resizeMode="stretch"/>
                        </View>

                    </Swiper>

                </View>
                {/*搜索*/}
                <TouchableOpacity onPress={()=>this._searchPressBtn()}>
                    <View style={{backgroundColor:'rgba(93, 158, 245, 1.0)', marginBottom: 15, height:45, marginLeft: 20,marginRight: 20,flexDirection:'row',alignItems: 'center'}}>
                        <Image source={require('../image/home_search.png')} style={{height: 15, width: 15, marginLeft:15}}/>
                        <Text style={{fontSize: 15, marginLeft:15,color: 'white'}}>请输入企业名，人名等关键词</Text>

                    </View>
                </TouchableOpacity>
            </View>

        )
    }

    // cell的内容
    _renderItem = (item)=> {
        if (item.index == 1) {
            return (
                <View style={{height:150, justifyContent: 'space-between',backgroundColor:'white',flexDirection:'row',borderTopColor:'black',borderTopWidth: 0.5}}>

                    <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'yellow', marginLeft:10,width:150,height:90,marginTop: 10}}>
                                <Image source={require('../image/apps/news/bid.png')} style={{height:90, width:150}} resizeMode="stretch"/>
                            </View>
                        <Text style={{fontSize:14, marginTop:15}}>招标信息</Text>
                    </View>


                    <View style={{alignItems:'center'}}>
                        <View style={{backgroundColor:'red', marginRight:10,width:150,height:90,marginTop: 10}}>
                            <Image source={require('../image/apps/news/gov.png')} style={{height:90, width:150}} resizeMode="stretch"/>
                        </View>
                        <Text style={{fontSize:14,marginTop:15}}>政府项目</Text>
                    </View>


                </View>
            )
        } else if (item.index == 0 || item.index == 3) {
            return (
                <View style={{backgroundColor:'white', height:40}}>
                    <Text style={{fontSize:14,marginLeft:15,lineHeight:40}}>{item.index == 0 ? '推荐应用' : '推荐阅读'}</Text>
                </View>
            )
        } else if(item.index == 2) {
            return(
                <View style={{backgroundColor:'rgba(233, 233, 238, 1.0)', height:10, width:width}}>

                </View>
            )
        } else {
            return (
                <TouchableWithoutFeedback onPress={() => {
                    this.props.navigation.navigate('WebDetail', {'key' : 'http://details.zqtong.com/article/' + item.item.articleId})
                }}>
                    <View style={{width:width, justifyContent:'space-between',borderTopWidth: 0.5}}>
                        <Image source={{uri: item.item.image}} style={{backgroundColor:'gray',marginLeft:10,marginRight:10,marginTop:10,height:150}}/>
                        <Text numberOfLines={2} style={{color:'black',fontSize:12,marginLeft:15,marginRight:15,marginTop:5}}>{item.item.title}</Text>
                        <View style={{width:width,marginBottom: 5}}>
                            <Text style={{marginLeft:15,width:width,fontSize:11}}>{item.item.readnumber + '人浏览*' + item.item.author + '*' + moment(1535346344109).format("YYYY-MM-DD")}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            )
        }

    }

    _searchPressBtn =() => {
        // Alert.alert('搜索啦...');
        this.props.navigation.navigate('SearchDetail')
    }

    render(){
        return (

            <View style={styles.container}>
                <FlatList
                    data = {this.state.dataSource}
                    renderItem = {this._renderItem}
                    ListHeaderComponent={this._header}

                />
            </View>

        );
    }

    componentDidMount() {
        this.requestWithPostUrl()

        var that = this
        this.listener = NativeManagerEmitter.addListener(
            'notityIosToRN',
            (reminder) => {
                if (reminder == 'jumpDetail') {
                    // that.props.navigation.navigate('SearchDetail')
                    Alert.alert('123');
                    // this._searchPressBtn();
                }  else  {
                    console.log('1234561111 = ' + reminder);
                }
            },
        )
    }

    componentWillUnmount() {
        this.listener && this.listener.remove();
        this.listener = null;
    }

    // Get网络数据请求
    requestWithUrl =() => {
        return(
            fetch('http://ip.taobao.com/service/getIpInfo.php?ip=59.108.23.12', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())//1
                .then((jsonData) => {//2
                    console.log(jsonData);
                })
                .catch((err) => {//2
                    console.error(err);
                })
        )
    }

    //Post 网络请求
    requestWithPostUrl =() => {
        let oldArray = this.state.dataSource;

        FetchUtils.send('get',AUTH_HOST + '/v2/cms/article/new','', jsonDataString => {
            let listArray = jsonDataString.data;
            // console.log(listArray);
            oldArray =oldArray.concat(listArray)
            this.setState({
                dataSource: oldArray
            })
            console.log(this.state.dataSource)
        })

    }




}




