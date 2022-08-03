export default function (dispatch, {history}) {
    return {
        gotoTable: () => history.push('/table')
    };
}