import axios from 'axios';
import React, { useState } from 'react'

const CreatePost = () => {

    const [post,setPost] = useState({title:"", body:""});
    const [response, setResponse]= useState(null);

    const handleChange = (e) => {
        setPost({...post,[e.target.name]: e.target.value})
    }

    const handleSubmit = async() => {
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts",post)
            setResponse(res.data);  
        } catch (error) {
            console.error("Error creating post",error);
        }
    }
    
  return (
    <div>
        <input type="text" name='title' placeholder='Title' onChange={handleChange} />
        <input type="text" name='body' placeholder='Body' onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
        {response && <p>Post Created: {JSON.stringify(response)}</p>}
    </div>
  )
}

export default CreatePost
