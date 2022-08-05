const defaultState = {
    tableData: [],
    form: {
        episode: null,
        title: null,
        air_date: null,
        season: null
    },
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

        case 'SET_SEASON':
            return {
                ...state,
                form: {
                    ...state.form,
                    season: payload
                }
            };

        case 'SET_TITLE':
            return {
                ...state,
                form: {
                    ...state.form,
                    title: payload
                }
            };

        case 'SET_DATE':
            return {
                ...state,
                form: {
                    ...state.form,
                    air_date: payload
                }
            };

        case 'SET_EPISODE':
            return {
                ...state,
                form: {
                    ...state.form,
                    episode: payload
                }
            };

        case 'CLEAR_FORM':
            return {
                ...state,
                form: {}
            };
    }
    return state;
}