import React from 'react'
import ChatNavbarContainer from './ChatNavbarContainer'

function ChatNavbar({selectedChat, selectChat}) 
{
    return (
        <ChatNavbarContainer>
            <div className="profile">
                <img src={selectedChat.profileImageUrl} alt="" />
                <h2>{selectedChat.firstName} {selectedChat.lastName}</h2>
            </div>
            <i className="fa-solid fa-arrow-left" onClick={()=>{selectChat("")}}></i>
        </ChatNavbarContainer>
    )
};

export default ChatNavbar
