/**
 * Created by mifind on 2016/12/28.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import Swiper from '../common/Swiper'
var StyleSheet = require('../../common/commonStyleSheet')
import {fetchData} from './Fun'
export default class Picture extends Component {
    constructor() {
        super();
        this.state = {
            idlist: [],
        };
    }

    componentWillMount() {
        fetchData(this);
    }

    ge() {
        this.swipe.scrollBy(7, false)
    }

    renderPanels() {
        let content = []
        this.state.idlist.map((item, i) =>
            content.push(
                <View
                    key={i}
                    style={styles.slide1}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            ));
        return content
    }

    render() {
        return (
            <Swiper
                loop={false}
                ref={(swipe) => { this.swipe = swipe}}
            >
                {this.renderPanels()}
            </Swiper>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});