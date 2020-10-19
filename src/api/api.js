import * as axios from 'axios';

const instance = axios.create ({ 
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "aa4a725e-6775-4233-9d6d-ee3be6a419f8"
    }
});

export const authAPI = {
    me(){
        return instance.get('auth/me')
        .then(response => response.data);
    }
}

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10){
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response =>  response.data);
},
    follow(userId) {
        return instance.post (`follow/` + userId)
        .then(response =>  response.data);
},
    unfollow(userId) {
        return instance.delete (`follow/` + userId)
        .then(response =>  response.data);
},
    getProfile(userId){
        return profileAPI.getProfile(userId);
    }
}


export const profileAPI = {
    getProfile(userId){
        return instance.get('profile/'+ userId);
    },
    getStatus(userId){
        return instance.get('profile/status/'+ userId);
    },
    updateStatus(status){
        return instance.put('profile/status', {status});
    }
}

