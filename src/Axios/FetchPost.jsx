import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchPost = () => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            setPost(response.data);
        }).catch((err) => {
            console.error("Error Fetching the Post:", err);
        });
    },[])
  return (
    <div>
        {post ? (
            <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </>
        ):(
            <p>Loading...</p>
        )}
      
    </div>
  )
}

export default FetchPost
