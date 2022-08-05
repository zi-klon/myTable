import CreateModal from '../../modal/middlewares/createModal';


export default function validateForm(form) {
    return async dispatch => {

        const fields = {
            episode: 'Номер эпизода',
            title: 'Название эпизода',
            air_date: 'Дата выхода',
            season: 'Номер сезона'
        };

        const errors = Object.entries(form)
            .filter(([key, value]) => !value)
            .map(([key, value]) => `«${fields[key]}»`);

        if(errors.length) {
            dispatch(CreateModal({
                message: `Не ${errors.length > 1 ? 'заполнены поля' : 'заполнено поле'} ${errors.join(', ')}`,
                confirm: 'Закрыть',
                canReject: false
            }));

            return false;
        }

        return true;
    }
}