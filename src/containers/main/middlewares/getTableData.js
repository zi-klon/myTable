import Fetch from '../../../api/fetch';
import SetTableData from '../../../redux/actions/setTableData';

export default function getTableData(){
    return async dispatch => {
        const data = await Fetch();
        const sortedData = data.sort((a, b) =>a.episode_id - b.episode_id);

        sessionStorage.setItem('savedTableData', JSON.stringify(sortedData));

        dispatch(SetTableData(sortedData));
    };
}