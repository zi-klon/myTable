import OpenModal from './openModal';
import CloseModal from './closeModal';

export default function CreateModal(data) {
    return async dispatch => {

        const createPromise = () => {
            let resolve;

            const promise = new Promise((_resolve) => {
                resolve = _resolve;
            });
            return [promise, resolve];
        };
        const [promise, resolve] = createPromise();

        dispatch(OpenModal({
            ...data,
            resolve
        }));

        let result;
        try {
            result = await promise;
        } finally {
            dispatch(CloseModal());
        }

        return result;
    }
}