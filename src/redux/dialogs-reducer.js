
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
        case SEND_MASSAGE :
            let body = action.newMassageBody;
            return{
            ...state,
            massages: [...state.massages,{id: 4, massage: body}]
                }
        
        default:
            return state;
    }

}

export const sendMassageActionCreator = (newMassageBody) => 
    ({type: 'SEND-MASSAGE', newMassageBody})



export default dialogsReducer;