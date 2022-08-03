import SetTableData from './setTableData';
import CreateModal from '../../modal/actions/createModal';

export default function deleteTableRow({id, title}) {
    return async (dispatch, getStore) => {

        const modalAnswer = await dispatch(CreateModal({
            message: `Вы уверены, что хотите удалить эпизод «${title}»?`,
            confirm: 'Да',
            decline: 'Нет'
        }));

        if(modalAnswer) {
            const {
                Store: {
                    tableData = []
                }
            } = getStore();

            const filteredData = tableData.filter(({episode_id}) => id !== episode_id);
            dispatch(SetTableData(filteredData));
        }
    }
}