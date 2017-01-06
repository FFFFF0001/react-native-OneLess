import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import resources from '../../common/commonResources'
const StyleSheet = require('../../common/commonStyleSheet')

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
        if(this.props.navigator){
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
    }

    _leftButtonHandler() {
        if (this.props.leftNavBtnClick) {
            this.props.leftNavBtnClick();
        } else {
            //注意判断空
            if(this.props.navigator) {
                this.props.navigator.pop();
            }
        }
    }

    render() {
        return (
            <View>
                <View style={styles.statusBar}/>
                <View style={styles.navBar}>
                    <TouchableOpacity style={{marginLeft:15,justifyContent:'center'}}
                                      onPress={() => this._leftButtonHandler()}>
                        <Image style={{width:18,height:14}} source={require('../../images/back.png')}/>
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                </View>
                <View style={styles.horizonLine}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navBarContainer: {
        backgroundColor: '#F8F8F8'
    },
    navBar: {
        height: 38,
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        android: {
            height: 38,
        }
    },
    statusBar: {
        height: 15,
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
        fontSize: 14,
        letterSpacing: 0.5,
        color: '#333'
    },
    horizonLine: {
        backgroundColor: '#adadad',
        height: 0.5,
        width: resources.screen.screenWidth,
    },
});
