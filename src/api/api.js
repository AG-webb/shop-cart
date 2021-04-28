import * as axios from 'axios';

let instance = axios.create({
    baseURL: "https://reqres.in/",
});

export const UsersApi = {
    getUsers(currentPage) {
        return instance.get(`api/users?page=${currentPage}?delay=1`)
        .then(response => {
            return response.data;
        })
    }
}

export const ProfileApi = {
    getProfile(userId) {
        return instance.get(`api/users/${userId}?delay=1`)
        .then(response => {
            return response.data;
        })
    }
}