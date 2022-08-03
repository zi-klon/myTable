import GetTableData from './actions/getTableData';
import DeleteTableRow from './actions/deleteTableRow';
import ClearTable from './actions/clearTable';

export default function (dispatch, {history}) {
    return {
        gotoForm: () => history.push('/form'),
        getTableData: () => dispatch(GetTableData()),
        deleteTableRow: id => dispatch(DeleteTableRow(id)),
        clearTable: () => dispatch(ClearTable())
    }
}