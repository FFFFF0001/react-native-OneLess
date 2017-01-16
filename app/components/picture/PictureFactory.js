/**
 * Created by mifind on 2017/1/13.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import NavigationBar from '../common/NavigationBar'
import store from '../../store/configStore'
import {changeOneSwipeState} from '../../actions/changeOneSwipeStateAction'
export default class PictureFactory extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        setTimeout(function () {
            store.dispatch(changeOneSwipeState(true))
        }, 1000);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <NavigationBar navigator={this.props.navigator}
                               title='往期列表'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({});