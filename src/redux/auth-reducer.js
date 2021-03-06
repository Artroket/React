import { authAPI } from '../api/api';

const SET_USER_DATA ='SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
    
}

const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthUserData =() => {
    return (dispatch) =>{
        authAPI.me()
        .then(response =>{ 
            if (response.resultCode === 0){
                let {id, email, login } = response.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
    }
}


export const login = (email, password, rememberMe) => {
    return (dispatch) =>{
        authAPI.login(email, password, rememberMe)
        .then(response =>{ 
            if (response.data.resultCode === 0){
               dispatch(getAuthUserData());
            }
        });
    }
}

export const logout = () => {
    return (dispatch) =>{
        authAPI.logout()
        .then(response =>{ 
            if (response.data.resultCode === 0){
                dispatch(setUserData(null, null, null, false));
            }
        });
    }
}

export default authReducer;