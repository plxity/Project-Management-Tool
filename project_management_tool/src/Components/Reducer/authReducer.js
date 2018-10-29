const iniState={
    authError:null
};
const authReducer =(state=iniState,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
                console.log('login error');
            return{
               ...state,
               authError:'login failed'
            }
           
        case 'LOGIN_SUCCESS':
            console.log('LOGIN SUCCESS');
            return{
                ...state,
                authError:null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return{
                ...state,
                authError:action.err.message
            }
         default:
            return state
        
    }
  
}
export default authReducer;