import styled from 'styled-components'

const ContactsContainer = styled.div`
background-color:black;
display: flex;
flex-direction: column;
justify-content: first;

overflow: hidden;
padding: 0.3rem;
gap: 1.5rem;
.title
{
  padding-bottom:0.7rem;
  display:flex;
  justify-content: center;
  border-bottom: 0.2rem solid white;
  h2
  {
    color:white;
  }
}  
input
{
  padding:1rem;
  background-color: #555;
  background-color: #222;
  color: #fff;
  width: 100%;
  height: 2.2rem;
  border-radius: 1rem;
  font-size:1rem;
  &:focus
  {
    outline-color: #A625BE;
    outline-style: double;
    outline-offset: 2px;
  }
}

.contacts
{
  display: flex;
  flex-direction: column-reverse;
  overflow: scroll;
  gap:1.5rem;
  padding-right: 0.7rem;
  .contactCard
  {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #222;
    padding:1rem;
    border-style:groove;
    border-color: #710487;
    border-width: 0.25rem;
    border-radius: 0.6rem;
    cursor: pointer;
    transition:  200ms ease;
    &:hover
    {
      border-color: #470255;
      scale: calc(1.02);
    }
    .profile  
    {
      display: flex;
      flex-direction: row;
      align-items: center;                       
      gap:1rem;

      img
      {
        height:2.5rem;
        border-style:solid;      
        /* border-color: #A625BE; */
        border-color: #252525;
        border-width: 0.1rem;
        border-radius: 50%;
      }

      h2
      {
        color: #ccc;
        text-transform:capitalize;
      }
    }
    .msgCount
    {
      /* display: flex; */
      background-color: red;
      padding:0.3rem 0.4rem;
      border-radius: 2rem;
      p
      {
        margin: 0;
        color:white;
        font-weight: bold;
      }
    }
  }
    /* Target the entire scrollbar */
  &::-webkit-scrollbar 
  {
    width: 0.4rem;
    height: 0; 
  }

  /* Style the track (background of the scrollbar) */
  &::-webkit-scrollbar-track 
  {
    background: #000; 
  }

  /* Style the thumb (the draggable part) */
  &::-webkit-scrollbar-thumb 
  {
    background: #A625BE; 
    border-radius: 1rem; 
  }

  /* Style the thumb when hovered */
  &::-webkit-scrollbar-thumb:hover   
  {
    background: #710487
  }
}


@media (max-width:800px) 
{
  .contacts
  {
    h2
    {
      font-size:0.8rem ;
    }
    .contactCard > .msgCount
    {
      padding:0.1rem ;
      p
      {
        font-size: 0.65rem;
      }
    }

  }
}

@media (max-width:650px) 
{
  .contacts
  {
    .contactCard
    {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding:0.5rem;
      gap:0.2rem;
      
      .profile
      {
        h2
        {
          font-size:0.6rem ;
        }
        img
        {
          height:2rem;
          width:2rem;  
        }
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
      }
      .msgCount 
      {
        padding:0.12rem 0.22rem;
        p
        {
          font-size: 0.5rem;
        }  
      }
    }
  }
}`;

export default ContactsContainer
