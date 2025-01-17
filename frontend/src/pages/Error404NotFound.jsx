import React from 'react'
import ErrorContainer from '../components/Error/ErrorContainer';
function Error404NotFound() {
  return (
    <ErrorContainer>
        <h1>Error not Found | 404</h1>
        <p>Please provide correct path...</p>
    </ErrorContainer>
    )
}
export default Error404NotFound;