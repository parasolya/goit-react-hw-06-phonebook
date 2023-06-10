import { combineReducers } from "redux";
import { formReducer } from "./Form/formReducer";
import { bookReducer } from "./Book/bookReducer";


// const formReducer = (state = initialState.form, action) => {
//     switch (action.type) {
//         case 'name':
//             return {
//                 ...state,
//                 name: action.payload,
//             }
//         case 'number':
//             return {
//                 ...state,
//                 number: action.payload,
//             }
//             default:
//                 return state
//         }
//     };

// const bookReducer = (state = initialState.book, action) => {
//         switch (action.type) {
//             case 'filter':
//             return {
//                 ...state,
               
//                 filter: action.payload,
                
//             }
//             case 'contacts':
//                 return {
//                     ...state,
                   
//                      contacts: action.payload,
                    
//                 }
//             default:
//                 return state
//     }
// };

export const reducer = combineReducers({
    form: formReducer,
    book: bookReducer,
});