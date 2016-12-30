/**
 * Created by mifind on 2016/12/28.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import Swiper from './PicSwipe'
import {fetchList} from './Fun'
import PicItem from './PicItem'
var StyleSheet = require('../../common/commonStyleSheet')
var details = []
export default class Picture extends Component {
    constructor() {
        super();
        this.state = {
            idlist: [],
        }
    }

    componentWillMount() {
        fetchList(this);
    }

    renderPanels() {
        let content = []
        this.state.idlist.map((item, i) =>
            this.renderDetail(content, item, i)
        );
        return content
    }

    renderDetail(content, item, i) {
        content.push(
            <PicItem
                key={i}
                index={item}
            />
        )
    }

    render() {
        return (
            <Swiper
                bounces={true}
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