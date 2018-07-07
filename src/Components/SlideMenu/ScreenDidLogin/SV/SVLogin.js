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
export default class SVLogin extends Component {
    constructor(props){
        super(props);
        // GetListInfo().then(res=> console.log(res));
    }

    gotoInfo() {
        const { navigation } = this.props;
        navigation.navigate('Info', navigation);
    }
    gotoPoint() {
        const { navigation } = this.props;
        navigation.navigate('Point', navigation);
    }
    gotoSchedule() {
        const { navigation } = this.props;
        navigation.navigate('Schedule', navigation);
    }
    gotoSeach() {
        const { navigation } = this.props;
        navigation.navigate('Seach', navigation);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <TouchableOpacity onPress={() => this.gotoInfo()} style={stylesview.Buttonlogin}>
                    <Text style={{ fontSize: 15 }}>Thông Tin</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.gotoPoint()} style={stylesview.Buttonlogin}>
                    <Text style={{ fontSize: 15 }}>Bảng Điểm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.gotoSchedule()} style={stylesview.Buttonlogin}>
                    <Text style={{ fontSize: 15 }}>Thời Khoá Biểu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => SetToken('@Token','').then(() => {
                    navigation.navigate('SlideMenu')
                    SetListInfo([])
                })} style={stylesview.Buttonlogin}>
                    <Text style={{ fontSize: 15 }}>Đăng xuất</Text>
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
