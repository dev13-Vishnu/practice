import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchWithTimeout = () => {

    const [data,setData] = useState(null);
    const [error,setError] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1", {timeout:2})
        .then((response) => {
            setData(response.data);
        }).catch((err) => {
            if(err.code === "ECONNABORTED") {
                setError("Request timeout . Please try again.");
            } else {
                setError("An error occured.");
            }
        });
    },[])
  return (
    <div>

        {error? <p style={{color:"red"}}>{error}</p>:<p>{JSON.stringify(data)}</p>}
      
    </div>
  )
}

export default FetchWithTimeout
