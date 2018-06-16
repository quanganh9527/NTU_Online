import React, { Component } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, Image, ToastAndroid
} from 'react-native';
import styleview from '../../../../Styles/StyleView';
import width from '../../../../Styles/GetScreen';
import height from '../../../../Styles/GetScreen';
import FetchArray from '../../../../Api/FetchArray';
import RemoveUser from '../../../../Api/RemoveUser';
import show1 from '../../../../media/icon/Info/show1.png';
import RemovePoint from '../../../../Api/RemovePoint';
const url = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user";
export default class RemoveInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUser: [],
            input: '',
            selectarray: [],
        }
    }
    componentDidMount() {
        FetchArray(url).then(res => this.setState({ arrUser: res }));
    }
    checkMSSV() {
        for (i of this.state.arrUser) {
            if (this.state.input === i.username) {
                return this.setState({ selectarray: i });
            }
        }
    }
    ShowAlert() {
        if (this.state.input !== null) {
            return Alert.alert(
                'Thông báo',
                'Bạn có chắc muốn xoá sinh viên ' + this.state.selectarray.hoten,
                [
                    { text: 'Huỷ' },
                    {
                        text: 'Đồng ý', onPress: () => {
                            RemoveUser(this.state.selectarray.id);
                            RemovePoint(this.state.selectarray.id);
                            ToastAndroid.show('Xoá thành công!', ToastAndroid.SHORT);

                            this.setState({
                                selectarray: []
                            });
                        }
                    },
                ],
                { cancelable: false }
            )
        }
        return Alert.alert(
            'Thông báo',
            'Mời nhập mã số sinh viên ',
            [
                { text: 'Huỷ' },
                { text: 'Đồng ý', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
    render() {
        const { selectarray } = this.state;
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                    <TextInput
                        style={[styleview.inputlogin, { flex: 1.5 }]}
                        onChangeText={(text) => this.setState({ input: text })}
                        maxLength={9}

                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        placeholder='Nhập MSSV'
                    />
                    <TouchableOpacity style={[{ flex: 1, marginLeft: 20, marginBottom:20 }]} onPress={() => this.checkMSSV()}>
                        <Image source={show1} style={{ height: height / 6, width: width / 6 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <View style={styles.item}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Họ Tên: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.hoten}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>MSSV: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.username}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Lớp: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.lop}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Ngày sinh: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.ngaysinh}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Chuyên nghành: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.chuyenghanh}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Giới tính: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.gioitinh}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Nơi sinh: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.noisinh}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[styleview.Buttonlogin, {backgroundColor:'#00CCFF', marginRight: 10, marginLeft: 10, flex: 1.5, borderColor: '#00CCFF' }]} onPress={() => this.ShowAlert()}>
                        <Text>Xoá Thông Tin SV</Text>
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