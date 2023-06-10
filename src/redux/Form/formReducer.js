import { initialState } from '../initialState';

export const formReducer = (state = initialState.form, action) => {
    switch (action.type) {
        case 'name':
            return {
                ...state,
                name: action.payload,
            }
        case 'number':
            return {
                ...state,
                number: action.payload,
            }
            default:
                return state
        }
    };