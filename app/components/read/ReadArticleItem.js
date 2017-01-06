/**
 * Created by mifind on 2017/1/5.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import {fetchEssayDetailInfo} from './Fun'
export default class ReadArticleItem extends Component {
    constructor() {
        super();
        this.state = {};
    }

    shouldComponentUpdate(nextProps) {
        let essay = this.props.essay;
        let serial = this.props.serial;
        let question = this.props.question;
        if (essay === nextProps.essay || serial === nextProps.serial || question === nextProps.question) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        let essay = this.props.essay;
        let serial = this.props.serial;
        let question = this.props.question;
        return (
            <ScrollView style={{padding:10,marginTop:10,backgroundColor:'white'}}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={()=>fetchEssayDetailInfo(essay.content_id,'1',this)}>
                        <View style={styles.item}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
                                <Text style={{color:'#333',fontSize:18,width:240}}>{essay.hp_title}</Text>
                                <Image style={styles.img} source={require('../../images/essay_image.png')}/>
                            </View>
                            <Text style={{color:'#333',fontSize:14,marginTop:8}}>{essay.author[0].user_name}</Text>
                            <Text style={{color:'#333',fontSize:14,marginTop:8}}>{essay.guide_word}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>fetchEssayDetailInfo(serial.id,'2',this)}>
                        <View style={[styles.item,{marginTop:20}]}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
                                <Text style={{color:'#333',fontSize:18,width:240}}>{serial.title}</Text>
                                <Image style={styles.img} source={require('../../images/serial_image.png')}/>
                            </View>
                            <Text style={{color:'#333',fontSize:14,marginTop:8}}>{serial.author.user_name}</Text>
                            <Text style={{color:'#333',fontSize:14,marginTop:8}}>{serial.excerpt}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>fetchEssayDetailInfo(question.question_id,'3',this)}>
                        <View style={[styles.item,{marginTop:20}]}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
                                <Text style={{color:'#333',fontSize:18,width:240}}>{question.question_title}</Text>
                                <Image style={styles.img} source={require('../../images/question_image.png')}/>
                            </View>
                            <Text style={{color:'#333',fontSize:14,marginTop:8}}>{question.answer_title}</Text>
                            <Text style={{color:'#333',fontSize:14,marginTop:8}}>{question.answer_content}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{height:135,backgroundColor:'white',marginTop:10}}/>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
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
    item: {
        flexDirection: 'column',
    },
    img: {
        width: 88 / 2,
        height: 41 / 2,
        marginTop: 3
    }
});