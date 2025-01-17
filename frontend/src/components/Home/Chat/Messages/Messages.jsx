import React, { useEffect, useMemo, useRef, useState } from 'react'
import MessagesContainer from './MessagesContainer';
import { getMessagesRoute } from '../../../../utils/APIRoutes';
import axios from 'axios';
import { v4 as uniqueKey} from 'uuid';

function Messages({profile,selectedChat,newSentMessage,newReceivedMessage}) 
{   
    const [messagesInfo,setMessagesInfo]=useState([{}]);
    const scrollRef = useRef(null);

    // get messages from database
    useMemo(async()=>
    {        
        const headers = 
        {
            'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
        };

        const messagesData = 
        {
            sender:profile._id,
            receiver:selectedChat._id,
        };
        
        const {data,status} = await axios.post(getMessagesRoute,messagesData,{headers});
        if(status === 200)
        {
            setMessagesInfo(data.messagesInfo);
        };
    },[profile._id,selectedChat]);


    //display sent message once sent
    useEffect(()=>
    {
        if(newSentMessage)
        {            
            setMessagesInfo((prev)=>[...prev, 
            {
                messageText:newSentMessage,
                messageDirection:"sentMessage",
            }]);
        }
    },[newSentMessage]);

    
    //display received message once received
    useEffect(()=>
        {
            if(newReceivedMessage)
            {
                setMessagesInfo((prev)=>[...prev, 
                {
                    messageText:newReceivedMessage,
                    messageDirection:"receivedMessage",
                }]);
            }
    
        },[newReceivedMessage]);
    

    //scroll to buttom of chat to see last message
    useEffect(() => 
    {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;

    }, [messagesInfo]);


    return (
        <MessagesContainer ref={scrollRef}>
        {
            messagesInfo.length>0 &&
            messagesInfo.map((msg)=>{
            return(
                <div key={uniqueKey()}className={msg.messageDirection}>
                    <p>{msg.messageText}</p>
                </div>    
            );
        })}                 
        </MessagesContainer>
    )
};

export default Messages;
