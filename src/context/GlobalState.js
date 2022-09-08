import react, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    users: [
        {id: 1, name: 'Zainal'},
        {id: 2, name: 'Arifin'},
        {id: 3, name: 'Yusuf'},
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer (AppReducer, initialState);

    // Actions
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }

    const EditUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user  
        })
    }

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            EditUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}