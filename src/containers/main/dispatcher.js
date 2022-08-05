import GetTableData from './middlewares/getTableData';
import DeleteTableRow from './middlewares/deleteTableRow';
import ClearTable from './middlewares/clearTable';

export default function (dispatch, {history}) {
    return {
        gotoForm: () => history.push('/form'),
        getTableData: () => dispatch(GetTableData()),
        deleteTableRow: id => dispatch(DeleteTableRow(id)),
        clearTable: () => dispatch(ClearTable())
    }
}