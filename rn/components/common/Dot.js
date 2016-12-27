/**
 * Created by MiFindXuan on 2016/12/20.
 */
import React, {Component, PropTypes} from 'react';
import {
    View,
} from 'react-native';
import resources from '../../common/CommonResources'
var StyleSheet = require('./CommonStyleSheet')
var scale = resources.screen.scale;
const screenWidth = resources.screen.screenWidth

/**
 * 轮播图下面使用的DOT
 * 通过props传入dot数量与动态position
 */
export default class Dot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completely: 1,
            unCompletely: 0.4,
            dotSize: props.dotSize,
            dotPosition: props.dotPosition,
        }
    }

    componentWillReceiveProps(props) {
        if (this.state.dotSize !== props.dotSize) {
            this.setState({dotSize: props.dotSize})
        }
        if (this.state.dotPosition !== props.dotPosition) {
            this.setState({dotPosition: props.dotPosition})
        }
    }

    static propTypes = {
        dotPosition: PropTypes.number,
        dotSize: PropTypes.number
    };

    static defaultProps = {
        dotSize: 4,
        dotPosition: 0,
    };

    renderDot() {
        let content = []
        for (var i = 0; i < this.state.dotSize; i++) {
            content.push(
                <View key={i}
                      style={[i===0?styles.firstPoint:styles.otherPoint,
                        {opacity: this.state.dotPosition===i?this.state.completely:this.state.unCompletely}]}>
                </View>
            )
        }
        return content;
    }

    render() {
        return (
            <View style={[styles.pointView,this.props.style]}>
                {this.renderDot()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    pointView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstPoint: {
        backgroundColor: '#ffffff',
        height: 6.0 * scale,
        width: 6.0 * scale,
        borderRadius: 3 * scale
    },
    otherPoint: {
        marginLeft: 9 * scale,
        backgroundColor: '#ffffff',
        height: 6.0 * scale,
        width: 6.0 * scale,
        borderRadius: 3 * scale
    },
});