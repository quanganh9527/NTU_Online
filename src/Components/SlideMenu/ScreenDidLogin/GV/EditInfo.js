import React, { Component } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, Image, ToastAndroid
} from 'react-native';
import height from '../../../../Styles/GetScreen';
import width from '../../../../Styles/GetScreen';
import styleview from '../../../../Styles/StyleView';
import show1 from '../../../../media/icon/Info/show1.png';
import FetchArray from '../../../../Api/FetchArray';
import PutCN from '../../../../Api/PutUser/PutCN';
import PutGT from '../../../../Api/PutUser/PutGT';
import PutHoten from '../../../../Api/PutUser/PutHoten';
import PutLop from '../../../../Api/PutUser/PutLop';
import PutNgaySinh from '../../../../Api/PutUser/PutNgaySinh';
import PutPass from '../../../../Api/PutUser/PutPass';
import PutUsername from '../../../../Api/PutUser/PutUsername';
import PutNS from '../../../../Api/PutUser/PutNS';
const url = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user";
export default class EditInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            arrUser: [],
            selectarray: [],
            pass: '',
            user: '',
            per: '',
            gt: '',
            cn: '',
            noisinh: '',
            ngaysinh: '',
            lop: '',
            ht: '',
        };
    }
    componentDidMount() {
        FetchArray(url).then(res => this.setState({ arrUser: res }));
    }
    checkMSSV() {
        if (this.state.input !== '')
            for (i of this.state.arrUser) {
                if (this.state.input === i.username) {
                    return this.setState({ selectarray: i });
                }
            }
        return ToastAndroid.show('Mời Nhập lại MSSV !', ToastAndroid.SHORT);
    }
    checkPut() {
        const { pass, user, gt, cn, noisinh, ngaysinh, lop, ht, selectarray } = this.state;
        this.setState({
            input: '',
            selectarray: [],
            pass: '',
            user: '',
            per: '',
            gt: '',
            cn: '',
            noisinh: '',
            ngaysinh: '',
            lop: '',
            ht: '',
        });
        if (this.state.input !== '') {
            ToastAndroid.show('Sửa thành công!', ToastAndroid.SHORT);
            return FetchArray(url).then(() => {
                if (pass !== '')
                    PutPass(selectarray.id, pass)
            }).
                then(() => {
                    if (user !== '')
                        PutUsername(selectarray.id, user)
                }).then(() => {
                    if (noisinh !== '')
                        PutNS(selectarray.id, noisinh)
                }).then(() => {
                    if (gt !== '')
                        PutGT(selectarray.id, gt)
                }).then(() => {
                    if (ngaysinh !== '')
                        PutNgaySinh(selectarray.id, ngaysinh)
                }).then(() => {
                    if (cn !== '')
                        PutCN(selectarray.id, cn)
                }).then(() => {
                    if (lop !== '')
                        PutLop(selectarray.id, lop)
                }).then(() => {
                    if (ht !== '')
                        PutHoten(selectarray.id, ht)
                }).then(() => { this.setState({ input: '', selectarray: [] }) });
            // return PutUser(this.state.selectarray.id, pass, user, gt, cn, noisinh, ngaysinh, lop, ht).then(() => this.setState({ selectarray: [] }));
        }
        ToastAndroid.show('Mời Nhập MSSV !', ToastAndroid.SHORT);
    }
    check() {
        const { pass, user, gt, cn, noisinh, ngaysinh, lop, ht, selectarray } = this.state;
        this.setState({
            input: '',
            selectarray: [],
            pass: '',
            user: '',
            per: '',
            gt: '',
            cn: '',
            noisinh: '',
            ngaysinh: '',
            lop: '',
            ht: '',
        });
    }
    render() {
        const { pass, user, gt, cn, noisinh, ngaysinh, lop, ht, input, selectarray } = this.state;
        return (
            <View style={{ backgroundColor: 'white', flex: 1,alignItems: 'flex-start', marginLeft: 5, marginRight: 5 }}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <TextInput
                        style={[styleview.inputlogin, { flex: 1.5 }]}
                        onChangeText={(text) => this.setState({ input: text })}
                        maxLength={9}
                        value={input}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        placeholder='Nhập MSSV'
                    />
                    <TouchableOpacity style={[{ flex: 1, marginLeft: 20 }]} onPress={() => this.checkMSSV()}>
                        <Image source={show1} style={{ height: height / 6, width: width / 6 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ flex: 1, fontWeight: 'bold', fontSize: height / 20 }}>Họ Tên</Text>
                    <TextInput style={[{ flex: 2 }, styleview.inputlogin]}
                        onChangeText={(text) => this.setState({ ht: text })}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        value={ht}
                        placeholder={selectarray.hoten}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ flex: 1, fontWeight: 'bold', fontSize: height / 20 }}>MSSV</Text>
                    <TextInput style={[styleview.inputlogin, { flex: 2, }]}
                        onChangeText={(text) => this.setState({ user: text })}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        maxLength={9}
                        value={user}
                        placeholder={selectarray.username}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ flex: 1, fontWeight: 'bold', fontSize: height / 20 }}>Nơi Sinh</Text>
                    <TextInput style={[styleview.inputlogin, { flex: 2, }]}
                        onChangeText={(text) => this.setState({ noisinh: text })}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        value={noisinh}
                        placeholder={selectarray.noisinh}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ flex: 1, fontWeight: 'bold', fontSize: height / 20 }}>Giới Tính</Text>
                    <TextInput style={[styleview.inputlogin, { flex: 2, }]}
                        value={gt}
                        onChangeText={(text) =>
                            this.setState({ gt: text })
                        }
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        placeholder={selectarray.gioitinh}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ flex: 1, fontWeight: 'bold', fontSize: height / 20 }}>Ngày Sinh</Text>
                    <TextInput style={[styleview.inputlogin, { flex: 2, }]}
                        onChangeText={(text) => this.setState({ ngaysinh: text })}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        value={ngaysinh}
                        placeholder={selectarray.ngaysinh}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ flex: 1, fontWeight: 'bold', fontSize: height / 20 }}>Lớp</Text>
                    <TextInput style={[styleview.inputlogin, { flex: 2, }]}
                        onChangeText={(text) => this.setState({ lop: text })}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        placeholder={selectarray.lop}
                        value={lop}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ flex: 1, fontWeight: 'bold', fontSize: height / 20 }}>Chuyên Nghành</Text>
                    <TextInput style={[styleview.inputlogin, { flex: 2, }]}
                        onChangeText={(text) => this.setState({ cn: text })}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        value={cn}
                        placeholder={selectarray.chuyenghanh}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ flex: 1, fontWeight: 'bold', fontSize: height / 20 }}>Mật Khẩu</Text>
                    <TextInput style={[styleview.inputlogin, { flex: 2, }]}
                        onChangeText={(text) => this.setState({ pass: text })}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        value={pass}
                        placeholder={selectarray.password}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                    <TouchableOpacity style={[styleview.Buttonlogin, { borderColor: '#00CCFF', borderTopRightRadius: 0, borderBottomRightRadius: 0, flex: 1,borderRightColor:'white',backgroundColor:'#00CCFF' }]}
                        onPress={() => {
                            this.checkPut()
                        }}
                    >
                        <Text>Sửa Thông Tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styleview.Buttonlogin, { borderColor: '#00CCFF', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, flex: 1,borderLeftColor:'white',backgroundColor:'#00CCFF',marginLeft:4 }]}
                        onPress={() => {
                            this.check()
                        }}
                    >
                        <Text>Huỷ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}