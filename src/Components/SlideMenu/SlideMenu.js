import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Home from '../Home/Home';
import ScreenMenu from './ScreenMenu';
import {connect} from 'react-redux';
class SlideMenu extends Component {
    closeControlPanel = () => {
        this.drawer.close()
    };
    openControlPanel = () => {
        this.drawer.open()
    };
    render() {
        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                tapToClose
                openDrawerOffset={100}
                content={<ScreenMenu navigation={this.props.navigation} />}
            >
                <Home open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
function mapstate(state){
    return { mystate: state.Checkuser};
}
export default connect (mapstate)(SlideMenu);