/**
 * Created by mifind on 16/12/26.
 */

import React, {Component} from 'react';
import App from './components/App';
import Home from './components/home/Home'
class RootComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <App initialRoute={{title: 'Home', component: Home}}/>
        );
    }
}

export default RootComponent;