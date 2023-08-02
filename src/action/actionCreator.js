export const addTodo=(data)=>{
    return {
        type:"ADD_TODO",
        payload :{
            id:new Date().getTime().toString(),
            data:data
        }
          
    }
}
export const deleteTodo=(id)=>{
    return {
            type :"DELETE_TODO",
            id:id
           
    }
}
export const editTodo=(data,id)=>{

    return {
        type:"EDIT_TODO",
            //id:id,
            id:new Date().getTime().toString(),
            data:data
         }
}
