

const initalState = {
    list: []
}
const todoReducers = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const  {id,data}  = action.payload

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                       id:id,
                        data: data,
                        
                    }
                ]
             
            }


        case "DELETE_TODO":

            const newlist = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newlist
            }

        case "EDIT_TODO":
            const newlis = state.list.map((elem) => {
            
                if (elem.id === action.id) {
                    
                    return   elem.data=action.data               
                }
                return elem;
            })
           
            return {
                ...state,
                list: newlis
            }



        // state.list.map((elem)=>{

        //         if(elem.id === elem.data){
        //             return{
        //                  data : elem.data
        //             }

        //         }
        //         return elem
        //     })


        //  case "EDIT_TODO":
        //  debugger
        // //return { data: action.data }
        // state.list.map((elem)=>{

        //     if(elem.id ===action.data){

        //       return{
        //           data:elem.data
        //       }
        //     }
        //     return elem

        // })

        default:
            return state;

    }
}
export default todoReducers;