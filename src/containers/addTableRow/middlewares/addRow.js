import SetTableData from '../../../redux/actions/setTableData';
import ClearForm from '../../../redux/actions/clearForm';
import CreateModal from '../../modal/middlewares/createModal';
import ValidateForm from './validateForm';

export default function AddTableRow(gotoTable) {
    return async (dispatch, getStore) => {
        const {
            Store: {
                form,
                tableData
            }
        } = getStore();

        if(!await dispatch(ValidateForm(form))) {
            return false;
        }

        const newTableData = [...tableData, {
            ...form,
            episode_id: tableData?.length + 1
        }];

        sessionStorage.clear();
        sessionStorage.setItem('savedTableData', JSON.stringify(newTableData));

        dispatch(SetTableData(newTableData));
        dispatch(ClearForm());

        const modalAnswer = await dispatch(CreateModal({
            message: 'Эпизод успешно добавлен',
            confirm: 'Ok',
            canReject: false
        }));

        modalAnswer && gotoTable();
    }
}