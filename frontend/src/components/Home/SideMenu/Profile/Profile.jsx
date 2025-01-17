import React, { useState } from 'react'
import LogoutConfirmation from '../../Logout/LogoutConfirmation'
import { useNavigate } from 'react-router-dom';
import ProfileContainer from './ProfileContainer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Profile({profile}) 
{
    const navigate = useNavigate();
    const [tryToLogout, setTryToLogout] = useState(false);

    const handleTryToLogout = ()=>
    {
      setTryToLogout(true);
    }
    
    
    const cancelLogout = ()=>
    {
      setTryToLogout(false);
    }

    const changePhoto =()=>{navigate("/setImage",{state:{oldImageUrl:profile.profileImageUrl}})};
  
  
    return (
        <ProfileContainer>
            <div className="profile">
                <img 
                    src={profile.profileImageUrl} 
                    onClick={changePhoto}
                    alt=''
                />
                <h2>{profile.firstName} {profile.lastName}</h2>
            </div>
            
            <i className="fa-solid fa-right-to-bracket" onClick={handleTryToLogout}></i>
            
            {
                tryToLogout && <LogoutConfirmation cancelLogout={cancelLogout}/>
            }
        </ProfileContainer>
    )
};

export default Profile
