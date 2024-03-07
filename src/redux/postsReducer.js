import { ADD_POST, DELETE_POST, FETCHED_POST, UPDATE_POST } from "./actionTypes";



const postsReducer=(state,action)=>{
    switch(action.type){
        case FETCHED_POST:return[...action.payload]
        case ADD_POST:return [...state,action.payload]
        case DELETE_POST: return state.filter((post)=>post.id!=action.payload.id)  
        
        case UPDATE_POST: return state.map((post)=>post.id===action.payload.id?{...post, ...action.payload}:post)
        default: return state
    }
    }   


export default postsReducer