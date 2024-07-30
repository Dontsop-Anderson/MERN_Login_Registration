import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [logginuser, setlogginuser] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/loggedin", {withCredentials: true})
            .then(res => {
                console.log(res);
                setlogginuser(res.data.user)
            })
            .catch(err => {
                console.log("errrrrr", err)
                navigate("/")
            })
    }, [])

    const logout = (e) => {
        axios.get("http://localhost:8000/api/users/logout", {withCredentials: true})
        .then(res => {
            console.log(res);
            navigate("/")
        })
        .catch(err => {
            console.log(err);
        })
    }

  return (
    <div>
        {logginuser? 
        <div>
            <h1>Welcome {logginuser.firstName} {logginuser.lastName} to my Login and Registration App</h1>
            <button onClick={logout}>Logout</button>
        </div>


        : 
        
        <h1>Please log in first</h1>}
    </div>
  )
}

export default Home