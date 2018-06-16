import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet, AsyncStorage
} from 'react-native';
import height from '../../Styles/GetScreen';
import width from '../../Styles/GetScreen';
import stylesview from '../../Styles/StyleView';
import icon from '../../media/icon/20070929001755!NTUlogo.gif';
import SetToken from '../../AsyncStorage/SetToken';
import GetToken from '../../AsyncStorage/GetToken';
import GVLogin from './ScreenDidLogin/GV/GVLogin';
import SVLogin from './ScreenDidLogin/SV/SVLogin';
export default class DidLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: true,
            token: '',
        }
        GetToken('@Token').then(res => {this.setState({ token: res })});
    }
    close() {
        const { close } = this.props;
        close();
    }
    componentDidMount(){

    }
    render() {
        const { navigation } = this.props;
        const Show = this.state.token === 'sv' ? <SVLogin navigation={this.props.navigation} /> : <GVLogin navigation={this.props.navigation} />;
        return (
            <View style={stylesview.fullview}>
                <Image style={styles.icon} source={icon} />
                {Show}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        height: height / 4,
        width: width / 4
    }
});