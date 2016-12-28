/**
 * Created by mifind on 2016/12/28.
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Navigator from '../../components/App';
import Picture from '../picture'
import Movie from '../movie'
import Music from '../music'
import Read from '../read'
export default class HomeRoute extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        let pos = this.props.position;
        if (pos == 0) {
            return (<Picture/> );
        } else if (pos == 1) {
            return (<Read/>  );
        } else if (pos == 2) {
            return ( <Music/>  );
        } else if (pos == 3) {
            return ( <Movie/>  );
        }
    }
}
const styles = StyleSheet.create({});