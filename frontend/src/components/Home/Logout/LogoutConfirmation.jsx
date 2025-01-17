import React from 'react'
import { useNavigate } from 'react-router-dom';

import LogoutConfirmationContainer from './LogoutConfirmationContainer';



function LogoutConfirmation({cancelLogout}) 
{
    const navigate = useNavigate();        
    const logout = ()=>
    {
        sessionStorage.clear();
        navigate("/login");
    }

    return (
        <LogoutConfirmationContainer>
            <div className="components">
                <h1>Are you sure want to quit?</h1>
                
                <div className="btns">
                
                    <button 
                     type="button"
                     onClick={cancelLogout}
                    >
                     Cancel
                    </button>

                    <button 
                     type="button" 
                     id = "logout"
                     onClick={logout}
                    >
                     Logout
                    </button>
                
                </div>
            </div>
        </LogoutConfirmationContainer>
    )
}

export default LogoutConfirmation
