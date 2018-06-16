import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Platform, TextInput, StyleSheet, Image, Alert, FlatList
} from 'react-native';
import Header from './Header/Header';
import height from '../../Styles/GetScreen';
import menuon from '../../media/icon/Menuon.png';
import styleview from '../../Styles/StyleView';
import stylesicon from '../../Styles/StyleIcon';
import width from '../../Styles/GetScreen';
import LoadingView from 'react-native-loading-view';
import FetchArray from '../../Api/FetchArray';
const url = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user";
const urlpoint = "http://59d2419a0ecfcb0011fd4c2b.mockapi.io/ListPoint/";
import show1 from '../../media/icon/Info/show1.png';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUser: [],
            input: '',
            selectarray: [],
            arrPoint: [],
            check:false,
        }
    }
    open() { 
        const { open } = this.props;
        open();
    }
    componentDidMount() {
        FetchArray(url).then(res => {
            this.setState({ arrUser: res });
        })
    }
    checkMSSV() {
        this.setState({check:true});
        for (i of this.state.arrUser) {
            if (this.state.input === '')
                return this.ShowAlert('Mời Nhập MSSV');
            else if (this.state.input === i.username) {
                FetchArray(urlpoint + i.id).then(res => this.setState({ arrPoint: res,check:false  }));
                return this.setState({ selectarray: i});
            }
        }
        this.ShowAlert('MSSV không tồn tại');
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
    render() {
        const { selectarray,check } = this.state;
        return (
            <View style={{flex:1,marginTop:Platform.OS === 'ios' ? height / 20 : 0,backgroundColor: 'white' }}>
                <Header image={menuon} text="Trang Chủ" open={this.open.bind(this)} />
                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10, alignItems: 'center' }}>
                    <TextInput
                        style={[styleview.inputlogin, {paddingLeft:20, flex: 1.5 }]}
                        onChangeText={(text) => this.setState({ input: text })}
                        maxLength={9}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        placeholder='Nhập MSSV'
                    />
                    <TouchableOpacity style={[{ flex: 1, marginLeft: 20 }]} onPress={() => this.checkMSSV()}>
                        <Image source={show1} style={{ height: height / 6, width: width / 6 }} />
                    </TouchableOpacity>
                </View>
                <LoadingView overlay='true' size='large' loading={check}>
                <View >
                    <View style={[styles.item,{backgroundColor: '#EBEBEB'}]}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Họ Tên: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.hoten}</Text>
                    </View>
                    <View style={[styles.item, {}]}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>MSSV: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.username}</Text>
                    </View>
                    <View style={[styles.item,{backgroundColor: '#EBEBEB',}]}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Lớp: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.lop}</Text>
                    </View>
                    <View style={[styles.item,{}]}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Ngày sinh: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.ngaysinh}</Text>
                    </View>
                    <View style={[styles.item,{backgroundColor: '#EBEBEB',}]}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Chuyên nghành: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.chuyenghanh}</Text>
                    </View>
                    <View style={[styles.item,{}]}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Giới tính: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.gioitinh}</Text>
                    </View>
                    <View style={[styles.item,{backgroundColor: '#EBEBEB',}]}>
                        <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold' }}>Nơi sinh: </Text>
                        <Text style={{ flex: 1.5, fontSize: width / 20 }}>{selectarray.noisinh}</Text>
                    </View>
                    <View style={[styles.item, { marginTop: 10, alignItems: 'center', justifyContent: 'space-between',backgroundColor: '#1C5B96' }]}>                        
                            <Text style={{ flex: 2, fontSize: width / 20, fontWeight: 'bold',color:'white' }}>Tên Môn Học</Text>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold',color:'white' }}>Số Tín Chỉ</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold',color:'white' }}>Điểm</Text>
                        </View>
                    </View>
                </View>
                
                <FlatList
                    style={{ }}
                    data={this.state.arrPoint.listpoint}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: item.id % 2 == '0' ? '#EBEBEB' : 'white',flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 2, flexDirection: 'column' }}>
                                <Text >{item.name}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                                <Text>{item.tc}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <Text >{item.point}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(index) => index}
                />
                </LoadingView>
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