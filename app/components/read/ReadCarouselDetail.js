/**
 * Created by mifind on 2017/1/4.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import resources from '../../common/commonResources'
import NavigationBar from '../common/NavigationBar'
export default class ReadCarouselDetail extends Component {
    constructor() {
        super();
        this.state = {};

    }

    renderListener() {
        if (this.props.essayDetail.audio) {
            return (
                <TouchableWithoutFeedback onPress={()=>alert('收听：'+this.props.essayDetail.audio)}>
                    <View style={{flexDirection: 'row',alignItems:'center'}}>
                        <Image style={{width:32,height:32}} source={require('../../images/article_play.png')}/>
                        <Text style={styles.text_s}>收听</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        } else {
            return (
                <View/>
            )
        }
    }

    renderContent() {
        let essayDetail = this.props.essayDetail;
        let type = this.props.type;
        if (type === '1') {
            return (
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:9}}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={styles.headimg} resizeMode={'cover'}
                                   source={essayDetail.author[0].web_url===''&&essayDetail.wb_img_url===''
                                   ?require('../../images/loading_12.png'):
                                   {uri:essayDetail.author[0].web_url||essayDetail.wb_img_url}}/>
                            <View style={{flexDirection:'column',justifyContent:'space-around',marginLeft:5}}>
                                <Text style={[{marginTop:4},styles.text_author]}>{essayDetail.hp_author}</Text>
                                <Text style={[{marginBottom:4},styles.text_s]}>{essayDetail.hp_makettime}</Text>
                            </View>
                        </View>
                        {this.renderListener()}
                    </View>
                    <View style={{padding:9}}>
                        <Text style={{fontSize:18,color:'#333',marginBottom:8}}>{essayDetail.hp_title}</Text>
                        <Text style={styles.content}>{essayDetail.hp_content}</Text>
                        <Text
                            style={[{marginTop:10,marginBottom:20},styles.text_s]}>{essayDetail.hp_author_introduce}</Text>
                    </View>
                </View>
            )
        } else if (type === '2') {
            console.log(essayDetail)
            return (
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:9}}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={styles.headimg} resizeMode={'cover'}
                                   source={essayDetail.author.web_url===''&&essayDetail.author_list[0].web_url===''
                                   ?require('../../images/individual_center.png'):
                                   {uri:essayDetail.author.web_url||essayDetail.author_list[0].web_url}}/>
                            <View style={{flexDirection:'column',justifyContent:'space-around',marginLeft:5}}>
                                <Text style={[{marginTop:4},styles.text_author]}>{essayDetail.author.user_name}</Text>
                                <Text style={[{marginBottom:4},styles.text_s]}>{essayDetail.maketime}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{padding:9}}>
                        <Text style={{fontSize:18,color:'#333',marginBottom:8}}>{essayDetail.title}</Text>
                        <Text style={styles.content}>{essayDetail.content}</Text>
                        <Text
                            style={[{marginTop:10,marginBottom:20},styles.text_s]}>{essayDetail.charge_edt}</Text>
                    </View>
                </View>
            )
        } else if (type === '3') {
            return (
                <View style={{padding:9}}>
                    <Text
                        style={{fontSize:18,color:'#333',marginBottom:8,marginTop:5}}>{essayDetail.question_title}</Text>
                    <Text style={[{marginBottom:10},styles.content]}>{essayDetail.question_content}</Text>
                    <View style={styles.horizonLine}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                        <Text style={styles.content}>{essayDetail.answer_title}</Text>
                        <Text style={styles.text_s}>{essayDetail.question_makettime}</Text>
                    </View>
                    <Text
                        style={[{marginBottom:10,marginTop:10},styles.content]}>{essayDetail.answer_content}</Text>
                    <Text
                        style={[{marginTop:10,marginBottom:20},styles.text_s]}>{essayDetail.charge_edt}</Text>
                </View>
            )
        }
    }

    renderComment(){
        return(
            <View style={{height:100,backgroundColor:'white'}}/>
        )
    }

    render() {
        return (
            <View style={{flex:1}}>
                <NavigationBar navigator={this.props.navigator}
                               title={this.props.title}
                />
                <ScrollView
                    removeClippedSubviews={true}>
                    {this.renderContent()}
                    <View style={[styles.horizonLine,{width:resources.screen.screenWidth}]}/>
                    {this.renderComment()}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headimg: {
        width: 43,
        height: 43,
        borderRadius: 22
    },
    text_author: {
        fontSize: 11,
        color: 'rgba(167,199,254,1)'
    },
    text_s: {
        fontSize: 11,
        color: '#bbb'
    },
    content: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20
    },
    horizonLine: {
        backgroundColor: '#adadad',
        height: 0.5,
        width: resources.screen.screenWidth - 18,
        alignSelf: 'center'
    },
});