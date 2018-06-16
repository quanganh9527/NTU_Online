import React, { Component } from 'react';
import {
    ActivityIndicator, View, Text, StyleSheet, AsyncStorage, FlatList
} from 'react-native';
import width from '../../../../../Styles/GetScreen';
import Header from '../../../../Home/Header/Header';
import Back from '../../../../../media/icon/Back.png';
import GetListInfo from '../../../../../AsyncStorage/GetListInfo';
import { connect } from 'react-redux';
import height from '../../../../../Styles/GetScreen';
import { Platform } from 'react-native';
import FetchArray from '../../../../../Api/FetchArray';
const urlpoint = 'http://59d2419a0ecfcb0011fd4c2b.mockapi.io/ThoiKhoaBieu/';
import GetToken from '../../../../../AsyncStorage/GetToken';
import LoadingView from 'react-native-loading-view';
class schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            show: true,
        };
    }
    componentDidMount() {
        GetToken('@idinfo').then(res => FetchArray(urlpoint + res).then(res => this.setState({ arr: res, show: false })));

    }
    render() {
        const { navigation } = this.props;
        const { arr, show } = this.state;

        return (
            <View style={{ marginTop: Platform.OS === 'ios' ? height / 20 : 0, flex: 1, backgroundColor: 'white' }}>
                <Header image={Back} text="Thời Khoá Biểu" navigation={navigation} />
                <View style={{ alignItems: 'center', height: 40, backgroundColor: '#1C5B96', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ color: 'white', fontWeight: '900' }}>Tên Môn Học</Text>
                    <Text style={{ color: 'white', fontWeight: '900' }}>Phòng</Text>
                    <Text style={{ color: 'white', fontWeight: '900' }}>Thứ</Text>
                    <Text style={{ color: 'white', fontWeight: '900' }}>Tiết</Text>
                </View>
                <LoadingView overlay='true' size='large' loading={show}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            style={{ flex: 1 }}
                            data={arr.List}
                            renderItem={({ item }) => (
                                <View style={{ backgroundColor: item.dem % 2 == '0' ? '#EBEBEB' : 'white', height: 40, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 2, flexDirection: 'column' }}>
                                        <Text >{item.TenHp}</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text>{item.Phong}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, justifyContent: 'center' }}>
                                        <Text >{item.Thu}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, justifyContent: 'center' }}>
                                        <Text >{item.Tiet}</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(index) => index}
                        />
                    </View>
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
function mapstate(state) {
    return {
        mystate: state.Checkuser,
    };
}
export default connect(mapstate)(schedule);