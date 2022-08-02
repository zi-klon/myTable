export default function TableDispatcher(dispatch, {history}) {
    return {
        gotoTable: () => history.push('/table')
    };
}