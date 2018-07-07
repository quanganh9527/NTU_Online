import React, { Component } from 'react';
import {
    View, Text, Image, TextInput, TouchableOpacity, Alert, AsyncStorage
} from 'react-native';
import stylesicon from '../../Styles/StyleIcon';
import IconNTU from '../../media/icon/20070929001755!NTUlogo.gif';
import styleview from '../../Styles/StyleView';
import { connect } from 'react-redux';
import Checkuser from '../../redux/Action/Checkuser';
import TestUser from './TestUser';
const url = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user";
const urlinfo = 'http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user/';
import { fetchUser } from '../../redux/CreateAction/ActionCheckUser';
import SetToken from '../../AsyncStorage/SetToken';
import SetListInfo from '../../AsyncStorage/SetListInfo';
import FetchArray from '../../Api/FetchArray';
const urlpoint = 'http://59d2419a0ecfcb0011fd4c2b.mockapi.io/ListPoint/';
class ScreenLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            arrUser: [],
            arrpoint: [],
        };
        FetchArray(url).then(res => this.setState({ arrUser: res }));
    }
    gotoBack() {
        const { navigation } = this.props;
        navigation.goBack();
    }
    LoginSuccess(id) {
        SetToken('@idinfo', id);
        FetchArray(urlpoint+id).then(res => AsyncStorage.setItem('@listpointt',JSON.stringify(res)));
        fetch(urlpoint + id).then(res => {
            return JSON.parse(res._bodyInit);
        }).
            then(res => {
                const arrname = [];
                const arrpoint = [];
                const arrtc = [];
                for (let i of res.listpoint){
                    arrname.push(i.name);
                    arrpoint.push(i.point);
                    arrtc.push(i.tc);
                }
                    return { arrname, arrpoint, arrtc };
            })
            .then(res => {
                AsyncStorage.setItem('@pointlist', JSON.stringify(res.arrpoint));
                AsyncStorage.setItem('@namelist', JSON.stringify(res.arrname));
                AsyncStorage.setItem('@tclist', JSON.stringify(res.arrtc));
                
            });
    }

    testId(user, pass) {
        const { arrUser } = this.state;
        const { navigation } = this.props;
        for (let i of arrUser) {
            if (i.username === user) {
                if (i.password === pass) {
                    const lists = [i.username, i.password, i.id, i.gioitinh, i.permission, i.chuyenghanh, i.noisinh, i.ngaysinh, i.lop, i.hoten];
                    SetToken('@Token', i.permission);
                    navigation.navigate('SlideMenu');
                    AsyncStorage.setItem('@listInfo', JSON.stringify(lists));
                    return this.LoginSuccess(i.id);
                }
            }
        }
        return Alert.alert(
            'Error',
            'Incorrect password or username',
            [
                { text: 'OK' },
            ],
            { cancelable: false }
        );
    }
    render() {
        const { user, pass } = this.state;
        return (
            <View style={styleview.fullview}>
                <Image style={stylesicon.logo} source={IconNTU} />
                <View>
                    <TextInput
                        placeholder='Tên Đăng Nhập'
                        onFocus={(e) => true}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        onChangeText={text => this.setState({ user: text })}
                        style={[styleview.inputlogin, {paddingLeft:20, borderColor: 'white' }]} />
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Mật Khẩu'
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        onChangeText={text => this.setState({ pass: text })}
                        style={[styleview.inputlogin, {paddingLeft:20, borderColor: 'white' }]} />
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.testId(user, pass)} style={styleview.Buttonlogin}>
                        <Text style={{ fontSize: 15 }}>Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>
                <Text>NTU Online Version 1.0</Text>
            </View>
        );
    }
}
function mapStatetoprops(state) {
    return { myUser: state.Checkuser };
}
export default connect(mapStatetoprops, { fetchUser })(ScreenLogin);