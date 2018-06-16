import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import height from '../Styles/GetScreen';
import ScreenLogin from '../Components/Login/ScreenLogin';
import Navigations from '../Navigations';
import { Provider } from 'react-redux';
import Store from "../redux/Store";
export default class Main extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Navigations />
            </Provider>
        );
    }
}