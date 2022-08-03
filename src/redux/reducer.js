const defaultState = {
    tableData: [],
    form: {},
    modal: {
        display: false,
        message: null,
        confirm: 'Да',
        decline: 'Нет',
        canReject: true,
        resolve: {}
    }
};

export default function Reducer(state = defaultState, {type, payload}) {

    switch (type) {
        case 'SET_TABLE_DATA':
            return {
                ...state,
                tableData: payload
            };

        case 'CLEAR_TABLE_DATA':
            return {
                ...state,
                tableData: []
            };

        case 'CLOSE_MODAL':
            return {
                ...state,
                modal: defaultState.modal
            };

        case 'OPEN_MODAL':
            return {
                ...state,
                modal: {
                    message: payload.message,
                    confirm: payload.confirm,
                    decline: payload.decline,
                    canReject: payload.canReject,
                    resolve: payload.resolve,
                    display: true
                }
            };
    }
    return state;
}