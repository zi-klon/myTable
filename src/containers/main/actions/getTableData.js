import Fetch from '../../../api/fetch';
import SetTableData from './setTableData';

export default function getTableData(){
    return async dispatch => {
        const data = await Fetch();
        const sortedData = data.sort((a, b) =>a.episode_id - b.episode_id);
        dispatch(SetTableData(sortedData));
    };
}