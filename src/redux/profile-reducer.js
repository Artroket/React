const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 0, massage: 'Hi bitches', likes: '66' },
        { id: 1, massage: 'There is my first post', likes: '4' }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 2,
                massage: state.newPostText,
                likesCount: 0
            };
            return {...state, 
            posts: [...state.posts,newPost],
            newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {...state,
            newPostText: action.newText
            };
        }
        default:
            return state;
    }
    
}

export const addPostActionCreator = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;