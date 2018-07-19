import axios from "axios";
import {
    USER_URL
} from "../constants/user-endpoint";

class UserService {
    authenticate = async (email, password) => {
        let response = await axios.post(`${USER_URL}/authenticate`, {
            email,
            password
        });
        return response;
    }

    create = async (name, email, password) => {
        let response = await axios.post(`${USER_URL}/`, {
            name,
            email,
            password
        });
        return response;
    }

    isAuthenticate = () => localStorage.getItem("user.token") ? true : false;

    setUserAndToken = (token, dataUser) => {
        localStorage.setItem("user.token", JSON.stringify(token));
        localStorage.setItem("user.data", JSON.stringify(dataUser));
    };
}

export default UserService;