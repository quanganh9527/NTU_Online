import React, { Component } from 'react';
import {
    View, Text, StyleSheet, AsyncStorage
} from 'react-native';
import width from '../../../../../Styles/GetScreen';
import Header from '../../../../Home/Header/Header';
import Back from '../../../../../media/icon/Back.png';
import GetListInfo from '../../../../../AsyncStorage/GetListInfo';
import { connect } from 'react-redux';
import height from '../../../../../Styles/GetScreen';
import { Platform } from 'react-native';
import FetchArray from '../../../../../Api/FetchArray';
import GetToken from '../../../../../AsyncStorage/GetToken';
class InfoStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoten: '', lop: '', ngaysinh: '', noisinh: '', chuyennghanh: '', gioitinh: true, MSSV: '',
            arr: [],
            permissiion: '',
        };
        GetToken('@Token').then(res => this.setState({ permissiion: res }));
        AsyncStorage.getItem('@listInfo').then(res => JSON.parse(res)).then(res => {
            this.setState({ arr: res })
        });
    }
    componentDidMount() {
    }
    render() {
        const { navigation } = this.props;
        const { hoten, lop, ngaysinh, noisinh, chuyennghanh, gioitinh, MSSV, arr, permissiion } = this.state;
        const show = permissiion == 'sv' ?
            <View style={[styles.item,{backgroundColor: '#EBEBEB',}]}>
                <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Lớp</Text>
                <Text style={{ flex: 1.5, fontSize: width / 20 }}>{arr[8]}</Text>
            </View>: null;
        return (
            <View style={{ marginTop: Platform.OS === 'ios' ? height / 20 : 0, flex: 1, backgroundColor: 'white' }}>
                <Header image={Back} text="Thông Tin" navigation={navigation} />
                <View style={{ }}>
                    <View style={[styles.item,{backgroundColor: '#EBEBEB',} ]}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Họ Tên: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{arr[9]}</Text>
                    </View>
                    <View style={[styles.item, ]}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>{permissiion === 'sv' ? 'MSSV: ' : 'MSGV: '}</Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{arr[0]}</Text>
                    </View>
                    {show}
                    <View style={styles.item}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Ngày sinh: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{arr[7]}</Text>
                    </View>
                    <View style={[styles.item, {backgroundColor: '#EBEBEB',}]}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>{permissiion === 'sv' ? 'Chuyên nghành: ' : 'Chức danh: '}</Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{arr[5]}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Giới tính: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{arr[3]}</Text>
                    </View>
                    <View style={[styles.item,{backgroundColor: '#EBEBEB',} ]}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Nơi sinh: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{arr[6]}</Text>
                    </View>
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
        flexDirection: 'row',
        // borderBottomWidth:0.5,
        alignItems:'center',
        marginLeft:5,
        marginTop:5,
        marginRight:5,
        height:height/8,
        // borderBottomColor:'#EBEBEB',
    },
});
function mapstate(state) {
    return {
        mystate: state.Checkuser,
    };
}
export default connect(mapstate)(InfoStudent);