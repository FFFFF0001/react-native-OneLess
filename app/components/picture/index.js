/**
 * Created by mifind on 2016/12/28.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import OneSwiper from '../common/OneSwipe'
import {fetchList} from './Fun'
import PicItem from './PicItem'
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
        let content = [];
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
        );
    }

    render() {
        return (
            <OneSwiper>
                {this.renderPanels()}
            </OneSwiper>
        );
    }
}
