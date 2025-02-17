import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ErrorHandlingExample = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/invalid-endpoint")
        .then((response) => {
            setData(response.data);
        }).catch((err) => {
            console.error("Error",err);
            setError("Failed to fetch data.Please try again later.")
        });
    },[])
  return (
    <div>
      {error? <p style={{color:"red"}}>{error}</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  )
}

export default ErrorHandlingExample
