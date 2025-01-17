import React from 'react'

import Profile from './Profile/Profile';
import Contacts from './Contacts/Contacts';
import SideMenuContainer from './SideMenuContainer';

function SideMenu({users, selectChat}) 
{  
  return (
  <>
    {  
        <SideMenuContainer>

            <Contacts
                contacts={users.contacts}
                selectChat={selectChat}                
            />
            <Profile profile={users.profile}/>
            
           </SideMenuContainer>
    }
  </>
  )};

export default SideMenu;
