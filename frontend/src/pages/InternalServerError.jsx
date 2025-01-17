import React from 'react'
import ErrorContainer from '../components/Error/ErrorContainer';
import { useNavigate } from 'react-router-dom';
function InternalServerError() 
{
  const navigate = useNavigate();
  const handleClick=(() => {navigate("/register")});
  return (
      <ErrorContainer>
          <h1>Internal Server Error | 500</h1>
          <p>Please try again later...</p>
          <button onClick={handleClick}>Back</button>
      </ErrorContainer>
    )
};


export default InternalServerError;