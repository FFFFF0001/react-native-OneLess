import React, {Component} from 'react';

import {
    AppRegistry
} from 'react-native';

import Root from './app/root'

class OneLessApp extends Component {

    render() {
        return (
            <Root/>
        )
    }
}

AppRegistry.registerComponent('OneLess', ()=>OneLessApp);