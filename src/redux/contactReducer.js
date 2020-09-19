import {portfolioAPI} from '../api/api';

const initialState = {
    values: null
}

export const contactReducer = (state=initialState, action) => {
    switch (action.type) {
        case "fdsf":
            return {...state}
        default:
            return state
    }
}


//Thunk
export const sendMessageData = (formData) => async (dispatch, getState) => {
    try {
        let res = await portfolioAPI.sendMessage(formData)
        debugger

    }
    catch (e) {
        alert(e)
    }

}
