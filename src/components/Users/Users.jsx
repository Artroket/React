import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/userpic.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users =  (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    return <div> 
            <div>
                {pages.map(p=>{
                   return  <span className={props.currentPage === p  && styles.selectedPage} 
                   onClick = {(e)=>{
                       props.onPageChanged(p);
                       }}>{p}</span>
                })}
            </div>
       {
       props.users.map( u => <div key={u.id}>
           <span>
                <div>
                    <NavLink to={'profile/'+u.id}>
                    <img  src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed 
                    ? <button onClick={()=>{
                        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {
                            withCredentials: true, 
                            headers: {
                                "API-KEY": "aa4a725e-6775-4233-9d6d-ee3be6a419f8"
                            }
                        })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                props.unfollow(u.id)
                            }
                        });
                    }}>Unfollow</button> 
                    : <button onClick={()=>{
                        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {},{
                            withCredentials: true,
                            headers: {
                                "API-KEY": "aa4a725e-6775-4233-9d6d-ee3be6a419f8"
                            }
                        })
                        .then(response => {
                            props.follow(u.id)
                        })        
                        }}>Follow</button>} 
                </div>
           </span>
           <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
           </span>
           </div>)
           }
       </div>
       
    }

export default Users;