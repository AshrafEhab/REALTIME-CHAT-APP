import React, { useState } from 'react';
import axios from 'axios';

import ChatInputContainer from './ChatInputContainer';

import sendIcon from './sendIcon.png';
import EmojiPicker from 'emoji-picker-react';
import { sendMessageRoute } from '../../../../utils/APIRoutes';

function ChatInput({profile, selectedChat,displaySentMessage}) 
{
    const [messageText,setMessageText]=useState("");
    const [showEmojiPicker,setShowEmojiPicker]=useState(false);
    
    const sendMessage = async () => 
    {
        /*display message on chat screen*/
    
        // make sure the value changes to handle if the user sent a message twice
        displaySentMessage("");

        // set the entered to be displayed but make sure it changed first using useState
        setMessageText(prev=>
        {
            displaySentMessage(messageText);
            return prev;  
        });

        //save message in backend
        const headers = 
        {
            'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
        };
        const messageData = 
        {
            messageText,
            sender:profile._id,
            receiver:selectedChat._id,
        };
        setMessageText("");
        await axios.post(sendMessageRoute,messageData,{headers}); 
    };
    
    const toggleEmojiPicker = ()=>
    {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const addEmoji = (emojiObject)=>
    {
        const emoji = emojiObject.emoji;
        setMessageText((prev) => prev + emoji);
    };

    const handleMessage = (event)=>
    {
        setMessageText(event.target.value);
    };

    const handleEnter = (event)=>
    {
        if(event.key==="Enter")
        {
            sendMessage();
        }    
    };

    return (
        <ChatInputContainer>
            <div className="emoji" onClick={toggleEmojiPicker}>
                <h2>😎</h2>
            </div>
            {   
                showEmojiPicker&&true&&
                <div className='absolute'>
                    <EmojiPicker  
                        theme='dark' 
                        lazyLoadEmojis='true'
                        className='EmojiPicker' 
                        onEmojiClick={ addEmoji }
                        previewConfig={{showPreview:false}}
                    />
                </div>
            }

            <div className="chatText">
                <input type="text" 
                    placeholder='Type your message here..' 
                    value = {messageText}
                    onChange={handleMessage}
                    onKeyDown={handleEnter}
                />
            </div>
            
            <img 
                src={sendIcon}
                onClick={sendMessage}
                alt="sendIcon" 
            />
        </ChatInputContainer>
    )
};

export default ChatInput;

