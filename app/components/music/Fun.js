/**
 * Created by mifind on 2016/1/12.
 */
import {getMusicIdList, getMusicDetail} from '../../network/music'
export function fetchMusicList(self) {
    getMusicIdList().then(data => {
        self.setState({
            idlist: data
        })
    }).catch(() => {
        console.warn('加载失败');
    });
}

export function fetchMusicDetail(self, index: string) {
    getMusicDetail(index).then(data => {
        self.setState({
            data: data
        })
    }).catch(() => {
        console.warn('加载失败');
    });
}
