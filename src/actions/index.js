import axios from "axios"
import { SIGN_OUT, SIGN_IN, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from "./types"



export const signIn = (userId)=>{
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = ()=>{
    return {
        type: SIGN_OUT
    }
}

export const createStream=(formValues)=>{
    return (dispatch, getState)=>{
        const {userId} = getState().auth
        axios.post("http://localhost:3002/streams", {...formValues, userId})
        .then(response => {
            dispatch({type: CREATE_STREAM, payload: response.data})
        })
    }
}

export const fetchStreams = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:3002/streams")
        .then(response => dispatch({type: FETCH_STREAMS, payload:response.data}))
    }
}

export const fetchStream =(id)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3002/streams/${id}`)
        .then(response => dispatch({type: FETCH_STREAM, payload: response.data}))
    }
}

export const editStream = (id, formValues)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3002/streams/${id}`, formValues)
        .then(response=> dispatch({type: EDIT_STREAM, payload: response.data}))
    }
}

export const deleteStream = (id) =>{
    return async (dispatch) => {
        await axios.delete(`http://localhost:3002/streams/${id}`)
        dispatch({type: DELETE_STREAM, payload: id})
    }
}