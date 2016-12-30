/**
 * Created by mifind on 2016/12/30.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import res from '../../common/commonResources'
import {fetchDetail} from './Fun'
var StyleSheet = require('../../common/commonStyleSheet')
const scaleX = res.screen.scaleX;
export default class PicItem extends Component {
    constructor() {
        super();
        this.state = {
            hp_img_url: '',
            hp_title: '',
            hp_author: '',
            hp_content: '',
            hp_makettime: '',
            praisenum: ''
        };
    }

    componentWillMount() {
        fetchDetail(this, this.props.index);
    }

    render() {
        return (
            <View style={styles.containers}>
                <ScrollView horizontal={false}>
                    <View style={styles.containerOn}>
                        <Image style={styles.picture}
                               source={this.state.hp_img_url===''?require('../../images/picitem_default.png'):{uri: this.state.hp_img_url}}/>
                        <View
                            style={{backgroundColor:'white',flexDirection:'row',justifyContent:'space-between',marginTop:5,padding:3}}>
                            <Text style={{color:'#ccc',fontSize:12}}>{this.state.hp_title}</Text>
                            <Text style={{color:'#ccc',fontSize:12}}>{this.state.hp_author}</Text>
                        </View>
                        <View style={{padding:7}}>
                            <Text style={styles.contentText}>{this.state.hp_content}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                            <Text style={{color:'#ccc',fontSize:12}}>{this.state.hp_makettime}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.bottomContent}>
                    <TouchableWithoutFeedback onPress={()=>alert('小记')}>
                        <View style={{
                       flexDirection:'row',
                       alignItems:'center'
                   }}>
                            <Image style={{width:44,height:44}} source={require('../../images/diary.png')}/>
                            <Text style={{marginLeft:-5,color:'#ccc',fontSize:12}}>小 记</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{
                       flexDirection:'row',
                       alignItems:'center'
                   }}>
                        <View style={{
                           flexDirection:'row',
                           alignItems:'center'
                        }}>
                            <TouchableWithoutFeedback onPress={()=>alert('收藏')}>
                                <View style={{
                               flexDirection:'row',
                               alignItems:'center',
                               marginRight:15
                            }}>
                                    <Image style={{width:44,height:44}} source={require('../../images/laud.png')}/>
                                    <Text style={{marginLeft:-5,color:'#ccc',fontSize:12}}>{this.state.praisenum}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={()=>alert('分享')}>
                                <Image style={{width:44,height:44}} source={require('../../images/share_image.png')}/>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const scaleY = res.screen.scaleY;
const styles = StyleSheet.create({
    containers: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 10 * scaleY,
        paddingLeft: 10 * scaleX,
        paddingRight: 10 * scaleX,
        paddingBottom: 20 * scaleY,
        justifyContent: 'space-between',
    },
    containerOn: {
        flexDirection: 'column',
        paddingLeft: 5 * scaleX,
        paddingRight: 5 * scaleX,
        paddingTop: 10 * scaleY,
        paddingBottom: 10 * scaleY,
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

    },
    picture: {
        width: 340 * scaleX,
        height: 250 * scaleY,
        alignSelf: 'center'
    },
    contentText: {
        color: '#666',
        fontSize: 13.5,
        letterSpacing: .3,
        android: {
            lineHeight: 26
        },
        ios: {
            lineHeight: 20
        }
    },
    bottomContent: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        top: res.screen.screenHeight - 200,
        backgroundColor: 'white',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});