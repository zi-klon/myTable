import GetTableData from './actions/getTableData';

export default function TableDispatcher(dispatch, {history}) {
    return {
        gotoForm: () => history.push('/form'),
        getTableData: () => dispatch(GetTableData())
    }
}