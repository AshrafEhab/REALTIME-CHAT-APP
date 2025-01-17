import React, { useEffect, useRef, useState } from 'react'
import ContactsContainer from './ContactsContainer';


function Contacts({contacts,selectChat}) 
{
    const scrollRef = useRef(null);
    const [searchInput,setSearchInput] = useState("");
    const searchRegex = new RegExp(searchInput,"i");
    const handleSearchChange = (event)=>setSearchInput(event.target.value);
    useEffect(() => 
    {
        if (scrollRef.current) 
        {
          scrollRef.current.scrollTop = -scrollRef.current.scrollHeight;
        }
    }, [contacts]);
    return (
        <ContactsContainer>
            <div className='title'>
                <h2>Chats</h2>
            </div>

            <input 
                type="search" 
                placeholder='Search...'
                onChange={handleSearchChange}
            />
            
            <div className="contacts" ref={scrollRef}>
            {
                contacts.map((contact)=>
                {
                    if(searchInput==='' || searchRegex.test(`${contact.firstName} ${contact.lastName}`))
                    {
                        return(
                            <div className='contactCard' 
                                key={`${contact._id}`} 
                                onClick={ () => {selectChat(contact)} }        
                            >
                        
                            <div className="profile">
                                <img src={contact.profileImageUrl} alt=''/>
                                <h2>{contact.firstName} {contact.lastName}</h2>
                            </div>
            
                            {
                                contact.messagesCount > 0 &&
                                <div className='msgCount'>
                                    <p>{contact.messagesCount}</p>
                                </div>
                            }
                        </div>
                    )}
                    else
                    {
                        return false;
                    }
                })}           
            </div>
        </ContactsContainer>
    )
}

export default Contacts
