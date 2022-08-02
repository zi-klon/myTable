import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import Store from './redux/reducer';
import Thunk from 'redux-thunk';

const middleware = applyMiddleware(Thunk);

export default createStore(combineReducers({Store}), compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // добавил для отслеживания изменения стора Redux
));