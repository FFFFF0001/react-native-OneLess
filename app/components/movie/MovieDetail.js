/**
 * Created by mifind on 2017/1/10.
 */
import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
} from 'react-native';
import resources from '../../common/commonResources'
import NavigationBar from '../common/NavigationBar'
import {fetchMovieDetail} from './Fun'
import MovieStory from './MovieStory'
let StyleSheet = require('../../common/commonStyleSheet')
const screenWidth = resources.screen.screenWidth
export default class MovieDetail extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            story: {
                title: '',
                content: '',
                input_date: '',
                user: {
                    user_name: '',
                    web_url: ''
                }
            },
        };
    }

    componentWillMount() {
        fetchMovieDetail(this.props.id, this)
    }

    render() {
        return (
            <View style={{flex:1}}>
                <NavigationBar navigator={this.props.navigator}
                               title={this.props.title}/>
                <ScrollView>
                    <View style={{flexDirection:'row'}}>
                        <Image style={styles.detailCover}
                               source={this.state.data.detailcover===''?require('../../images/loading_12.png'):{uri:this.state.data.detailcover}}/>
                        <Text
                            style={styles.movieScoreText}>{this.state.data.score}</Text>
                        <Image style={styles.movieScoreImg} source={require('../../images/score_line.png')}/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                        <View
                            style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginRight: 15}}>
                            <Image style={{width:30,height:30,marginRight:5}}
                                   source={require('../../images/plz_grade_pressed.png')}/>
                            <Text style={styles.textGray}>评分</Text>
                        </View>
                        <Image style={{width:38,height:38,marginRight:10}}
                               source={require('../../images/share_image.png')}/>
                    </View>
                    <View style={styles.horizonLine}/>
                    <View style={{padding:15,backgroundColor:'rgba(247,247,247,1)'}}>
                        <Text style={styles.textGray}>电影故事</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:9}}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={styles.headimg} resizeMode={'cover'}
                                   source={this.state.story.user.web_url===''?require('../../images/loading_12.png'):{uri:this.state.story.user.web_url}}/>
                            <View style={{flexDirection:'column',justifyContent:'space-around',marginLeft:5}}>
                                <Text
                                    style={[{marginTop:4},styles.text_author]}>{this.state.story.user.user_name}</Text>
                                <Text style={[{marginBottom:4},styles.text_s]}>{this.state.story.input_date}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image style={{width:33,height:33}} resizeMode={'cover'}
                                   source={require('../../images/laud_selected.png')}/>
                            <Text
                                style={styles.text_s}>{this.state.story.praisenum}</Text>
                        </View>
                    </View>
                    <Text
                        style={{marginLeft:15,fontSize:15,color:'#222',fontFamily:'Helvetica',fontStyle:'italic'}}>{this.state.story.title}</Text>
                    <MovieStory
                        content={this.state.story.content}
                    />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    detailCover: {
        width: screenWidth,
        height: screenWidth * 0.56,
    },
    movieScore: {
        flexDirection: 'column'
    },
    movieScoreText: {
        backgroundColor: '#00000000',
        color: 'rgba(227,87,92,1)',
        fontSize: 40,
        fontFamily: 'Verdana',
        fontStyle: 'italic',
        fontWeight: 'bold',
        ios: {
            marginLeft: -65,
            marginTop: screenWidth * 0.56 - 70,
        },
        android: {
            marginLeft: -60,
            marginTop: screenWidth * 0.56 - 70,
        }
    },
    movieScoreImg: {
        width: 40,
        height: 32,
        ios: {
            marginLeft: -50,
            marginTop: screenWidth * 0.56 - 38,
        },
        android: {
            marginLeft: -44,
            marginTop: screenWidth * 0.56 - 38,
        }
    },
    horizonLine: {
        backgroundColor: '#dddddd',
        height: 0.5,
        width: screenWidth,
    },
    textGray: {
        fontSize: 11,
        color: '#aaa'
    },
    headimg: {
        width: 50,
        height: 50,
        borderRadius: 22
    },
    text_author: {
        fontSize: 12,
        color: 'rgba(167,199,254,1)'
    },
    text_s: {
        fontSize: 12,
        color: '#bbb'
    },
});