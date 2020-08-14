import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
                My posts
          <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
          </div>
                <div className={s.posts}>
                   <Post massage='Hi bitches' likes='66'/>
                   <Post massage='There is my first post' likes='4'/>
                   <Post/>
                </div>
            </div>
    );
}


export default MyPosts;