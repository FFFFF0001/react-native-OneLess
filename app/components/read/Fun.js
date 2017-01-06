/**
 * Created by mifind on 2016/12/28.
 */
import {
    getReadingImageList,
    getReadingImageDetail,
    getEssayDetailInfo,
    getSerialDetailInfo,
    getQuestionDetailInfo,
    getLatestArticleList
} from '../../network/reading'
import ReadCarouselDetail from './ReadCarouselDetail'
export function fetchReadingImageList(self) {
    getReadingImageList().then(data => {
        self.setState({
            data: data
        })
    }).catch(() => {
        console.warn('加载失败');
    });
}

export function fetchLatestArticleList(self) {
    getLatestArticleList().then(data => {
        self.setState({
            essay: data.essay,
            question: data.question,
            serial: data.serial,
        })
    }).catch(() => {
        console.warn('加载失败');
    });
}

export function fetchReadingImageDetail(id: string, self) {
    getReadingImageDetail(id).then(data => {
        self.setState({
            details: data
        })
    }).catch(() => {
        console.warn('加载失败');
    });
}

export function fetchEssayDetailInfo(id: string, type: string, self) {
    if (type === '1') {
        //文章
        getEssayDetailInfo(id).then(data => {
            //请求并跳转
            self.props.navigator.push({
                component: ReadCarouselDetail,
                type: type,
                essayDetail: data,
                title: '短篇'
            })
        }).catch(() => {
            console.warn('加载失败');
        });
    } else if (type === '2') {
        //连载
        getSerialDetailInfo(id).then(data => {
            //请求并跳转
            self.props.navigator.push({
                component: ReadCarouselDetail,
                type: type,
                essayDetail: data,
                title: '连载'
            })
        }).catch(() => {
            console.warn('加载失败');
        });
    } else if (type === '3') {
        //问答
        getQuestionDetailInfo(id).then(data => {
            //请求并跳转
            self.props.navigator.push({
                component: ReadCarouselDetail,
                type: type,
                essayDetail: data,
                title: '问题'
            })
        }).catch(() => {
            console.warn('加载失败');
        });
    }

}
