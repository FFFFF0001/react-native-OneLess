/**
 * Created by mifind on 2017/1/2.
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class extends Component {
    constructor() {
        super();
        this.state = {};

    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:this.props.bgcolor?this.props.bgcolor:'white'}}>
            </View>
        );
    }
}
const styles = StyleSheet.create({});