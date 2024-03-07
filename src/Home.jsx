import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPost } from "./redux/postsActions";
import { Link } from "react-router-dom";

function Home() {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(()=>{
    dispatch(fetchPost())

  },[])
  return (
    
    <div>
        {posts.map((post)=>{

           return <div key={post.id}>

            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={()=>{dispatch(deletePost(post))}}>Delete</button>
           <Link to={`/edit/${post.id}`}><button >edit</button></Link> 

                </div>
        })}

    </div>
  );
}

export default Home;
