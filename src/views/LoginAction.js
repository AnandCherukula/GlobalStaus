import Axios from "axios"
import { SEND_LOGIN_DATA, SEND_LOGIN_DATA_SUCCESS,SEND_LOGIN_DATA_FAIL, HANDLE_SIGNUP_DATA, SEND_SIGNUP_DATA } from "./LoginTypes"



export const sendLoginDetails = (data) =>{
    const url = ""
    return(dispatch) => {
    Axios.post(url,data)
    .then( response =>(
        dispatch ({
            type:SEND_LOGIN_DATA_SUCCESS,
            payload:response.data
        })
    )
    .catch(error => {
        dispatch ({
            type:SEND_LOGIN_DATA_FAIL,
            payload:error.data
        })
      })

        
    )
    
    };

}

export const  handleLoginData= (field,value) =>{
    return(dispatch) =>{
        dispatch({
            type: SEND_LOGIN_DATA,
            payload: { value, field }
        });
    }

} 

export const handleSignUpData = (feild, value) =>{
    return(dispatch) =>{
        dispatch({
            type: HANDLE_SIGNUP_DATA,
            payload: { value, feild }
        });
    }

}

export const sendSignUpDetails =() =>{
    return(dispatch) =>{
        dispatch({
            type:SEND_SIGNUP_DATA,
            
        })
    }
}