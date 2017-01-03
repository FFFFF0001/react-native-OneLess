/**
 * Created by mifind on 2016/12/28.
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Picture from '../picture'
import Movie from '../movie'
import Music from '../music'
import Read from '../read'
import Swiper from '../common/Swiper'

export default class HomeRoute extends Component {
    constructor() {
        super();
    }

    route(index) {
        this.swipe.setPage(index)
    }

    render() {
        return (
            <Swiper
                scrollEnabled={false}
                ref={(swipe) => { this.swipe = swipe}}
            >
                <Picture navigator={this.props.navigator}/>
                <Read navigator={this.props.navigator}/>
                <Music navigator={this.props.navigator}/>
                <Movie navigator={this.props.navigator}/>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({});