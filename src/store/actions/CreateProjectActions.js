export const CreateProjectActions=(project)=>{
    return(dispatch,getState)=>{
        
        dispatch({type:'CREATE_PROJECT',project})
    }
}