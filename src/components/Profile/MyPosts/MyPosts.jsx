import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
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
                   <Post massage='Hi bitches' likes='66'/>
                   <Post massage='There is my first post' likes='4'/>
                   <Post/>
                </div>
            </div>
    );
}


export default MyPosts;