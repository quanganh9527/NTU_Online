import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet
} from 'react-native';
import height from '../../Styles/GetScreen';
import width from '../../Styles/GetScreen';
import stylesview from '../../Styles/StyleView';
import icon from '../../media/icon/20070929001755!NTUlogo.gif';
export default class NotLogin extends Component {
    state = {}
    close() {
        const { close } = this.props;
        close();
    }
    gotoSign() {
        const { navigation } = this.props;
        navigation.navigate('Login', navigation);
    }
    render() {
        return (
            <View style={stylesview.fullview}>
                <Image style={styles.icon} source={icon} />
                <View>
                    <TouchableOpacity onPress={() => this.gotoSign()} style={stylesview.Buttonlogin}>
                        <Text style={{ fontSize: 15 }}>Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>
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