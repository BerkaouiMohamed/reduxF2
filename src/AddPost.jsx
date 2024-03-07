import React, { useState } from 'react'
import { addPost } from './redux/postsActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AddPost() {
    const dispatch=useDispatch()
const postLength=useSelector((state)=>state.length)
    const [post,setPost]=useState({id:postLength+1})
    const navigate=useNavigate()
  return (
    <div>
        <h1>Add Post</h1>
        <form onSubmit={(e)=>{e.preventDefault();dispatch(addPost(post));navigate('/')}}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={(e)=>setPost({...post,title:e.target.value})}/>
            <label htmlFor="title">body</label>
            <input type="text" name="title" onChange={(e)=>setPost({...post,body:e.target.value})}/>
       
       <input type="submit" />
        </form>
      
    </div>
  )
}

export default AddPost
