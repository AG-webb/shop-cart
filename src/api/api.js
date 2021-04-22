import * as axios from 'axios';

let instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

export const UsersApi = {
    getUsers() {
        return instance.get("users")
        .then(response => {
            return response.data;
        })
    }
}