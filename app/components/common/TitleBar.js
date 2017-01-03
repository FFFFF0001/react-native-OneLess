/**
 * Created by mifind on 2016/12/28.
 */
import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import resources from '../../common/commonResources'
const StyleSheet = require('./../../common/commonStyleSheet');
const scale = resources.screen.scale;
const TITLES = ['ONE', '阅读', '音乐', '电影'];
export default class TitleBar extends Component {
    constructor() {
        super();
        this.state = {};

    }

    _leftButtonHandler() {
        alert("搜索");
    }

    _rightButtonHandler() {
        alert("个人设置");
    }

    _renderTitle() {
        let position = this.props.position;

        if (position === 0) {
            return (
                <Image style={{width:38*scale,height:14*scale}}
                       source={require('../../images/nav_title.png')}/>
            )
        } else {
            return (
                <Text style={styles.title}>{TITLES[position]}</Text>
            )
        }
    }

    render() {
        return (
            <View>
                <View style={styles.statusBar}/>
                <View style={styles.navBar}>
                    <TouchableOpacity style={{padding:5*scale}} onPress={() => this._leftButtonHandler()}>
                        <Image style={{width:20*scale,height:20*scale,marginLeft:5*scale}}
                               source={require('../../images/search_min.png')}/>
                    </TouchableOpacity>
                    {this._renderTitle()}

                    <TouchableOpacity style={{padding:5*scale}} onPress={() => this._rightButtonHandler()}>
                        <Image style={{width:20*scale,height:20*scale,marginRight:5*scale}}
                               source={require('../../images/individual_center.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.horizonLine}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    statusBar: {
        height: 20,
        backgroundColor: 'transparent',
        android: {
            height: 3,
        }
    },
    navBarContainer: {
        backgroundColor: 'white'
    },
    navBar: {
        height: 40 * scale,
        flexDirection: 'row',
        backgroundColor: 'white',
        android: {
            height: 40 * scale,
        },
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer: {
        position: 'absolute',
        left: 100,
        right: 100,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        letterSpacing: 0.5,
        color: '#333'
    },
    horizonLine: {
        backgroundColor: '#adadad',
        height: 0.5,
        width: resources.screen.screenWidth,
    },
});