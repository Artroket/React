import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div>

            <div className={s.item}>
                <img src='https://cs16planet.ru/steam-avatars/images/avatar2700.jpg' />
                        {props.massage}
          </div>
            <div>
                <img width='20px' height='20px' src='https://icons.iconarchive.com/icons/iconsmind/outline/256/Like-icon.png'/> {props.likes}
            </div>
        </div>
    );
}
 

export default Post;