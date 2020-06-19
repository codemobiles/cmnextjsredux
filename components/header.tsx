import React, { ReactElement } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import actions from "../redux/actions";


interface Props {
    
}

export default function Header({}: Props): ReactElement {
    const authenReducer = useSelector(({authenReducer}) => authenReducer)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Header</h1>
            <button onClick={()=>{dispatch(actions.clear())}}>Clear</button>
            <span>{authenReducer.token ? authenReducer.token : ""}</span>
            <span>{authenReducer.token ? authenReducer.user.username : ""}</span>
        </div>
    )
}
