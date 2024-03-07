import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updatePost } from "./redux/postsActions";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const dispatch=useDispatch()
    const {id}=useParams()
    const element=useSelector(state=>state.find((e)=>e.id==id))
    const [post, setPost] = useState(element);
const navigate=useNavigate()
    return (
    <div>
      <div>
        <h1>edit Post</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(updatePost(post));
            navigate('/')
          }}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <label htmlFor="title">body</label>
          <input
            type="text"
            name="title"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default EditPost;
