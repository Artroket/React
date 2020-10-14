import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img height='220px' width='100%' src='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_DFX8048_2280x819_Q40_wm_mini-1726x819__.jpg' />
            </div>
            <div className={s.descriptionBlock}>

                <img height='150px' width='250px' src={props.profile.photos.large} />
              

            </div>
        </div>
    );
}


export default ProfileInfo;