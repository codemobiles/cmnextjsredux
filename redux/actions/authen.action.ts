import { LOGIN, CLEAR } from './../types';
import {Account} from "../../types/Account"


const setLoginReducer = (payload) => ({
    type: LOGIN,
    payload
})

const setClearReducer = () => ({
    type: CLEAR,    
})


const login = ({username, password}:Account)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(setLoginReducer({token: Math.random().toString(), user:{username}}))
        }, 500)
    }
}

const clear = ()=>{
    return dispatch=>{
        dispatch(setClearReducer())
    }
}

export default {
    login,
    clear
};