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
import {fetchMusicList} from './Fun'
import MusicItem from './MusicItem'
export default class Picture extends Component {
    constructor() {
        super();
        this.state = {
            idlist: [],
        }
    }

    componentWillMount() {
        fetchMusicList(this);
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
            <MusicItem
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
