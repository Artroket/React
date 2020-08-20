import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'

const MyPosts = (props) => {

    
    let PostsElements = props.posts.map( post => <Post massage={post.massage} likes={post.likes}/> );

    let newPostElement = React.createRef();

    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () =>{
        let action = updateNewPostTextActionCreator(newPostElement.current.value);
        props.dispatch(action);
    }

    return (
        <div className={s.postBlock}> 
                <h3>My posts</h3>
          <div>
              <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>    
          </div>
                <div className={s.posts}>
                   {PostsElements}
                </div>
            </div>
    );
}


export default MyPosts;