import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Platform, TextInput, StyleSheet, Image, Alert, FlatList
} from 'react-native';
import Header from './Header/Header';
import height from '../../Styles/GetScreen';
import menuon from '../../media/icon/Menuon.png';
import styleview from '../../Styles/StyleView';
import stylesicon from '../../Styles/StyleIcon';
import width from '../../Styles/GetScreen';
import LoadingView from 'react-native-loading-view';
import FetchArray from '../../Api/FetchArray';
import PTRView from 'react-native-pull-to-refresh';
const url = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/post";
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrPost: [],
            show: true,
        }
    }
    open() {
        const { open } = this.props;
        open();
    }
    componentDidMount() {
        FetchArray(url).then(res => {
            this.setState({ arrPost: res, show: false });
        })
    }
    gotoDetail(item) {
        const { navigation } = this.props;
        navigation.navigate('DetailPost', {item,navigation});
    }
    render() {
        const { show, arrPost } = this.state;
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? height / 20 : 0, backgroundColor: '#EBEBEB' }}>
                <Header image={menuon} text="Trang Chủ" open={this.open.bind(this)} />
                <LoadingView style={{backgroundColor:'white'}} overlay='true' size='large' loading={show}>
                        <FlatList
                        style={{ flex: 1 }}
                        data={arrPost}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>this.gotoDetail(item.id)}>
                                <View style={styles.itempost}>
                                    <Text style={{fontWeight:'bold',fontSize:height/22}}>{item.title}</Text>
                                    <Text>{item.created_date}</Text>
                                    <Image style={styles.hinh} source={{uri:item.image}}/>
                                </View>
                            </TouchableOpacity>
                        )} 
                        keyExtractor={(item, index) => index.toString()}
                    />
                </LoadingView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    itempost: {
        borderColor:'#EBEBEB',
        padding:5,
        marginTop:width/35,
        marginLeft:width/33,
        marginRight:width/33,
        backgroundColor:'white',
        height: height/1.5,
    },
    item: {
        flexDirection: 'row'
    },
    hinh:{
        flex:1
    }
});