import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, TextInput, Image, StyleSheet, FlatList, Alert, ToastAndroid
} from 'react-native';
import FetchArray from '../../../../../Api/FetchArray';
import show1 from '../../../../../media/icon/Info/show1.png';
import styleview from '../../../../../Styles/StyleView';
import stylesicon from '../../../../../Styles/StyleIcon';
import height from '../../../../../Styles/GetScreen';
import LoadingView from 'react-native-loading-view';
import width from '../../../../../Styles/GetScreen';
import PostPoint from '../../../../../Api/PostPoint';
import PutPoint from '../../../../../Api/PutPoint';
const url = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user";
import deletee from '../../../../../media/icon/Info/delete.png';
const urlpoint = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/ListPoint/";
const points = {
    TenMH: '',
    Diem: '',
    tc: ''
}
export default class AddPoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUser: [],
            input: '',
            selectarray: [],
            arrPoint: [],
            pointt: '',
            tcc: '',
            namee: '',
            idd: '',
            arrADD: [],
            show: false,
        };

    }
    ShowAlert(text) {
        Alert.alert(
            'Thông báo',
            text,
            [
                { text: 'Đồng ý' },
            ],
            { cancelable: false }
        )
    }
    componentDidMount() {
        FetchArray(url).then(res => {
            this.setState({ arrUser: res });
        })
    }
    clickOke() {
        const { pointt, tcc, namee, arrPoint } = this.state;
        if (tcc !== '' && pointt !== '' && namee !== '') {
            arrPoint.push(points = { TenMH: namee, Diem: pointt, tc: tcc, id: arrPoint.length !== null ? arrPoint.length + 1 : 1 });
            this.setState({
                namee: '', tcc: '', pointt: ''
            })
        }

    }
    checkMSSV() {
        this.setState({show:true});
        for (i of this.state.arrUser) {
            if (this.state.input === '')
                return this.ShowAlert('Mời Nhập MSSV');
            else if (this.state.input === i.username) {
                this.setState({ idd: i.id });
                return FetchArray(urlpoint + i.id).then(res => {
                    return this.setState({ arrPoint: res.listpoint,show: false });
                });
            }
        }
        this.ShowAlert('MSSV không tồn tại');
    }
    click() {
        const { arrPoint, idd } = this.state;
        Alert.alert(
            'Thông Báo',
            'Bạn muốn lưu những thông tin trên',
            [
                {
                    text: 'Xác Nhận', onPress: () => {
                        PutPoint(idd, arrPoint);
                        ToastAndroid.show('Thêm thành công!', ToastAndroid.SHORT);
                    }
                },
                {
                    text: 'Huỷ'
                }
            ],
            { cancelable: false }
        );
    }
    clickdelte(item) {
        console.log(item.id);
        this.setState({
            arrPoint: this.state.arrPoint.splice(item.id - 1, 1)
        })
    }
    render() {
        const { arrPoint, show } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ marginLeft: 10, marginRight: 10, flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                        <TextInput
                            style={[styleview.inputlogin, { flex: 1.5 }]}
                            onChangeText={(text) => this.setState({ input: text })}
                            maxLength={9}
                            underlineColorAndroid={'rgba(0,0,0,0)'}
                            placeholder='Nhập MSSV'
                        />
                        <TouchableOpacity style={[{ flex: 1, marginLeft: 20 }]} onPress={() => this.checkMSSV()}>
                            <Image source={show1} style={{ height: height / 6, width: width / 6 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1.8, alignItems: 'center', flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={[styleview.inputlogin, { flex: 2 }]}
                                onChangeText={(text) => this.setState({ namee: text })}
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                                value={this.state.namee}
                                placeholder='Tên Môn Học'
                            />
                            <TextInput
                                style={[styleview.inputlogin, { flex: 1 }]}
                                onChangeText={(text) => this.setState({ tcc: text })}
                                maxLength={9}
                                value={this.state.tcc}
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                                placeholder='Tín Chỉ'
                            />
                            <TextInput
                                style={[styleview.inputlogin, { flex: 1 }]}
                                onChangeText={(text) => this.setState({ pointt: text })}
                                maxLength={9}
                                value={this.state.pointt}
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                                placeholder='Điểm'
                            />
                        </View>
                        <TouchableOpacity style={[styleview.Buttonlogin, { backgroundColor: '#6A5ACD' }]} onPress={() => this.clickOke()}>
                            <Text style={{color:'white',fontWeight: 'bold',}}>Thêm</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <LoadingView overlay='true' size='large' loading={show}>
                    <FlatList
                        style={{ flex: 10 }}
                        data={arrPoint}
                        renderItem={({ item }) => (
                            <View>
                                {
                                    item.TenMH === '' ?
                                        <View>
                                            <View style={styles.tieude}>
                                                <Text style={styles.textt}>{item.hk}</Text>
                                            </View>
                                            <View style={[styles.item, { alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#1C5B96' }]}>
                                                <Text style={{ flex: 2.5, fontSize: width / 20, fontWeight: 'bold', color: 'white' }}>Tên Môn Học</Text>
                                                <View style={{ flex: 1, alignItems: 'center' }}>
                                                    <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold', color: 'white' }}>Tín Chỉ</Text>
                                                </View>
                                                <View style={{ flex: 1, alignItems: 'center' }}>
                                                    <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold', color: 'white' }}>Điểm</Text>
                                                </View>
                                                <View style={{ flex: 0.2 }}></View>
                                            </View>
                                        </View>
                                        :
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={{ flex: 2.5, flexDirection: 'column' }}>
                                                <Text >{item.TenMH}</Text>
                                            </View>
                                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                                                <Text>{item.tc}</Text>
                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                                <Text >{item.Diem}</Text>
                                            </View>
                                            <TouchableOpacity onPress={() => {
                                                var a = [];
                                                for (let i of arrPoint) {
                                                    if (i.id !== item.id)
                                                        a.push(i);
                                                }
                                                return this.setState({ arrPoint: a });

                                            }}>
                                                <Image
                                                    style={{ flex: 0.2, height: height / 14, width: width / 14 }}
                                                    source={deletee} />
                                            </TouchableOpacity>
                                        </View>
                                }
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </LoadingView>
                <View style={{ flex: 0.5, alignItems: 'center' }}>
                    <TouchableOpacity style={[styleview.Buttonlogin, { backgroundColor: '#6A5ACD' }]} onPress={() => this.click()}>
                        <Text style={{color:'white',fontWeight: 'bold',}}>Cập Nhập</Text>
                    </TouchableOpacity>
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
    },
    tieude: {
        backgroundColor: '#1C5B96',
        borderWidth: 4,
        borderColor: 'white',
        padding: 2,
        alignItems: 'center',
    },
    textt: {
        // borderWidth: 900,
        color: 'white',
        fontWeight: 'bold',
    }
});