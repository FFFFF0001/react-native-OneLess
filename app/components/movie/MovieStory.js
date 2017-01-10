/**
 * Created by mifind on 2017/1/10.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import HTMLView from '../../components/common/htmlview/HTMLView'
export default class MovieStory extends Component {
    constructor() {
        super();
        this.state = {};

    }

    render() {
        return (
            <View style={styles.container}>
                <HTMLView
                    value={this.props.content}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
});