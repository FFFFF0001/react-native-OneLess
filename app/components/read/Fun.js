/**
 * Created by mifind on 2016/12/28.
 */
import {getReadingImageList, getReadingImageDetail} from '../../network/reading'
export function fetchReadingImageList(self) {
    getReadingImageList().then(data => {
        self.setState({
            data: data
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
