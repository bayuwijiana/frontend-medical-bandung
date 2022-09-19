import { Badge, Input } from "reactstrap";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/');
    }
  },[]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('email',email);
    formData.append('password',password);

    await axios.post('http://localhost:8000/login', formData)
    .then((response) => {
        console.log(response.data.access_token);
        localStorage.setItem('token',response.data.access_token);

        navigate('/');

    }).catch((error) => {
        setValidation(error.response.data);
    })
}

  return (
    <div
      style={{
        margin: "auto",
        padding: 32,
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
       <h1>
          <Badge color="primary" >Login</Badge>
        </h1> 
        {
                    validation.error && (
                      <div >
                        { validation.error }
                      </div>
                    )
                  }
       <form onSubmit={loginHandler} >
                    <div >
                      <label >Email</label>
                      <Input type='email' placeholder='Email' id='email' value={email} onChange={(e) => 
                      setEmail(e.target.value)} required />  
                      {
                        validation.email && (
                            <small >
                                { validation.email[0] }
                            </small>
                        )
                      }
                    </div>
                    <div >
                      <label >Password</label>
                      <Input type='password'  placeholder='Password' id='password' value={password} onChange={(e) => 
                      setPassword(e.target.value)} required />  
                      {
                        validation.password && (
                            <small >
                                { validation.password[0] }
                            </small>
                        )
                      }
                    </div>
                    <div >
                        <button type='submit' className='form-control btn btn-primary rounded submit px-3'>Login</button>
                    </div>
                  </form>
      </div>
  );
}

export default Login;
