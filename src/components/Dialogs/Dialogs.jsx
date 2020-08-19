import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Massage from './Massage/Massage';


const Dialogs = (props) => {
    
    
    let DialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);    

   

    let MassagesElements = props.state.massages.map(massage => <Massage massage={massage.massage} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.massages}>
                {MassagesElements}
            </div>
        </div>
    );
}


export default Dialogs;