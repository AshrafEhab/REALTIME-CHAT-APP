import React from 'react'

import ChatNavbar from './ChatNavbar/ChatNavbar';
import Messages from './Messages/Messages';
import ChatInput from './ChatInput/ChatInput';
import ChatContainer from './ChatContainer';

function Chat({profile, sentMessage, selectChat,selectedChat, receivedMessage, handleSetSentMessage}) 
{  
  return (
  <>
    {  
        <ChatContainer>
            <ChatNavbar 
              selectedChat={selectedChat}
              selectChat={selectChat}
            />

            <Messages
                profile={profile}
                selectedChat={selectedChat}
                newSentMessage={sentMessage}
                newReceivedMessage={receivedMessage}
            />
            <ChatInput
                profile={profile}
                selectedChat={selectedChat}
                displaySentMessage={handleSetSentMessage}
            />

            {/* <Chat 
              users={users} 
              socket={socket} 
              selectChat={selectChat} 
              sentMessage={sentMessage}
              selectedChat={selectedChat}
              receivedMessage={receivedMessage}
              updateMessageCount={updateMessageCount}
              handleSetSentMessage={handleSetSentMessage}
            />  */}
        </ChatContainer>
    }
  </>
  )};

export default Chat;
