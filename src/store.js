import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./containers/User/redux/user-reducer";
import userSaga from "./containers/User/redux/user-saga"

const sagaMiddleware = new createSagaMiddleware();
const Store = createStore(
    combineReducers({
        userReducer
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(userSaga);

export default Store;