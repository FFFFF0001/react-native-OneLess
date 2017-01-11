/**
 * Created by mifind on 2016/12/30.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import res from '../../common/commonResources'
import {fetchMusicDetail} from './Fun'
import HTMLView from '../../components/common/htmlview/HTMLView'
import Swiper from '../common/Swiper'
const StyleSheet = require('../../common/commonStyleSheet');
const screenWidth = res.screen.screenWidth;
const scaleY = res.screen.scaleY;
const scaleX = res.screen.scaleX;
export default class PicItem extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            index: 0
        }
    }

    componentWillMount() {
        fetchMusicDetail(this, this.props.index);
    }

    renderMusicStory() {
    }

    render() {
        let index = this.state.index;
        let content, title, imgRes = '';
        if (index === 0) {
            content = this.state.data.story;
            title = '音乐故事';
        } else if (index === 1) {
            content = this.state.data.lyric;
            title = '歌词';
        } else if (index === 2) {
            content = this.state.data.info;
            title = '歌曲信息';
        }
        return (
            <ScrollView
                style={{backgroundColor:'white'}}>
                <Image style={styles.cover} source={{uri:this.state.data.cover}}/>
                <View
                    style={styles.story}>
                    <Text style={styles.textGray}>{title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableWithoutFeedback onPress={()=>this.setState({index:0})}>
                            <Image style={{width:40,height:40}}
                                   source={this.state.index===0?require('../../images/music_story_selected.png'):require('../../images/music_story_default.png')}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.setState({index:1})}>
                            <Image style={{width:40,height:40}}
                                   source={this.state.index===1?require('../../images/music_lyric_selected.png'):require('../../images/music_lyric_default.png')}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.setState({index:2})}>
                            <Image style={{width:40,height:40}}
                                   source={this.state.index===2?require('../../images/music_about_selected.png'):require('../../images/music_about_default.png')}/>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <Text
                    style={{marginBottom:140,marginLeft:15,marginRight:15,marginTop:10,color:'#666',fontSize:14,lineHeight:22}}>{content}</Text>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    cover: {
        width: screenWidth,
        height: screenWidth,
    },
    textGray: {
        fontSize: 11,
        color: '#aaa'
    },
    story: {
        backgroundColor: 'rgba(247,247,247,1)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    }
})
