/**
 * Created by mifind on 2016/12/28.
 */
import {getLatestPictureIdList, getPictureDetail} from '../../network/picture'
import store from '../../store/configStore'
import {changeOneSwipeState} from '../../actions/changeOneSwipeStateAction'
import PictureFactory from './PictureFactory'
export function fetchList(self) {
    getLatestPictureIdList().then(data => {
        console.log(data);
        self.setState({
            idlist: data
        })
    }).catch(() => {
        console.warn('加载失败');
    });
}

export function fetchDetail(self, index: string) {
    getPictureDetail(index).then(data => {
        self.setState({
            hp_img_url: data.hp_img_url,
            hp_title: data.hp_title,
            hp_author: data.hp_author,
            hp_content: data.hp_content,
            hp_makettime: data.hp_makettime,
            praisenum: data.praisenum
        })
    }).catch(() => {
        console.warn('加载失败');
    });
}

export function refreshList(self) {
    getLatestPictureIdList().then(data => {
        if (data[0] !== self.state.idlist[0]) {
            self.setState({
                idlist: data
            })
        }
        store.dispatch(changeOneSwipeState(true))
    }).catch(() => {
        console.warn('加载失败');
        store.dispatch(changeOneSwipeState(true))
    });
}

export function loadPicFactory(self) {
    self.props.navigator.push({
        component:PictureFactory,
    })
}