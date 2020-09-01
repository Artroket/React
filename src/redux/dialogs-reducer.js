const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY';
const SEND_MASSAGE = 'SEND-MASSAGE';

let initialState = {
    massages: [
        { id: 0, massage: 'hi' },
        { id: 1, massage: 'ne hi' },
        { id: 2, massage: 'ff' },
        { id: 3, massage: 'vbcb' }
    ],
    dialogs: [
        { id: 0, name: 'Sawed massages' },
        { id: 1, name: 'Artem' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Nastya' },
        { id: 4, name: 'Olya' }
    ],
    newMassageBody: "" 
}

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type){
        case UPDATE_NEW_MASSAGE_BODY:{
            let stateCopy = {...state};
            stateCopy.newMassageBody = action.body;
            return stateCopy;
        }
        case SEND_MASSAGE :{
            let body = state.newMassageBody;
            let stateCopy = {...state};
            stateCopy.massages = [...state.massages];
            stateCopy.newMassageBody = '';
            stateCopy.massages.push({id: 4, massage: body}); 
            return stateCopy;
        }
        default:
            return state;
    }

}

export const sendMassageActionCreator = () => 
    ({type: 'SEND-MASSAGE'})

export const updateNewMassageBodyActionCreator = (body) => 
    ({type: 'UPDATE-NEW-MASSAGE-BODY' , body: body})

export default dialogsReducer;