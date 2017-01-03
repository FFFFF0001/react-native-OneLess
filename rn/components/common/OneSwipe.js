/**
 * Created by mifind on 2016/12/29.
 */
import React, {Component} from 'react';
import {
    Animated,
    PanResponder,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
export default class OneSwipe extends Component {
    static propTypes = {
        children: React.PropTypes.node.isRequired,
        index: React.PropTypes.number,
        threshold: React.PropTypes.number,
        pager: React.PropTypes.bool,
        onPageChange: React.PropTypes.func,
    };

    static defaultProps = {
        index: 0,
        pager: true,
        threshold: 25,
        onPageChange: () => {
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            scrollValue: new Animated.Value(props.index),
            viewWidth: Dimensions.get('window').width,
            rightTrans: 0,
            leftTrans: 0,
            opac: 0
        };
    }

    componentWillMount() {
        const release = (e, gestureState) => {
            const relativeGestureDistance = gestureState.dx / this.state.viewWidth;
            const {vx} = gestureState;

            let newIndex = this.state.index;

            if (relativeGestureDistance < -0.5 || (relativeGestureDistance < 0 && vx <= -0.5)) {
                newIndex = newIndex + 1;
            } else if (relativeGestureDistance > 0.5 || (relativeGestureDistance > 0 && vx >= 0.5)) {
                newIndex = newIndex - 1;
            }

            this.goToPage(newIndex);
        };
        this.goToPage(1);
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, gestureState) => {
                const {threshold} = this.props;

                // Claim responder if it's a horizontal pan
                if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
                    return true;
                }

                // and only if it exceeds the threshold
                if (threshold - Math.abs(gestureState.dx) > 0) {
                    return false;
                }

            },

            // Touch is released, scroll to the one that you're closest to
            onPanResponderRelease: release,
            onPanResponderTerminate: release,


            // Dragging, move the view with the touch
            onPanResponderMove: (e, gestureState) => {
                let dx = gestureState.dx;
                let offsetX = -dx / this.state.viewWidth + this.state.index;
                if (offsetX < 0.0) {
                    if (Math.abs(dx) > 280.0) {
                        console.log('refresh')
                    }
                    this.state.scrollValue.setValue(offsetX / 2.5);

                    this.setState({
                        leftTrans: Math.abs(offsetX * 40),
                        opac: Math.abs(offsetX * 1.2)
                    })
                } else if (offsetX > 9.0) {
                    if (Math.abs(dx) > 280.0) {
                        console.log('loadmore')
                    }
                    this.setState({
                        rightTrans: Math.abs(-dx / this.state.viewWidth * 40),
                        opac: Math.abs(-dx / this.state.viewWidth * 1.2)
                    })
                    offsetX = (-dx / this.state.viewWidth ) / 2.5 + this.state.index;
                    this.state.scrollValue.setValue(offsetX);
                } else {
                    this.state.scrollValue.setValue(offsetX);
                }
            }
        });
    }


    goToPage(pageNumber) {
        // Don't scroll outside the bounds of the screens
        pageNumber = Math.max(0, Math.min(pageNumber, this.props.children.length - 1));
        this.setState({
            index: pageNumber
        });

        Animated.spring(this.state.scrollValue, {
            toValue: pageNumber,
            friction: this.props.springFriction,
            tension: this.props.springTension
        }).start();

        this.props.onPageChange(pageNumber);
    }

    handleLayout(event) {
        const {width} = event.nativeEvent.layout;

        if (width) {
            this.setState({viewWidth: width});
        }
    }

    renderPanels() {
        let content = []
        this.props.children.map((item, i) =>
            content.push(
                <View style={{flex:1}} key={i}>{item}</View>
            ));
        return content
    }

    renderBackground() {
        return (
            <View
                style={styles.background}>
                <View style={{flexDirection:'row',alignItems:'center',opacity:this.state.opac}}>
                    <Image style={{width:40,height:40,marginLeft:this.state.leftTrans,marginTop:-90}}
                           source={require('../../images/laud_selected.png')}/>
                    <Text style={{marginLeft:-5,marginTop:-90}}>加载中~</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',opacity:this.state.opac}}>
                    <Image style={{width:40,height:40,marginTop:-90}}
                           source={require('../../images/laud_selected.png')}/>
                    <Text style={{marginLeft:-5,marginTop:-90,marginRight:5+this.state.rightTrans}}>加载中~</Text>
                </View>
            </View>
        )
    }

    render() {
        const translateX = this.state.scrollValue.interpolate({
            inputRange: [0, 1], outputRange: [0, -this.state.viewWidth]
        });

        const sceneContainerStyle = {
            width: this.state.viewWidth * this.props.children.length,
            flex: 1,
            flexDirection: 'row',
        };


        return (
            <View onLayout={ this.handleLayout.bind(this) }
                  style={ [{ flex: 1, overflow: 'visible'}] }>
                {this.renderBackground()}
                <Animated.View
                    {...this._panResponder.panHandlers}
                    style={ [sceneContainerStyle, { transform: [{ translateX }],overflow: 'visible' }] }
                >
                    {this.renderPanels()}
                </Animated.View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})