import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'

const MyPosts = (props) => {

    
    let PostsElements = props.posts.map( post => <Post massage={post.massage} likes={post.likes}/> );

    let newPostElement = React.createRef();

    let onAddPost = () =>{
        props.addPost ();
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}> 
                <h3>My posts</h3>
          <div>
              <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>    
          </div>
                <div className={s.posts}>
                   {PostsElements}
                </div>
            </div>
    );
}


export default MyPosts;