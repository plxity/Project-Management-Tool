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
            return state
         default:
            return state
        
    }
  
}
export default authReducer;