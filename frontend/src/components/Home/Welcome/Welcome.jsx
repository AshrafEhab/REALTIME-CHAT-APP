import React from 'react'
import WelcomeContainer from './WelcomeContainer';
function Welcome({profile}) 
{   
    const logo = "https://res.cloudinary.com/dcoifdqn5/image/upload/v1734968851/logo_ped1a3.png"    
    return (
        <WelcomeContainer>
            <img src={logo} alt="logo" />
            <div className="title">
                <h1>Welcome, <span>{profile.firstName}</span> !</h1>
                <h3>Choose a chat to start conversation...</h3>
            </div>
        </WelcomeContainer>
    )
}

export default Welcome
