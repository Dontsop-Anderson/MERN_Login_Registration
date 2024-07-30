import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {
    const [formInfo, setFormInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({

    })
    
    const Changehandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', formInfo, {withCredentials: true})
        .then(res=>{
            console.log(res);
            if(res.data.errors){
                setErrors(res.data.errors);
            }else{
                navigate("/dashboard")
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }


  return (
    <div className="d-flex justify-content-around flex-wrap p-5">
        <h1>Register Form</h1>
        <form  className="p-2 col-4 mx-auto my-4 bg-dark text-light" onSubmit={onSubmitHandler}>
            <div className="col-md-12">
                <label for="inputEmail4" className="form-label">First Name</label>
                <input type="text" name="firstName" className="form-control" id="inputEmail4" onChange={Changehandler}/>
                {errors.firstName? <p className='text-danger'>{errors.firstName.message}</p>: ""}
            </div>
            <div className="col-md-12">
                <label for="inputPassword4" className="form-label">Last Name</label>
                <input type="text" name="lastName" className="form-control" id="inputPassword4" onChange={Changehandler}/>
                {errors.lastName? <p className='text-danger'>{errors.lastName.message}</p>: ""}
            </div>
            <div className="col-md-12">
                <label for="inputAddress" className="form-label">Email Address</label>
                <input type="email" name="email" className="form-control" id="inputAddress1" onChange={Changehandler}/>
                {errors.email? <p className='text-danger'>{errors.email.message}</p>: ""}
            </div>
            <div className="col-md-12">
                <label for="inputAddress" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="inputAddress2" onChange={Changehandler}/>
                {errors.password? <p className='text-danger'>{errors.password.message}</p>: ""}
            </div>
            <div className="col-md-12">
                <label for="inputAddress" className="form-label">Confirm Password</label>
                <input type="password" name="confirmPassword" className="form-control" id="inputAddress3" onChange={Changehandler}/>
                {errors.confirmPassword? <p className='text-danger'>{errors.confirmPassword.message}</p>: ""}
            </div>

            <div className="col-md-12">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" for="gridCheck"> Check me out </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <small>Already have an account <Link to="/Signup">Login</Link></small>
        </form>
    </div>
  )
}

export default SignIn