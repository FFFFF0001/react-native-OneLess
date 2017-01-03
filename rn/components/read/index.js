/**
 * Created by mifind on 2016/12/28.
 */
import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import ReadSwiper from './ReadSwiper'
import {fetchReadingImageList} from './Fun'
var StyleSheet = require('../../common/commonStyleSheet')

export default class Read extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        fetchReadingImageList(this)
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ReadSwiper
                    navigator={this.props.navigator}
                    data={this.state.data}
                ></ReadSwiper>
            </View>
        );
    }
}
const styles = StyleSheet.create({});