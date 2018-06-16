import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import height from '../../../../Styles/GetScreen';
import width from '../../../../Styles/GetScreen';
import stylesview from '../../../../Styles/StyleView';
import SetToken from '../../../../AsyncStorage/SetToken';
import SetListInfo from '../../../../AsyncStorage/SetListInfo';
import GetListInfo from '../../../../AsyncStorage/GetListInfo';
import InfoManage from './InfoManage';
export default class GVLogin extends Component {
    state = {}

    gotoAddInfo() {
        const { navigation } = this.props;
        navigation.navigate('InfoManage', navigation);
    }
    gotoPoint() {
        const { navigation } = this.props;
        navigation.navigate('PointManage', navigation);
    }
    gotoInfo(){
        const {navigation} = this.props;
        navigation.navigate('Info',navigation);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <TouchableOpacity onPress={() => this.gotoAddInfo()} style={stylesview.Buttonlogin}>
                    <Text style={{ fontSize: 15 }}>Quản Lý Sinh Viên</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.gotoPoint()} style={stylesview.Buttonlogin}>
                    <Text style={{ fontSize: 15 }}>Quản Lý Điểm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.gotoInfo()} style={stylesview.Buttonlogin}>
                    <Text style={{ fontSize: 15 }}>Thông Tin Giáo Viên</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => SetToken('@Token','').then(() => {
                    navigation.navigate('SlideMenu')
                    SetListInfo([])
                })} style={stylesview.Buttonlogin} >
                    <Text style={{ fontSize: 15 }}>Đăng Xuất</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        height: height / 4,
        width: width / 4
    }
});