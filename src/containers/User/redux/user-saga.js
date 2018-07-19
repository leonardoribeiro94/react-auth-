import {
    put,
    call,
    all,
    fork,
    takeLatest
} from "redux-saga/effects";
import AuthService from "../../../services/auth-service";
const authService = new AuthService();

function* authenticateUser(action) {
    try {
        const response = yield call(authService.authenticate, action.email, action.password);

        if (response.status === 200) {
            yield call(authService.setUserAndToken,
                response.data.token, 
                response.data.result);

            return yield put({
                type: "POST_USER_AUTHENTICATE",
                payload: {
                    data: response
                }
            });
        };
    } catch (error) {
        console.warn("FAILURE", error);
    }
}

function* createUser(action) {
    try {
        const response = yield call(authService.create,
            action.name, action.email, action.password);

        console.log(response);
        if (response.status === 200) {
            return yield put({
                type: "POST_USER_CREATE",
                payload: {
                    data: response
                }
            });
        }
    } catch (error) {
        console.warn("FAILURE", error);
    }
}

export default function* rootSaga() {
    yield all([
        fork(takeLatest, "POST_USER_AUTHENTICATE_API", authenticateUser),
        fork(takeLatest, "POST_USER_CREATE_API", createUser)
    ]);
}