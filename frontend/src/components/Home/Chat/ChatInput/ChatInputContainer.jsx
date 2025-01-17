import styled from 'styled-components'

const ChatInputContainer = styled.div`
  background-color:rgb(51, 51, 51);
  display: grid;
  grid-template-columns: 4% 87% 5%;
  justify-content: space-between; 
  align-items: center;
  overflow: hidden;
  padding: 0.2rem;

  .absolute
  {
    position: absolute;
    left: 25%;
    bottom:10%; 
    .emoji-picker-react
    {
      position: absolute;
      input
      {
        padding-left: 2rem;
        border-style: none;
        &:focus
        {
          outline-style: none;
        }
      }
    }
  }
  .epr-body
  {
    &::-webkit-scrollbar 
    {
      width: 0.4rem;
      height: 0; 
    }

    /* Style the track (background of the scrollbar) */
    &::-webkit-scrollbar-track 
    {
      background: #333; 
    }

    /* Style the thumb (the draggable part) */
    &::-webkit-scrollbar-thumb 
    {
      height: 5rem;
      background: #111; 
      border-radius: 1rem; 
    }

    /* Style the thumb when hovered */
    &::-webkit-scrollbar-thumb:hover   
    {
      background: #000
    }
  }
  .chatText
  {
    input
    {
      padding:0.1rem 0.5rem;
      background-color: #555;
      color: #fff;
      width: 100%;
      height: 2.1rem;
      border-radius: 1rem;
      font-size:1rem;
      &:focus
      {
        outline-color: #A625BE;
        outline-style: double;
        outline-offset: 2px;
      }
    }
  }

  img
  {
    height: 1.8rem;
    width: 2.5rem;
    cursor: pointer;
  }

  .emoji
  {
    display: flex;
    flex-direction: column;

    h1
    {
      display: flex;
      margin: 0;
      font-size:1.3rem;
    }  
    cursor: pointer;
  }
  @media (max-width:900px) 
  {
    grid-template-columns: 4% 80% 7%;
    img
    {
      height: 1.6rem;
      width: 2rem;
    }
  }  
  @media (max-width:650px) 
  {
    grid-template-columns: 6% 75% 9%;
    img
    {
      height: 1.7rem;
      width: 1.7rem;
    }
  }

  @media (max-width:450px) 
  {
    grid-template-columns: 5% 65% 9%;

    img
    {
      height: 1.4rem;
      width: 1.4rem;
      cursor: pointer;
    }

    .chatText
    {
      input
      {
        height: 1.5rem;
        &:focus
        {
          outline-style: solid;
          outline-offset: 0px;
        }
      }
    }
  }`;

export default ChatInputContainer;