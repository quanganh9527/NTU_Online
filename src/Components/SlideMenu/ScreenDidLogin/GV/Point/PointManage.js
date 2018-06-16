import React, { Component } from 'react';
import {
    Image, View, Text
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import add from '../../../../../media/icon/Info/add.png';
import unadd from '../../../../../media/icon/Info/unadd.png';
import remove from '../../../../../media/icon/Info/remove.png';
import unremove from '../../../../../media/icon/Info/unremove.png';
import edit from '../../../../../media/icon/Info/edit.png';
import unedit from '../../../../../media/icon/Info/unedit.png';
import hh from '../../../../../media/icon/Info/hh.png';
import AddPoint from './AddPoint';
import EditPoint from './EditPoint';
import RemovePoint from './RemovePoint';
import Back from '../../../../../media/icon/Back.png';
import stylesicon from '../../../../../Styles/StyleIcon';
import Header from '../../../../Home/Header/Header';
import { Platform } from 'react-native';
import height from '../../../../../Styles/GetScreen';
export default class PointManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'add',
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: 'white',marginTop : Platform.OS === 'ios' ? height/20 : 0 }}>
                <Header image={Back} text="Quản Lý Điểm" navigation={navigation} />
                <AddPoint navigation={navigation} />
            </View >
        );
    }
}