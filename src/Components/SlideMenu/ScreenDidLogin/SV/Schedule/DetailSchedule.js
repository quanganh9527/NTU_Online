import React, { Component } from 'react';
import {
    ActivityIndicator, View, Text, StyleSheet, AsyncStorage, FlatList, TouchableOpacity, Alert
} from 'react-native';
import width from '../../../../../Styles/GetScreen';
import Header from '../../../../Home/Header/Header';
import Back from '../../../../../media/icon/Back.png';
import GetListInfo from '../../../../../AsyncStorage/GetListInfo';
import { connect } from 'react-redux';
import height from '../../../../../Styles/GetScreen';
import { Platform } from 'react-native';
import FetchArray from '../../../../../Api/FetchArray';
const urlpoint = 'http://59d2419a0ecfcb0011fd4c2b.mockapi.io/ThoiKhoaBieu/';
import GetToken from '../../../../../AsyncStorage/GetToken';
import LoadingView from 'react-native-loading-view';
export default class DetailSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        console.log("item là: " + this.props.navigation.getParam('c'));
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ marginTop: Platform.OS === 'ios' ? height / 20 : 0, flex: 1, backgroundColor: 'white' }}>
                <Header image={Back} text={navigation.getParam('f')} navigation={navigation} />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ fontWeight: '900' }}>Tên Giáo Viên: {navigation.getParam('a')}</Text>
                    <Text style={{ fontWeight: '900' }}>Lớp Học Phần: {navigation.getParam('b')}</Text>
                    <Text style={{ fontWeight: '900' }}>Nhóm Học Phần: {navigation.getParam('c')}</Text>
                    <Text style={{ fontWeight: '900' }}>Ngày Bắt Đầu: {navigation.getParam('d')}</Text>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        margin: 10,
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 1,
        backgroundColor: 'blue',
    },
    item: {
        flexDirection: 'row'
    }
});