import React, { Component } from 'react';
import {
    View, Text, StyleSheet, AsyncStorage, FlatList
} from 'react-native';
import width from '../../../../../Styles/GetScreen';
import Header from '../../../../Home/Header/Header';
import Back from '../../../../../media/icon/Back.png';
import GetListInfo from '../../../../../AsyncStorage/GetListInfo';
import { connect } from 'react-redux';
import height from '../../../../../Styles/GetScreen';
import { Platform } from 'react-native';
import FetchArray from '../../../../../Api/FetchArray';
const urlpoint = 'http://59d2419a0ecfcb0011fd4c2b.mockapi.io/ListPoint/';
import GetToken from '../../../../../AsyncStorage/GetToken';
import LoadingView from 'react-native-loading-view';
class PointTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            show: true,
        };
        // AsyncStorage.getItem('@pointlist').then(res => JSON.parse(res)).then(res => {
        //     this.setState({ arrpoint: res })
        // });
        // AsyncStorage.getItem('@namelist').then(res => JSON.parse(res)).then(res => {
        //     this.setState({ arrname: res })
        // });
        // AsyncStorage.getItem('@tclist').then(res => JSON.parse(res)).then(res => {
        //     this.setState({ arrtc: res })
        // });
    }
    componentDidMount() {
        GetToken('@idinfo').then(res => FetchArray(urlpoint + res).then(res => this.setState({ arr: res, show: false })));

    }
    render() {
        const { navigation } = this.props;
        const { show, arr } = this.state;
        return (
            <View style={{ marginTop: Platform.OS === 'ios' ? height / 20 : 0, flex: 1, backgroundColor: 'white' }}>
                <Header image={Back} text="Bảng Điểm" navigation={navigation} />
                <View style={[styles.item, {alignItems: 'center', justifyContent: 'space-between',backgroundColor: '#1C5B96' }]}>                        
                            <Text style={{ flex: 2, fontSize: width / 20, fontWeight: 'bold',color:'white' }}>Tên Môn Học</Text>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold',color:'white' }}>Số Tín Chỉ</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ flex: 1, fontSize: width / 20, fontWeight: 'bold',color:'white' }}>Điểm</Text>
                        </View>
                    </View>
                <LoadingView overlay='true' size='large' loading={show}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            style={{ flex: 1 }}
                            data={arr.listpoint}
                            renderItem={({ item }) => (
                                <View style={{ backgroundColor: item.id % 2 == '0' ? '#EBEBEB' : 'white', height: 40, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 2, flexDirection: 'column' }}>
                                        <Text >{item.name}</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text>{item.tc}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, justifyContent: 'center' }}>
                                        <Text >{item.point}</Text>
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
export default connect(mapstate)(PointTable);