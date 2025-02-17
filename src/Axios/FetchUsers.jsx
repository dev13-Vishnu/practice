import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchUsers = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(response.data);
            } catch (error) {
                console.error("Error while fetching data:",error);
            }
        }

        fetchData();
    },[])
  return (
    <div>
        <h2>Users:</h2>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li> )}
        </ul>
      
    </div>
  )
}

export default FetchUsers
