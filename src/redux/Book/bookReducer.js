import { initialState } from '../initialState';

export const bookReducer = (state = initialState.book, action) => {
    switch (action.type) {
        case 'filter':
        return {
            ...state,
           
            filter: action.payload,
            
        }
        case 'contacts':
            return {
                ...state,
               
                 contacts: action.payload,
                
            }
        default:
            return state
}
};