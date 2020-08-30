import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
            ],
            newMassageBody: "" 
        },
        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);         
    }
}




export default store;