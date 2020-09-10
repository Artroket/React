const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 0, photoURL: 'https://bipbap.ru/wp-content/uploads/2018/02/OiM0hEX6M.jpg',
         followed: true, fullName: 'ya ya', status: 'jsdhfl', location: { city: 'Dnepr', country: 'Ukraine'}},
        {id: 1, photoURL: 'https://cs16planet.ru/steam-avatars/images/avatar2700.jpg', 
        followed: true, fullName: 'ne ya', status: 'nsd.sd', location: { city: 'Kiev', country: 'Ukraine'}},
        {id: 2, photoURL: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
         followed: false, fullName: 'ahaha haha', status: 'mldfsn ', location: { city: 'Jerusalem', country: 'Israel'}}
     ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
     case FOLLOW:  {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id == action.userId){
                    return {...u, followed: true}
                }
                return u;
            })
        }
     }
     case UNFOLLOW:  {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id == action.userId){
                    return {...u, followed: false}
                }
                return u;
            })
        }
    }
    case SET_USERS:  {
        return {
            ...state,
            users: [...state.users, ...action.users]
        }
    }
     default:
         return state;
    }
}

export const followAC = (userId) => ({type: 'FOLLOW', userId})

export const unfollowAC = (userId) => ({type: 'UNFOLLOW', userId})


export const setUsersAC = (users) => ({type: 'SET-USERS', users})


export default usersReducer;