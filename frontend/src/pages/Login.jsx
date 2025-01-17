import React, {useEffect, useState} from 'react'
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ToastContainer from '../components/Error/ToastContainer';
import FormContainer from '../components/Form/FormContainer';

import { loginRoute } from '../utils/APIRoutes';

function Login() 
{
  const logo = "https://res.cloudinary.com/dcoifdqn5/image/upload/v1734968851/logo_ped1a3.png";    
  const navigate = useNavigate();
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect( () => 
  {
    if(sessionStorage.getItem("token"))
    {
      setIsloggedIn(true);
      navigate("/");
    }
  },[navigate,setIsloggedIn]);
  
  const validateLogin = async (loginData) =>
  {
    if (loginData.email === "")
    { 
      toast.error("Email is Required!");
      return false;
    }

    else if(loginData.password === "")
    {
      toast.error("Password is Required!");
      return false;
    }
    else if (loginData.password.length < 8)
    {
      toast.error("Incorrect username or password!");
      return false;
    }
    else
    {
      return true;  
    }
  
  }
  const handleSubmit = async (event) => 
  {
    event.preventDefault();
    const loginData = 
    {
      email:event.target.email.value,
      password:event.target.password.value,
    };

    if(await validateLogin(loginData))
    {
      try 
      {
        const {data} = await axios.post(loginRoute, loginData);
        sessionStorage.setItem("token", data.token);
        navigate('/');  
      } 
      catch (error) 
      {
        if(error.status === 400)
        {
         toast.error("Incorrect username or password!");
        }
        else
        {
          navigate("/internalServerError");
        }
      }
    }
  }

  return (
  <>
    {!isLoggedIn &&
      <FormContainer>    
        <form onSubmit={event => handleSubmit(event)}>

          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="inputs">
            <input 
              type="email" 
              name="email"    
              placeholder="Email"
            />

            <input 
              type="password" 
              name="password"    
              placeholder="Password"
            />
            
            <button type="submit">Login</button>  
          </div>

          <div className="title">
            <span>
              Don't have an account?<Link to="../Register"> Create Account</Link> 
            </span>
          </div>
        </form>
        <ToastContainer/>
      </FormContainer>}
  </>
  )};

export default Login;
