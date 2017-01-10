/**
 * Created by mifind on 2016/12/28.
 */
import {getMovieList, getMovieDetail, getMovieStory} from '../../network/movie'
export function fetchMovieList(id: string, self) {
    getMovieList(id).then(data => {
        if (id === 0) {
            self.setState({
                movies: data
            })
        } else {
            if (data.length > 0 && data[data.length - 1].cover !== '' && data[data.length - 1].score !== '') {
                self.loadMore = self.loadMore.concat(data)
                self.setState({
                    refreshFlag: self.state.refreshFlag++
                })
            }
        }
    }).catch(() => {
        console.warn('加载失败');
    });
}

export function fetchMovieDetail(id: string, self) {
    getMovieDetail(id).then(data => {
        self.setState({
            data: data
        })
    }).catch(() => {
        console.warn('加载失败');
    });
    getMovieStory(id).then(data => {
        self.setState({
            story: data.data[0]
        })
    }).catch(() => {
        console.warn('加载失败');
    });
}
