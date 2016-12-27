/**
 * Created by poype on 16/12/22.
 */

import React, {Component} from 'react';
import {
    View,
    WebView
} from 'react-native';
import NormalNavigationBar from './normalNavigationBar'

class NormalWebView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <NormalNavigationBar title={this.props.title}/>
                <WebView
                    style={{flex:1}}
                    source={{uri:this.props.url}}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    }
}

export default NormalWebView;

