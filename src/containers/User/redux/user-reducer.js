const initialState = {
    userData: {},
    errors: []
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case "POST_USER_AUTHENTICATE":
            console.warn("api ", action);
            return {
                ...state,
                userData: action.payload.data
            };

            case "POST_USER_CREATE":
            console.warn("api ", action);
            return {
                ...state,
                userData: action.payload.data
            };

        default:
            return {
                ...state
            };
    }
}

export default user;