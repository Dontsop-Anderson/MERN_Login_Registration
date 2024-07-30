import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [formInfo, setFormInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const [errormsg, setErrormsg] = useState(null)
    
    const Changehandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', formInfo, {withCredentials: true})
        .then(res=>{
            console.log(res);
            if(res.data.msg === 'Login successful'){
                navigate("/dashboard")
            }else{
                // set error message here
                setErrormsg(res.data.msg)
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

  return (
    <div class="d-flex justify-content-around flex-wrap p-5">
        <h1>Login Form</h1>
        <form  class="p-2 col-4 mx-auto my-4 bg-dark text-light" onSubmit={onSubmitHandler}>
            {errormsg? <p className='text-danger'>{errormsg}</p>: ""}

            <div class="col-md-12">
                <label for="inputAddress" class="form-label">Email Address</label>
                <input type="email" name="email" class="form-control" id="inputAddress" onChange={Changehandler}/>
                {/* {errors.firstName? <p className='text-danger'>{errors.firstName.message}</p>: ""} */}
            </div>
            <div class="col-md-12">
                <label for="inputAddress" class="form-label">Password</label>
                <input type="password" name="password"  class="form-control" id="inputAddress" onChange={Changehandler}/>
                {/* {errors.email? <p className='text-danger'>{errors.email.message}</p>: ""} */}
            </div>

            <div class="col-12 my-2">
                <button type="submit" class="btn btn-success">Login</button>
            </div>
            <small>Not a member? <Link to="/">Login</Link></small>
        </form>
    </div>
  )
}

export default SignUp