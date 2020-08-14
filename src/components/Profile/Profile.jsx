import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';



const Profile = () => {
    return (
        <div>
            <div>
                <img height='220px' width='1120px'  src='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_DFX8048_2280x819_Q40_wm_mini-1726x819__.jpg' />
            </div>
            <div className={s.ppd}>
            
                <img  height='150px' width='250px' src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png' />
              
            </div>
            <MyPosts />
        </div>

    );
}


export default Profile;