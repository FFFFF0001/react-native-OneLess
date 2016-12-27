/**
 * Created by mifind on 2016/12/27.
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class Tabs extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={[styles.tabbarView, this.props.style]}>
                {this.props.children.map(this.props.children.filter(c => c), (el) =>
                    <TouchableWithoutFeedback
                        key={el.props.name+"touch"}
                        testID={el.props.testID}
                        style={[styles.iconView, this.props.iconStyle, (el.props.name || el.key) == selected ? this.props.selectedIconStyle || el.props.selectedIconStyle || {} : {} ]}
                        onPress={()=>!self.props.locked && self.onSelect(el)}
                        onLongPress={()=>self.onSelect(el)}
                    >
                        {selected == (el.props.name || el.key) ? React.cloneElement(el, {
                            selected: true,
                            style: [el.props.style, this.props.selectedStyle, el.props.selectedStyle]
                        }) : el}
                    </TouchableWithoutFeedback>
                )}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    tabbarView: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 50,
        opacity: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hidden: {
        height: 0,
    },
});