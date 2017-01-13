/**
 * Created by mifind on 2016/1/4.
 */
import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';
import resources from '../../common/commonResources';
import OverlayContainer from '../common/OverlayContainer';
import Dialog from '../common/DialogBox';
const scaleX = resources.screen.scale;
const scaleY = resources.screen.scaleY;
/**
 * 借款须知
 */
export default class PictureOverlay extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _showModal() {
        this.oc.showModal();
    }

    _closeModal() {
        this.oc.closeModal()
    }

    onLongPress() {
        let url = this.props.url;
        this.dialog.confirm({
            title: '更多操作',
            content: ['保存图片到相册'],
            ok: {
                text: '确认',
                callback: () => {
                    alert('保存成功')
                },
            },
            cancel: {
                text: '取消',
            },
        });
    }

    render() {
        return (
            <OverlayContainer
                ref={(oc) => { this.oc = oc }}
                defaultClickClose={true}>
                <TouchableWithoutFeedback onLongPress={this.onLongPress.bind(this)}>
                    <Image
                        resizeMode={Image.resizeMode.contain}
                        style={{
                            width: 340 * scaleX,
                            height: 250 * scaleX,
                            alignSelf: 'center',
                        }}
                        source={{uri: this.props.url}}/>
                </TouchableWithoutFeedback>
                <Dialog ref={(dialog)=>{this.dialog=dialog}}/>
            </OverlayContainer>
        );
    }
}
