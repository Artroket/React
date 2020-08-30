import React from 'react';
import { updateNewMassageBodyActionCreator, sendMassageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    
    let state= props.store.getState().dialogsPage;

    let onSendMassageClick = () => {
        props.store.dispatch(sendMassageActionCreator());
    }

    let onNewMassageChange = (body) => {
        props.store.dispatch(updateNewMassageBodyActionCreator(body));
    }

    return (<Dialogs updateNewMassageBody ={onNewMassageChange} sendMassage={onSendMassageClick} dialogsPage={state} />
         );
}


export default DialogsContainer;