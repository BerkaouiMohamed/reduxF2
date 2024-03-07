import { ADD_POST, DELETE_POST, FETCHED_POST, UPDATE_POST } from "./actionTypes";

export const addPost = (post) => {
    return {
        type:ADD_POST,
        payload: post,
    };
};
export const deletePost = (post) => {
    return {
        type: DELETE_POST,
        payload: post,
    };
}

export const updatePost = (post) => {
    return {
        type: UPDATE_POST,
        payload: post,
    };
}
export const fetchPost = () => {
  return (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((json)=>dispatch(posts(json))

    )
  }
}

export const posts = (post) => {
    return {
        type:FETCHED_POST ,
        payload: post,
    };
}