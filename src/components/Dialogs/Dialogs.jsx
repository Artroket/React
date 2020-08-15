import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem=(props) =>{
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
                <NavLink to={path}>{props.name}</NavLink> 
                </div>
    );
}

const Massage = (props) =>{
    return(
    <div className={s.massage}> {props.massage}</div> 
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='ya' id='1' />
                <DialogItem name='ne ya' id='2'/>
                <DialogItem name='ne ya' id='3'/>
                <DialogItem name='ne ya' id='4'/>
                <DialogItem name='sawed massages' id='5'/>
            </div>
            <div className={s.massages}>
                <Massage massage='hi'/>
                <Massage massage=' ne hi'/>
            </div>
        </div>
    );
}


export default Dialogs;