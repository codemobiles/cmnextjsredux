import React, { ReactElement } from 'react'
import Layout from '../components/layout'
import {useDispatch, useSelector} from 'react-redux'
import actions from "../redux/actions";

interface Props {
    
}

export default function login({}: Props): ReactElement {

    const disptach = useDispatch()
    const authenReducer = useSelector(({authenReducer}) => authenReducer)
    return (
        <Layout>
            <h1>Login</h1>
            <button onClick={()=>{
                disptach(actions.login({username: "admin", password: "1234"}))
            }}>Login</button>
            <span>{authenReducer.token ? authenReducer.token : ""}</span>
            <span>{authenReducer.token ? authenReducer.user.username : ""}</span>
        </Layout>
    )
}
