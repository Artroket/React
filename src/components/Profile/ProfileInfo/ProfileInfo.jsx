import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img height='220px' width='100%' src='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_DFX8048_2280x819_Q40_wm_mini-1726x819__.jpg' />
            </div>
            <div className={s.descriptionBlock}>

                <img height='150px' width='250px' src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png' />

            </div>
        </div>
    );
}


export default ProfileInfo;