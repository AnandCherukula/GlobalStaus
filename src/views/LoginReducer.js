import {HANDLE_SIGNUP_DATA, SEND_LOGIN_DATA, SEND_LOGIN_DATA_FAIL,SEND_LOGIN_DATA_SUCCESS} from './LoginTypes'

const INITIAL_STORE ={
     login:{
        email:'',
        password:'',
        error: '',
        response:{},
     },
     signUp:{
        email:'',
        password:'',
        name:'',
        userName:'',
        phone:'',
        headerInput:'',
     }
    
}

export default (state = INITIAL_STORE, action) =>{

    switch (action.type) {
        case SEND_LOGIN_DATA:
                return SaveLoginDetails(action, state);

        case SEND_LOGIN_DATA_SUCCESS:
           return {
           ...state,
               login:{
                response:action.payload
               }
            }

            case SEND_LOGIN_DATA_FAIL:
                return {
                ...state,
                    login:{
                        error:action.payload
                    }
                 }
            
            case HANDLE_SIGNUP_DATA:
                return HandleSignUpdata(action,state)
           
    }
    return state;
}








function SaveLoginDetails(action, state){
    if (action.payload.field === 'email') {
        return {
            ...state, login: {
                ...state.login,
                email: action.payload.value
            },
        }
    }
    else if (action.payload.field === 'password') {
        return {
            ...state, login: {
                ...state.login,
                password: action.payload.value
            },
        }
    }
}

function HandleSignUpdata(action,state){
    if(action.payload.feild ==='name')
    {
        return{
            ...state, signUp:{
                ...state.signUp,
                name:  action.payload.value
            }
        }
        
        
    }
    else if(action.payload.feild ==='password')
    {
        return{
            ...state, signUp:{
                ...state.signUp,
                password:  action.payload.value
            }
        }
        
        
    }
    else if(action.payload.feild ==='userName')
    {
        return{
            ...state, signUp:{
                ...state.signUp,
                userName:  action.payload.value
            }
        }
        
        
    }

    else if(action.payload.feild ==='phone')
    {
        return{
            ...state, signUp:{
                ...state.signUp,
                phone:  action.payload.value
            }
        }
        
        
    }
    else if(action.payload.feild ==='email')
    {
        return{
            ...state, signUp:{
                ...state.signUp,
                email:  action.payload.value
            }
        }
        
        
    }
    else if(action.payload.feild ==='headerSearch')
    {
        return{
            ...state, signUp:{
                ...state.signUp,
                headerInput:  action.payload.value
            }
        }
        
        
    }



}
