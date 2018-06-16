import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet, AsyncStorage, ToastAndroid
} from 'react-native';
import height from '../../Styles/GetScreen';
import width from '../../Styles/GetScreen';
import stylesview from '../../Styles/StyleView';
import { connect } from 'react-redux';
import NotLogin from './NotLogin';
import DidLogin from './DidLogin';
import SetToken from '../../AsyncStorage/SetToken';
import GetToken from '../../AsyncStorage/GetToken';
import PostUser from '../../Api/PostUser';
import PostPoint from '../../Api/PostPoint';
import RemoveUser from '../../Api/RemoveUser';
import RemovePoint from '../../Api/RemovePoint';
const url = 'http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user';
class ScreenMenu extends Component {
    close() {
        const { close } = this.props;
        close();
    }
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            arr: [],
        }
        GetToken('@Token').then(res => this.setState({ token: res }));
    }
    checks = async () => {
        // PostPoint(1,[{name: 'abc' , point:2 , tc :2 },{name: 'abc' , point:2 , tc :2 },{name: 'abc' , point:2 , tc :2 }])
        this.state.arr.push(points = { name: 'abc', point: 'xyz', tc: 'bbb' });
        console.log(this.state.arr);
    }
    render() {
        const { mystate } = this.props;
        const CheckToken = this.state.token === '' ? <NotLogin navigation={this.props.navigation} /> : <DidLogin navigation={this.props.navigation} />;
        return (
            <View style={stylesview.fullview}>
                {CheckToken}
                {/* <TouchableOpacity onPress={() => {
                    RemovePoint(8);
                }}>
                    <Text>OKE</Text>
                </TouchableOpacity> */}
            </View >
        );
    }
}
function mapState(state) {
    return { mystate: state.Checkuser };
}
export default connect(mapState)(ScreenMenu);