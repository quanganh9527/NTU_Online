import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet
} from 'react-native';
import styles from './styleHeader';
import menuon from '../../../media/icon/Menuon.png';
import Back from '../../../media/icon/Back.png';
import width from '../../../Styles/GetScreen';
import height from '../../../Styles/GetScreen';
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkmenu: false,
        }
    }
    clickImage() {
        const { image } = this.props;
        const { navigation } = this.props
        if (image === menuon) {
            const { open } = this.props;
            this.setState({ checkmenu: !this.state.checkmenu });
            open();
        }
        else {
            navigation.goBack();
        }
    }
    render() {
        const { image,text } = this.props;
        const checkstyle = image === menuon ? styless.icon : styless.iconback;
        return (
            <View style={styles.View}>
                <TouchableOpacity style={{flex:1}} onPress={() => this.clickImage()}>
                    <Image style={checkstyle} source={image} />
                </TouchableOpacity>
                <View style={{flex:1}}>  
                   <Text style={{ fontSize: 15, fontWeight:'900' }}>{text}</Text>
                </View>
                <View style={{flex:0.5}}></View>
            </View>
        );
    }
}
const styless = StyleSheet.create({
    icon: {
        height: height / 15,
        width: width / 10,
        marginLeft: width/40
    },
    iconback:{
        height: height / 15,
        width: width / 10,
        marginLeft: 5
    }
});