export const INITIAL_STATE = {
    isValid: {
        title: true,
        date: true,
        tag: true,
        text: true
    },
    values: {
        title: '',
        date: '',
        tag: '',
        text: ''
    },
    isFormReadyToSubmit: false,
}

export function formReducer(state, action){
    switch(action.type){
        case "SET_VALUE":
            return {...state, values: {...state.values, ...action.payload}};
        case "CLEAR":
            return {...state, values: INITIAL_STATE.values, isFormReadyToSubmit: false};
        case "RESET_VALIDITY":
            return {...state, isValid: INITIAL_STATE.isValid};
        case "SUBMIT": {
            const titleValidity = state.values.title?.trim().length;
            const textValidity = state.values.text?.trim().length;
            const tagValidity = state.values.tag?.trim().length;
            const dateValidity = state.values.date;
            return {
                values: action.payload,
                isValid: {
                    title: titleValidity,
                    date: dateValidity,
                    tag: tagValidity,
                    text: textValidity
                },
                isFormReadyToSubmit: titleValidity && textValidity && tagValidity && dateValidity
            }
        }
    }
}