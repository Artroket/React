const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, massage: 'Hi bitches', likes: '66' },
                { id: 1, massage: 'There is my first post', likes: '4' }
            ],
            newPostText: ''
        },
        dialogsPage: {
            massages: [
                { id: 0, massage: 'hi' },
                { id: 1, massage: 'ne hi' },
                { id: 2, massage: 'ff' },
                { id: 3, massage: 'vbcb' }
            ],
            dialogs: [
                { id: 0, name: 'Sawed massages' },
                { id: 1, name: 'Artem' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Nastya' },
                { id: 4, name: 'Olya' }
            ]
        }
    },
    _callSubscriber() { },



    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },



    _addPost() {
        let newPost = {
            id: 2,
            massage: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT ) {
            this._updateNewPostText(action.newText);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })




export default store;