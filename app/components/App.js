/**
 * Created by mifind on 2016/12/27.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    BackAndroid
} from 'react-native';

export default class App extends Component {

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }

    onBackAndroid() {
        const nav = this.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            const top = routers[routers.length - 1];
            if (top.ignoreBack || top.component.ignoreBack) {
                // 路由或组件上决定这个界面忽略back键
                return true;
            }
            const handleBack = top.handleBack || top.component.handleBack;
            if (handleBack) {
                // 路由或组件上决定这个界面自行处理back键
                if (handleBack()) {
                    return handleBack()
                } else {
                    nav.pop();
                    return true;
                }
            }
            // 默认行为： 退出当前界面。
            nav.pop();
            return true;
        }
        return false;
    };

    /**
     * 配置场景动画
     * @param route 路由
     * @param routeStack 路由栈
     * @returns {*} 动画
     */
    configureScene = (route) => {
        if (route.type == 'Bottom') {
            var conf = Navigator.SceneConfigs.FloatFromBottom;
        } else {
            var conf = Navigator.SceneConfigs.PushFromRight;
        }
        conf.gestures = null;
        return conf;
    }

    render() {
        return (
            <Navigator
                ref={(navigator) => { this.navigator = navigator }}
                initialRoute={this.props.initialRoute}
                configureScene={this.configureScene}
                renderScene={(route, navigator) => {
                    let navProps = {};
                    Object.assign(navProps, route, {navigator});
                    if (navProps.component) {
                        delete navProps.component
                    }
                    return React.createElement(route.component, navProps)
                }
                }
                routereplacePrevious={null}
                sceneStyle={styles.sceneStyle}
            />
        );
    }
}

const styles = StyleSheet.create({
    sceneStyle: {
        shadowColor: '#000000',
        shadowOpacity: .5,
        shadowOffset: {
            height: 1,
            width: 0
        },
        overflow: 'visible',
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

