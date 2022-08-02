const defaultState = {
    tableData: [],
    form: {}
};

export default function Reducer(state = defaultState, {type, payload}) {

    switch (type) {
        case 'TABLE':
            return {
                ...state,
                tableData: payload
            };
    }
    return state;
}