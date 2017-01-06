/**
 * Created by mifind on 2017/1/5.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    Image
} from 'react-native';

export default class ReadArticleItem extends Component {
    constructor() {
        super();
        this.state = {};

    }

    render() {
        return (
            <ScrollView style={{padding:10}}>
                <View style={styles.container}>
                    <View
                        style={{height:300,backgroundColor:'gray'}}
                    ></View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#eee',
        shadowColor: '#ddd',
        shadowOpacity: 0.8,
        shadowRadius: 6,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    }
});