import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, TextInput, Image, StyleSheet, FlatList, Alert, ToastAndroid
} from 'react-native';
import FetchArray from '../../../../../Api/FetchArray';
import show1 from '../../../../../media/icon/Info/show1.png';
import styleview from '../../../../../Styles/StyleView';
import stylesicon from '../../../../../Styles/StyleIcon';
import height from '../../../../../Styles/GetScreen';
import width from '../../../../../Styles/GetScreen';
import PostPoint from '../../../../../Api/PostPoint';
import PutPoint from '../../../../../Api/PutPoint';
const url = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user";
import deletee from '../../../../../media/icon/Info/delete.png';
const urlpoint = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/ListPoint/";
const points = {
    name: '',
    point: '',
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
        };
        FetchArray(url).then(res => {
            this.setState({ arrUser: res });
        })
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

    }
    clickOke() {
        const { pointt, tcc, namee, arrPoint } = this.state;
        if (tcc !== '' && pointt !== '' && namee !== '') {
            arrPoint.push(points = { name: namee, point: pointt, tc: tcc, id: arrPoint.length !== null ? arrPoint.length + 1 : 1 });
            this.setState({
                namee: '', tcc: '', pointt: ''
            })
        }

    }
    checkMSSV() {
        for (i of this.state.arrUser) {
            if (this.state.input === '')
                return this.ShowAlert('Mời Nhập MSSV');
            else if (this.state.input === i.username) {
                this.setState({ idd: i.id });
                return FetchArray(urlpoint + i.id).then(res => {
                    return this.setState({ arrPoint: res.listpoint });
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
        const { arrPoint } = this.state;
        return (
            <View style={{ marginLeft: 10, flex: 1 }}>
                <View style={{ flex: 1 }}>
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
                        <TouchableOpacity style={[styleview.Buttonlogin, { backgroundColor: '#00CCFF' }]} onPress={() => this.clickOke()}>
                            <Text>Thêm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.item, { flex: 1, alignItems: 'center', justifyContent: 'space-between' }]}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: width / 20, fontWeight: 'bold' }}>Tên Môn Học</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontSize: width / 20, fontWeight: 'bold' }}>Số Tín Chỉ</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontSize: width / 20, fontWeight: 'bold' }}>Điểm</Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    style={{ flex: 7 }}
                    data={arrPoint}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text >{item.name}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                                <Text>{item.tc}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <Text >{item.point}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                var a = [] ;
                                for( let i of arrPoint){
                                        if(i.id !== item.id )
                                            a.push(i);
                                }
                                return this.setState({arrPoint:a});
                                
                            }}>
                                <Image
                                    style={{ flex: 0.2, height: height / 14, width: width / 14 }}
                                    source={deletee} />
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(index) => index}
                />
                <View style={{ flex: 0.5, alignItems: 'center' }}>
                    <TouchableOpacity style={[styleview.Buttonlogin, { backgroundColor: '#00CCFF' }]} onPress={() => this.click()}>
                        <Text>Cập Nhập</Text>
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
    }
});