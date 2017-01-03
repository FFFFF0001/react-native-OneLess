/**
 * Created by mifind on 2016/12/28.
 */
import {getReadingImageList} from '../../network/reading'
export function fetchReadingImageList(self) {
    getReadingImageList().then(data => {
        self.setState({
            data:data
        })
    }).catch(() => {
        console.warn('加载失败');
    });
}
