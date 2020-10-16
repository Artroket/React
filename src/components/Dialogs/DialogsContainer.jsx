import React from 'react';
import { updateNewMassageBodyActionCreator, sendMassageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMassageBody: (body)=> {
            dispatch(updateNewMassageBodyActionCreator(body));
        },
        sendMassage: () => {
            dispatch(sendMassageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;