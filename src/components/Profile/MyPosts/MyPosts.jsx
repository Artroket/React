import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    
    let PostsElements = props.posts.map( post => <Post massage={post.massage} likes={post.likes}/> );


    return (
        <div className={s.postBlock}> 
                <h3>My posts</h3>
          <div>
              <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>    
          </div>
                <div className={s.posts}>
                   {PostsElements}
                </div>
            </div>
    );
}


export default MyPosts;