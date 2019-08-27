const inintState={
Projects:
[
    {id:1,title:'its dumy data',content:'bla bla'},
    {id:2,title:'its dumy data2',content:'bla bla'},
    {id:3,title:'its dumy data3',content:'bla bla'}
]
}
const ProjectReducer=(state=inintState,action)=>{
   switch(action.type){
       case 'CREATE_PROJECT':
       console.log('create project', action.project)

   }
return state
}
export default ProjectReducer