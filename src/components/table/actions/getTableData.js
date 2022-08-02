import Fetch from '../../../api/fetch';


export default function getTableData(){
    return async dispatch => {
        const data = await Fetch();
        console.log(data);
    };
}