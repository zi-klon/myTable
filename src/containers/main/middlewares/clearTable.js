import Clear from '../../../redux/actions/clearTable';

export default function ClearTable() {
    return dispatch => {

        sessionStorage.clear();

        dispatch(Clear());
    }
}