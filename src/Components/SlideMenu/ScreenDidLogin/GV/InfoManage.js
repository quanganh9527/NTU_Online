import React, { Component } from 'react';
import {
    Image, View, Text
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import add from '../../../../media/icon/Info/add.png';
import unadd from '../../../../media/icon/Info/unadd.png';
import remove from '../../../../media/icon/Info/remove.png';
import unremove from '../../../../media/icon/Info/unremove.png';
import edit from '../../../../media/icon/Info/edit.png';
import unedit from '../../../../media/icon/Info/unedit.png';
import hh from '../../../../media/icon/Info/hh.png';
import AddInfo from './AddInfo';
import EditInfo from './EditInfo';
import { Platform } from 'react-native';
import height from '../../../../Styles/GetScreen';
import StyleView from '../../../../Styles/StyleView';
import RemoveInfo from './RemoveInfo';
import stylesicon from '../../../../Styles/StyleIcon';
import Header from '../../../Home/Header/Header';
import Back from '../../../../media/icon/Back.png';
export default class InfoManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'add',
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={[,{marginTop : Platform.OS === 'ios' ? height/20 : 0,flex:1, backgroundColor:'white'}]}>
                <Header image={Back} text="Quản Lý Sinh Viên" navigation={navigation} />
            <TabNavigator tabBarStyle={{ paddingTop:4 }}>
                <TabNavigator.Item
                    tabBarStyle={{ }}
                    selected={this.state.selectedTab === 'add'}
                    title="Thêm"
                    renderIcon={() => <Image source={hh} style={stylesicon.icon} />}
                    renderSelectedIcon={() => <Image source={add} style={stylesicon.icon} />}
                    onPress={() => this.setState({ selectedTab: 'add' })}>
                    <AddInfo navigation={navigation} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'remove'}
                    renderIcon={() => <Image source={unremove} style={stylesicon.icon} />}
                    renderSelectedIcon={() => <Image source={remove} style={stylesicon.icon} />}
                    // renderBadge={() => <CustomBadgeView />}
                    title="Xoá"
                    onPress={() => this.setState({ selectedTab: 'remove' })}>
                    <RemoveInfo navigation={navigation} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'edit'}
                    title="Sửa"
                    renderIcon={() => <Image source={unedit} style={stylesicon.icon} />}
                    renderSelectedIcon={() => <Image source={edit} style={stylesicon.icon} />}
                    // renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'edit' })}>
                    <EditInfo navigation={navigation} />
                </TabNavigator.Item>
            </TabNavigator>
            </View>
        );
    }
}