import { LOGIN } from './../types';
import {Account} from "../../types/Account"
export const setLoginReducer = (payload) => ({
    type: LOGIN,
    payload
})


export const login = ({username, password}:Account)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(setLoginReducer({token: "1234", user:{username}}))
        })
    }
}