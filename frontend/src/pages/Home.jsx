import React, {useEffect, useMemo, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import HomePageLayout from '../components/Home/HomePageLayout';
import SideMenu from '../components/Home/SideMenu/SideMenu';
import Welcome from '../components/Home/Welcome/Welcome';
import Chat from '../components/Home/Chat/Chat';


import { getAllUsersRoute, host } from '../utils/APIRoutes';
import { io } from 'socket.io-client';

function Home() 
{  
  const navigate = useNavigate();
  const socket=useRef(null);

  const [sentMessage,setSentMessage] = useState("");
  const [receivedMessage,setReceivedMessage] = useState("");
  
  const handleSetSentMessage=(msg)=>{setSentMessage(msg)};
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [selectedChat,setSelectedChat] = useState("");
  const [users,setUsers] = useState({profile:{}, contacts:[]});

  const updateMessageCount=(updatedContactId,operation)=>
  {     
    const updatedContactIndex = users.contacts.findIndex((user) => user["_id"] === updatedContactId);
    if(updatedContactIndex!==-1)
    {
      let updatedContact = {};
      setUsers(prev=>
      {
        updatedContact = prev.contacts[updatedContactIndex]; 
        if(operation==='RESET')
        {
          updatedContact={...updatedContact,messagesCount:0};
        }
        else
        {
          updatedContact={...updatedContact,messagesCount:updatedContact["messagesCount"]+1};
        }
        
        const modifiedUsers = 
        {
          profile:prev.profile,
          contacts:[...prev.contacts.map((user,index)=>
          {
            if(index!==updatedContactIndex)
            {
              return user;
            }
            else
            {
              return updatedContact;
            }
          })]
        };
        return modifiedUsers;
      });
    }
  }

  const selectChat = (selectedChat)=>
  {
    setSelectedChat(selectedChat);
    updateMessageCount(selectedChat._id,"RESET");
  };
  
  useEffect( () => 
  {
    if(sessionStorage.getItem("token"))
    {
      setIsloggedIn(true);
    }
    else
    {
      navigate("/login");
    }
  },[navigate,setIsloggedIn])

  
  useMemo(async()=>
  {    
    if(!users.profile._id)
    {
      try 
      {
        const headers = 
        {
          'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
        };
        const {data,status} = await axios.get(getAllUsersRoute,{headers});
        if(status === 200)
        {
          const modifiedUsers = 
          {
            profile:data.users.profile,
            contacts:data.users.contacts.map((contact)=>{return({...contact,messagesCount:0})})
          };
          setUsers(modifiedUsers);
        }  
      } 
      catch (error) 
      {
      }  
    }    
  },[users]);

  useEffect(()=>
  {
    if(users.profile._id)
    {
      try 
      {
        socket.current=io(host, { transports: ['websocket'] });
        socket.current.emit("register",users.profile._id);
      
      
        const sentMessageInfo = 
        {
            messageText:sentMessage,
            senderId: users.profile._id,
            receiverId: selectedChat._id,
        }

        socket.current.emit("send-msg",sentMessageInfo);
        socket.current.on("receive-msg",({messageText,senderId})=>
        {
          if(messageText)
          {
            updateMessageCount(senderId)
            if(senderId===selectedChat._id?.toString())
            {
              setReceivedMessage(messageText);
              updateMessageCount(senderId,"RESET");
            }
          }
        }); 
      }
      catch (error) 
      {
        
      }
    } 
    // eslint-disable-next-line
  },[socket,users.profile._id,selectedChat._id,sentMessage])

  return (
  <>
    {
      isLoggedIn &&    
        <HomePageLayout>
          
          <SideMenu 
            users={users} 
            selectChat={selectChat} 
          />
          
          {selectedChat === "" && <Welcome profile={users.profile}/>}
           
          {
            selectedChat !=="" && 
            <Chat 
              profile={users.profile}
              sentMessage={sentMessage}
              selectChat={selectChat}
              selectedChat={selectedChat}
              receivedMessage={receivedMessage}
              handleSetSentMessage={handleSetSentMessage}
            /> 
          }
        </HomePageLayout>
    }
  </>
  )};

export default Home;
