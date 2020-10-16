import React from 'react';
import { updateNewMassageBodyActionCreator, sendMassageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs);