/**
 * Created by mifind on 2016/12/27.
 */
import React, {Component} from 'react';
import{
    View,
    Text
}from 'react-native';
import TabBar from '../common/tab/TabBar'
var StyleSheet = require('../common/CommonStyleSheet')
import resources from '../../common/CommonResources'
var scale = resources.screen.scale;
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }

    render() {
        var self = this;
        return (
            <View style={styles.container}>
                <Text>显示{this.state.selectedIndex}页</Text>
                <TabBar style={styles.content}
                        defaultPage={this.state.selectedIndex}
                        onItemSelected={(index)=>this.setState({selectedIndex:index})}>
                    <TabBar.Item
                        icon={require('../../images/home.png')}
                        selectedIcon={require('../../images/home_active.png')}
                        title='首页'>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('../../images/reading.png')}
                        selectedIcon={require('../../images/reading_active.png')}
                        title='阅读'>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('../../images/music.png')}
                        selectedIcon={require('../../images/music_active.png')}
                        title='音乐'>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('../../images/movie.png')}
                        selectedIcon={require('../../images/movie_active.png')}
                        title='电影'>
                    </TabBar.Item>
                </TabBar>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});