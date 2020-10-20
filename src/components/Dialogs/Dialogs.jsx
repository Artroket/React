import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Massage from './Massage/Massage';
import {reduxForm, Field} from 'redux-form';


const Dialogs = (props) => {
    
    let state= props.dialogsPage;

    let DialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);    

    let MassagesElements = state.massages.map(massage => <Massage massage={massage.massage} key={massage.id}/>);


    const addNewMassage = (values) => {
        debugger;
        props.sendMassage(values.newMassageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.massages}>
                <div>{MassagesElements}</div>
                <SendMassageFormRedux onSubmit={addNewMassage}/>
            </div>
        </div>
    );
}

const SendMassageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div> <Field component="textarea" name={"newMassageBody"} placeholder='Enter your massage'/> </div>
            <div> <button>Send</button></div>
        </form>
    )
}

const SendMassageFormRedux = reduxForm({
    form: "dialogSendMassageForm"
})(SendMassageForm)

export default Dialogs;