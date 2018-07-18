import axios from "axios";
import userUrl from "../constants/user-endpoint";

export const authenticate = async (email, password) => {
    let response = await axios.post(`${userUrl}/authenticate`, {
        email,
        password
    });

    return response;
}