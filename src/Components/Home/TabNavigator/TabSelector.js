import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
export default class TabSelector extends Component {
    state = {}
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    /* renderIcon={() => <Image source={...} />}
                    renderSelectedIcon={() => <Image source={...} />} */
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {homeView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    /* renderIcon={() => <Image source={...} />}
                    renderSelectedIcon={() => <Image source={...} />} */
                    renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    {profileView}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}