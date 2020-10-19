import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    
    return (
        <div>
            <div className={s.descriptionBlock}>
                {!props.profile.photos.large 
                ?<img height='150px' width='250px' src={'https://download.seaicons.com/download/i6077/custom-icon-design/pretty-office-3/custom-icon-design-pretty-office-3-accept-male-user.ico'} />
                :<img height='150px' width='250px' src={props.profile.photos.large} />}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

            </div>
        </div>
    );
}


export default ProfileInfo;