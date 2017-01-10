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
                content: ''
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
                            <Image style={{width:40,height:40,marginRight:5}}
                                   source={require('../../images/plz_grade_pressed.png')}/>
                            <Text style={styles.textGray}>评分</Text>
                        </View>
                        <Image style={{width:46,height:46,marginRight:10}}
                               source={require('../../images/share_image.png')}/>
                    </View>
                    <View style={styles.horizonLine}/>
                    <View style={{padding:15,backgroundColor:'rgba(247,247,247,1)'}}>
                        <Text style={styles.textGray}>电影故事</Text>
                    </View>
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
        fontSize: 13,
        color: '#666'
    }
});