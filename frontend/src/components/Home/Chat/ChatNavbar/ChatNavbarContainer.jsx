import styled from 'styled-components'

const ChatNavbarContainer = styled.div`
  background-color:#333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;
  padding: 1rem;
  gap: 1rem;
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
      border-color: #222;
      border-width: 0.1rem;
      border-radius: 50%;
    }

    h2
    {
      color: white;
      text-transform:capitalize;
      @media (max-width:700px)
      {
        letter-spacing: 1px;
        font-size: 0.7rem;
      }
    }
  }
  .fa-solid
  {
    color:black;
    font-size:1.8rem;
    cursor: pointer;
    &:hover{
      color:#181818;
    }
  }`;

export default ChatNavbarContainer;
