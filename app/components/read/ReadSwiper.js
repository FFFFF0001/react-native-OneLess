/**
 * Created by mifind on 2017/1/2.
 */
import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
    View,
    Image,
    Navigator
} from 'react-native';
import Swiper from '../common/Swiper'
import res from '../../common/commonResources'
import ReadCarouselList from './ReadCarouselList'
var StyleSheet = require('../../common/commonStyleSheet')
const scaleWH = 2.21;
export default class ReadSwiper extends Component {
    constructor() {
        super();
        this.state = {};
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.data === nextProps.data) {
            return false;
        }
        return true;
    }

    _onPress(item) {
        this.props.navigator.push({
            component: ReadCarouselList,
            type: 'Bottom',
            bgcolor: item.bgcolor,
            bottom_text: item.bottom_text,
            bottom_image: item.cover,
            carouselTitle: item.title,
            carouselId: item.id
        })
    }

    renderImages() {
        let self = this;
        const data = self.props.data;
        let images = []
        data.map((item, i) => {
            images.push(
                <TouchableWithoutFeedback key={i} onPress={self._onPress.bind(this,item)}>
                    <Image key={i} style={styles.swipeImg} resizeMode={'cover'} source={{uri:item.cover}}/>
                </TouchableWithoutFeedback>
            )
        })
        return images
    }

    render() {
        return (
            <Swiper
                activeDotColor={'white'}
                dotColor={'rgba(256,256,256,.2)'}
                autoplay={true}
                height={res.screen.screenWidth / scaleWH}
                ref={(swipe) => { this.swipe = swipe}}
            >
                {this.renderImages()}
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    swipeImg: {
        width: res.screen.screenWidth,
        height: res.screen.screenWidth / scaleWH,
    }
});