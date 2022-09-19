import { Badge, Input, Label, NavLink } from "reactstrap";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
          navigate('/');
        }
    },[]);
    
    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name',name);
        formData.append('email',email);
        formData.append('password',password);

        await axios.post('http://localhost:8000/register', formData)
        .then(() => {
            navigate('/');
        }).catch((error) => {
            setValidation(error.response.data);
        })
    }

  return (
    <div>
       <h1>
          <Badge color="primary" >Register</Badge>
        </h1>
          <form onSubmit={registerHandler} >
                    <div  >
                      <Label  >Name</Label>
                      <Input type='text'  placeholder='Name' id='name' value={name} onChange={(e) => 
                      setName(e.target.value)} required />  
                      {
                        validation.name && (
                            <small className='text-danger'>
                                { validation.name[0] }
                            </small>
                        )
                      }
                    </div>
                    <div  >
                      <Label  >Email</Label>
                      <Input type='email'  placeholder='Email' id='email' value={email} onChange={(e) => 
                      setEmail(e.target.value)} required />  
                      {
                        validation.email && (
                            <small className='text-danger'>
                                { validation.email[0] }
                            </small>
                        )
                      }
                    </div>
                    <div  >
                      <Label  >Password</Label>
                      <Input type='password'  placeholder='Password' id='password' value={password} onChange={(e) => 
                      setPassword(e.target.value)} required /> 
                      {
                        validation.password && (
                            <small className='text-danger'>
                                { validation.password[0] }
                            </small>
                        )
                      } 
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='form-control btn btn-primary rounded submit px-3'>Register</button>
                    </div>
                  </form>
    </div>
  );
}

export default Register;
