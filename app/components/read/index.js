/**
 * Created by mifind on 2016/12/28.
 */
import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import ReadSwiper from './ReadSwiper'
import ReadArticleItem from './ReadArticleItem'
import OneSwiper from '../common/OneSwipe'
import {fetchReadingImageList, fetchLatestArticleList} from './Fun'

export default class Read extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            essay: [],
            question: [],
            serial: []
        };
    }

    componentWillMount() {
        fetchReadingImageList(this);
        fetchLatestArticleList(this);
    }

    renderReadPanels() {
        let content = [];
        this.state.essay.map((item, i) =>
            content.push(
                <ReadArticleItem
                    key={i}
                    navigator={this.props.navigator}
                    essay={item}
                    serial={this.state.serial[i]}
                    question={this.state.question[i]}
                />
            )
        );
        return content
    }


    render() {
        return (
            <View style={{flex:1}}>
                <ReadSwiper
                    navigator={this.props.navigator}
                    data={this.state.data}/>
                <OneSwiper
                    type={'half'}
                >
                    {this.renderReadPanels()}
                </OneSwiper>
            </View>
        );
    }
}
