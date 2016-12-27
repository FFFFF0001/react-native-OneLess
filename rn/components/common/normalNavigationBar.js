/**
 * Created by mifind on 16/12/6.
 */

import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

var StyleSheet = require('./CommonStyleSheet');

/**
 * 如果title为一行就传一个string，如果为两行（类似一键借款）就传数组
 */
export default class NormalNavigationBar extends Component {

    constructor(props) {
        super(props);
        let routes = this.props.navigator.getCurrentRoutes(); //nav是导航器对象
        let lastRoute = routes[routes.length - 1]; // 当前页面对应的route对象
        lastRoute.handleBack = () => {
            if (this.props.handleBack) {
                this.props.handleBack();
            }else{
                return false;
            }
            return true;
        }
    }

    _leftButtonHandler() {
        if (this.props.leftNavBtnClick) {
            this.props.leftNavBtnClick();
        } else {
            this.props.navigator.pop();
        }
    }

    renderTitle() {
        if (this.props.title === undefined || typeof this.props.title === 'string') {
            return (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.titleContainer}>
                    <Text style={styles.titleMain}>{this.props.title[0]}</Text>
                    <Text style={styles.titleSecond}>{this.props.title[1]}</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View>
                <View style={styles.statusBar}/>
                <View style={styles.navBar}>
                    <TouchableOpacity style={{marginLeft:15,justifyContent:'center'}}
                                      onPress={() => this._leftButtonHandler()}>
                        <Image style={{width:20,height:16}} source={require('../../img/navigation/back.png')}/>
                    </TouchableOpacity>
                    {this.renderTitle()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navBarContainer: {
        backgroundColor: '#F8F8F8'
    },
    navBar: {
        height: 44,
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        android: {
            height: 44,
        }
    },
    statusBar: {
        height: 20,
        backgroundColor: '#F8F8F8',
        android: {
            height: 3,
        }
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
        fontSize: 17,
        letterSpacing: 0.5,
        color: '#333'
    },
    titleMain: {
        fontSize: 17,
        letterSpacing: 0.5,
        color: '#333'
    },
    titleSecond: {
        fontSize: 10,
        marginTop: 4,
        color: '#999',
    }
});
