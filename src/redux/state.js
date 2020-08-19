import { rerenderEntireTree } from "../render";

  
  let state={
      profilePage:{
        posts: [
            { id: 0, massage: 'Hi bitches', likes: '66' },
            { id: 1, massage: 'There is my first post', likes: '4'}
        ],
        newPostText: ''
      },
      dialogsPage:{
        massages: [
            { id: 0, massage: 'hi' },
            { id: 1, massage: 'ne hi' },
            { id: 2, massage: 'ff' },
            { id: 3, massage: 'vbcb' }
          ],
          dialogs:  [
            { id: 0, name: 'Sawed massages' },
            { id: 1, name: 'Artem' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Nastya' },
            { id: 4, name: 'Olya' }
          ]
      }  
  }

export  let addPost = () => {
    let newPost = {
        id: 2,
        massage: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
  }


export let updateNewPostText =(newText) =>{
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
    }


  export default state;