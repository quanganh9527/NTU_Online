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
import Back from '../../media/icon/Back.png';
const url = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/post/";
// /content
export default class DetailPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrPost: [],
            show: true,

        }
    }
    componentDidMount() {
        FetchArray(url + this.props.navigation.getParam('item') + '/content/' + this.props.navigation.getParam('item')).then(res => {
            this.setState({ arrPost: res, show: false });
        })
    }
    render() {
        const { show, arrPost } = this.state;
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? height / 20 : 0, backgroundColor: '#EBEBEB' }}>
                <Header image={Back} text="" navigation={navigation} />
                <LoadingView style={{ backgroundColor: 'white' }} overlay='true' size='large' loading={show}>

                    <FlatList
                        data={arrPost.listpost}
                        renderItem={({ item }) => (
                            <View style={styles.itempost}>
                                <Text style={{ fontSize: height / 25 }}>{item.content}</Text>
                                <View style={{ alignContent: 'center' }}>
                                    <Image style={styles.hinh} source={{ uri: item.imageurl }} />
                                    <Text>{item.subimage}</Text>
                                </View>
                            </View>
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
        borderColor: '#EBEBEB',
        borderWidth: 3,
        padding: 5,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    item: {
        flexDirection: 'row'
    },
    hinh: {
        flex: 1,
        height: height / 1.5,
    }
});