export const CreateProjectActions=(project)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const fireStore=getFirestore()
        fireStore.collection('projects').add({
            ...project,
            authorFirstName:'mod',
            authorLastName:'shan',
            authorID:12344,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err})
        })

    }
}