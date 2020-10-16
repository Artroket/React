import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Massage from './Massage/Massage';
import { Redirect } from 'react-router-dom';


const Dialogs = (props) => {
    
    let state= props.dialogsPage;

    let DialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);    

    let MassagesElements = state.massages.map(massage => <Massage massage={massage.massage} />);

    let newMassageBody = state.newMassageBody;

    let onSendMassageClick = () => {
        props.sendMassage();
    }

    let onNewMassageChange = (e) => {
        let body = e.target.value;
        props.updateNewMassageBody(body);
    }

    if (!props.isAuth) return <Redirect to={'login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.massages}>
                <div>{MassagesElements}</div>
                <div>
                   <div> <textarea placeholder='Enter your massage' value = {newMassageBody}  onChange={onNewMassageChange}/> </div>
                   <div> <button onClick={onSendMassageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;