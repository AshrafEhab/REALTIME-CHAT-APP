import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import FormContainer from '../components/Form/FormContainer';
import ToastContainer        from '../components/Error/ToastContainer';
import { registerRoute, loginRoute } from '../utils/APIRoutes';


function Register() 
{
  const logo = "https://res.cloudinary.com/dcoifdqn5/image/upload/v1734968851/logo_ped1a3.png";
  const navigate = useNavigate();
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [inputsClass,setInputsClass] = useState(
  {
    "firstName": "noErrorInput",   
    "lastName": "noErrorInput",   
    "email": "noErrorInput",   
    "password": "noErrorInput",    
  });
  useEffect( () => 
  {
    if(sessionStorage.getItem("token"))
    {
      setIsloggedIn(true);
      navigate("/");
    }
  },[navigate,setIsloggedIn])
  const isFormValid = (registrationData)=>
  {
    const numbersCheckRegex = new RegExp("[0-9]");
    if (registrationData.firstName === "")
    { 
      toast.error("First Name is Blank!");    
      setInputsClass(
      {
        "firstName": "errorInput",   
        "lastName": "noErrorInput",   
        "email": "noErrorInput",   
        "password": "noErrorInput",    
      });
      return false;
    }
    else if(numbersCheckRegex.test(registrationData.firstName))
    {
      console.log()
      toast.error("Names can't contain numbers!");      
      setInputsClass(
      {
        "firstName": "errorInput",   
        "lastName": "noErrorInput",   
        "email": "noErrorInput",   
        "password": "noErrorInput",    
      });
      return false;
    }
    else if(numbersCheckRegex.test(registrationData.lastName))
    {      
      toast.error("Names can't contain numbers!");      
      setInputsClass(
      {
        "firstName": "noErrorInput",   
        "lastName": "errorInput",   
        "email": "noErrorInput",   
        "password": "noErrorInput",    
      });
      return false;
    }

    else if(registrationData.email === "")
    {      
      toast.error("Email is Blank!");      
      setInputsClass(
      {
        "firstName": "noErrorInput",   
        "lastName": "noErrorInput",   
        "email": "errorInput",   
        "password": "noErrorInput",    
      });
      return false;
    }

    else if(registrationData.password !== registrationData.confirmPassword)
    {
      toast.error("Passwords not Matched!");      
      setInputsClass(
      {
        "firstName": "noErrorInput",   
        "lastName": "noErrorInput",   
        "email": "noErrorInput",   
        "password": "errorInput",    
      });
        return false;
    }    

    else if(registrationData.password.length < 8)
    {
      toast.error("Password is less than 8 chars!");      
      setInputsClass(
      {
        "firstName": "noErrorInput",   
        "lastName": "noErrorInput",   
        "email": "noErrorInput",   
        "password": "errorInput",    
      });
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
    const registrationData =
    {
      firstName:event.target.firstName.value,
      lastName:event.target.lastName.value,
      password:event.target.password.value,
      confirmPassword:event.target.confirmPassword.value,
      email:event.target.email.value,
    };
    if (isFormValid(registrationData))
    {
      //connecting to backend
      try 
      {
        await axios.post(registerRoute, registrationData);
        //login
        toast.success("Account created successfully!",{autoClose:1000});

        const loginData = {
          email:registrationData.email,
          password:registrationData.password,
        }
        const {data} = await axios.post(loginRoute, loginData);
        sessionStorage.setItem("token", data.token);   
        setTimeout(()=> navigate("/setImage"), 1500);
      } 
      catch (error) 
      {
        //another try catch block to check if server is not working
        try 
        {
          // if server responded by email not unique
          const notUniqueErrorMessage = error.response.data.message;
          if(notUniqueErrorMessage)
          {
            toast.error(notUniqueErrorMessage)

          }; 
        } 
        catch (error) 
        {
          navigate("/internalServerError");
        }
      }
    }
    else
    {
      //error already handled in isFormValid
    }
  };



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
            type="firstName" 
            name="firstName"        
            placeholder="First Name"
            className={inputsClass["firstName"]}
          />
          
          <input 
            type="lastName" 
            name="lastName"        
            placeholder="Last Name (Optional)"
            className={inputsClass["lastName"]}
          />

          <input 
            type="email"    
            name="email"           
            placeholder="Email"
            className={inputsClass["email"]}

          />

          <input 
            type="password"
            name="password"        
            placeholder="Password"            
            className={inputsClass["password"]}
          />

          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            className={inputsClass["password"]}
          />
          
          <button type="submit">
            Create User
          </button>
        </div>
    
        <div className="title">
          <span>
            Already have an account?<Link to="../Login"> Login</Link> 
          </span>
        </div>
      </form>
    <ToastContainer/>
    </FormContainer>
  }
  </>
  )};


    

export default Register
