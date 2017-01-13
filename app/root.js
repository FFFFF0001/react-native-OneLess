/**
 * Created by mifind on 16/12/26.
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store/configStore';
import App from './components/App';
import Home from './components/home/Home'

class RootComponent extends Component {
    constructor() {
        super();
        this.state = {store: store};
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App initialRoute={{title: 'Home', component: Home}}/>
            </Provider>
        );
    }
}

export default RootComponent;