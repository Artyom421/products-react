import { EMAIL, PASSWORD } from "../loginActions/loginActions"

const initialState = {
    email: '',
    password: ''
}

export const loginReduser = (state = initialState, action) => {
    switch( action.payload ) {
        case EMAIL:
            return { ...state, email: action.payload}
        case PASSWORD:
            return { ...state, email: action.payload}
        default: 
        return state
    }
}