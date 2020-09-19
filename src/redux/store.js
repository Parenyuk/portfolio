import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {contactReducer} from './contactReducer';

export const rootReducer = combineReducers({
    reducer: contactReducer
})
export const store = createStore(rootReducer,  applyMiddleware(thunk))
