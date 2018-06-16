import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, TextInput, ToastAndroid, Alert
} from 'react-native';
import height from '../../../../Styles/GetScreen';
import width from '../../../../Styles/GetScreen';
import styleview from '../../../../Styles/StyleView';
import PostUser from '../../../../Api/PostUser';
import PostPoint from '../../../../Api/PostPoint';
export default class AddInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            gt: '',
            cn: '',
            noisinh: '',
            ngaysinh: '',
            lop: '',
            ht: '',

        };
    }
    ShowAlert() {
        const { user, gt, cn, noisinh, ngaysinh, lop, ht } = this.state;
        return Alert.alert(
            'Thông báo',
            'Bạn có chắc muốn thêm sinh viên ' + this.state.ht,
            [
                {
                    text: 'Đồng ý', onPress: () => {
                        ToastAndroid.show('Thêm thành công!', ToastAndroid.SHORT);
                        return PostUser('1', user, 'sv', gt, cn, noisinh, ngaysinh, lop, ht).then(() => {
                            PostPoint([]);
                            this.setState({
                                user: '',
                                gt: '',
                                cn: '',
                                noisinh: '',
                                ngaysinh: '',
                                lop: '',
                                ht: '',
                            })
                        });
                    }
                },
                { text: 'Huỷ' },
            ],
            { cancelable: false }
        )
    }
    ShowAlert2(text) {
        Alert.alert(
            'Thông báo',
            text,
            [
                { text: 'Đồng ý' },
            ],
            { cancelable: false }
        )
    }
    clickcancel() {
        this.props.navigation.goBack()
        this.setState({
            user: '',
            gt: '',
            cn: '',
            noisinh: '',
            ngaysinh: '',
            lop: '',
            ht: '',
        })
    }
    render() {
        const { user, gt, cn, noisinh, ngaysinh, lop, ht } = this.state;
        const { navigation } = this.props;
        return (
            <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', marginTop: 20 }}>
                <TextInput style={styleview.inputlogin}
                    onChangeText={(text) => this.setState({ ht: text })}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    value={ht}
                    placeholder='Họ Tên'
                />
                <TextInput style={styleview.inputlogin}
                    onChangeText={(text) => this.setState({ user: text })}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    value={user}
                    placeholder='MSSV'
                />
                <TextInput style={styleview.inputlogin}
                    onChangeText={(text) => this.setState({ noisinh: text })}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    value={noisinh}
                    placeholder='Nơi Sinh'
                />
                <TextInput style={styleview.inputlogin}
                    value={gt}
                    onChangeText={(text) => this.setState({ gt: text })}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    placeholder='Giới Tính'
                />
                <TextInput style={styleview.inputlogin}
                    value={ngaysinh}
                    onChangeText={(text) => this.setState({ ngaysinh: text })}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    placeholder=' Ngày Sinh'
                />
                <TextInput style={styleview.inputlogin}
                    onChangeText={(text) => this.setState({ lop: text })}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    value={lop}
                    placeholder='Lớp'
                />
                <TextInput style={styleview.inputlogin}
                    onChangeText={(text) => this.setState({ cn: text })}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    value={cn}
                    placeholder='Chuyên Nghành'
                />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[styleview.Buttonlogin, {backgroundColor:'#00CCFF', borderColor: '#00CCFF', borderTopRightRadius: 0, borderBottomRightRadius: 0, width: width / 3, height: height / 9 }]}
                        onPress={() => {
                            if (user && lop && ht && gt && noisinh && ngaysinh && cn !== null) {
                                return this.ShowAlert();
                            }
                            ShowAlert2('Lỗi Nhập !');
                        }}
                    >
                        <Text>Thêm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.clickcancel();
                    }} style={[styleview.Buttonlogin, {backgroundColor:'#00CCFF', borderColor: '#00CCFF', marginLeft: 2, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, width: width / 3, height: height / 9 }]}>
                        <Text>Huỷ</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}