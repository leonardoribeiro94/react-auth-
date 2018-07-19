export const authenticate = (email, password) => ({
    type: "POST_USER_AUTHENTICATE_API",
    email,
    password
});

export const create = (name, email, password) => ({
    type: "POST_USER_CREATE_API",
    name,
    email,
    password
});