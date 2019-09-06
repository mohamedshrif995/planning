const inintState={
    authError:null
}

const AuthReducer=(state=inintState,action)=>{
    switch (action.type) {
        case 'LOGIN_FAIL':
            console.log('LOGIN_FAIL')
            return {
                ...state,
                authError:'login fail'
            }
            case 'LOGIN_SUCCESS':
                    console.log('LOGIN_SUCCESS')
                
           return{
               ...state,
               authError:null
           }
           case 'SIGN_OUT':
               console.log('SIGN_OUT')
               return state
              
           default:
               return state
    }
}
export default AuthReducer