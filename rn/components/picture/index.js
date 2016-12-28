/**
 * Created by mifind on 2016/12/28.
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {fetchData} from './Fun'
export default class Picture extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        fetchData(this);
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'red'}}>

            </View>
        );
    }
}
const styles = StyleSheet.create({});