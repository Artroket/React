import React from 'react';
import s from './Post.module.css';


const Post = () => {
    return (
        <div>

            <div className={s.item}>
                <img src='https://cs16planet.ru/steam-avatars/images/avatar2700.jpg' />
                        post
          </div>
            <div>
                <img width='20px' height='20px' src='https://icons.iconarchive.com/icons/iconsmind/outline/256/Like-icon.png'/>
            </div>
        </div>
    );
}
 

export default Post;