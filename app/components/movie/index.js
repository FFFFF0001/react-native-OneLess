/**
 * Created by mifind on 2016/12/28.
 */
import React, {Component} from 'react';
import {
    View,
    ListView,
    TouchableWithoutFeedback,
    Text,
    Image
} from 'react-native';
import res from '../../common/commonResources'
import {fetchMovieList} from './Fun'
import MovieDetail from './MovieDetail'
let StyleSheet = require('../../common/commonStyleSheet')
const screenWidth = res.screen.screenWidth;

export default class Movie extends Component {
    constructor() {
        super();
        this.loadMore = [];
        this.state = {
            movies: [],
            refreshFlag: 0
        };
    }

    componentWillMount() {
        fetchMovieList(0, this);
    }

    onMoviesItemClick(id, title) {
        this.props.navigator.push({
            component: MovieDetail,
            title: title,
            id: id
        })
    }

    _renderRow(rowData: string, sectionID: number, rowID: number) {
        if (rowData.cover !== '') {
            return (
                <TouchableWithoutFeedback onPress={this.onMoviesItemClick.bind(this,rowData.id,rowData.title)}>
                    <View style={{marginBottom:10,flexDirection:'row'}}>
                        <Image style={styles.movieItem}
                               resizeMode={'stretch'}
                               source={{uri:rowData.cover}}
                        />
                        <Text
                            style={styles.movieScore}>{rowData.score}</Text>
                        <Image style={styles.movieScoreImg} source={require('../../images/score_line.png')}/>
                    </View>
                </TouchableWithoutFeedback>
            )
        }else {
            return(<View/>)
        }
    }

    onLoadMore(data) {
        let length = data.length;
        if (length > 0) {
            let id = data[length - 1].id;
            fetchMovieList(id, this);
        }
    }

    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = this.state.movies.concat(this.loadMore);
        return (
            <View style={{flex:1,marginBottom:120}}>
                <ListView
                    dataSource={ds.cloneWithRows(data)}
                    renderRow={this._renderRow.bind(this)}
                    showsVerticalScrollIndicator={false}
                    enableEmptySections={true}
                    removeClippedSubviews={false}
                    onEndReached={this.onLoadMore.bind(this,data)}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    movieItem: {
        width: screenWidth,
        height: screenWidth / 2.5,
    },
    movieScore: {
        backgroundColor: '#00000000',
        color: 'rgba(227,87,92,1)',
        fontSize: 32,
        fontFamily: 'Verdana',
        fontStyle: 'italic',
        fontWeight: 'bold',
        ios: {
            marginLeft: -60,
            marginTop: screenWidth / 2.5 - 60,
        },
        android: {
            marginLeft: -60,
            marginTop: screenWidth / 2.5 - 60,
        }
    },
    movieScoreImg: {
        width: 40,
        height: 32,
        ios: {
            marginLeft: -45,
            marginTop: screenWidth / 2.5 - 38,
        },
        android: {
            marginLeft: -40,
            marginTop: screenWidth / 2.5 - 36,
        }
    }

});