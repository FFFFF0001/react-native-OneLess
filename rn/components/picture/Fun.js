/**
 * Created by mifind on 2016/12/28.
 */
import {getLatestPictureIdList} from '../../network/picture'
export function fetchData(self) {
    getLatestPictureIdList().then(data => {
        console.log(data)
    }).catch(() => {
        console.warn('加载失败');
    });
}