import styled from 'styled-components'
const MessagesContainer = styled.div`
background-color:black;
display: flex;
flex-direction: column;
align-items: end;
overflow: scroll;
padding: 1rem;
gap: 1.5rem;
p
{
  font-size: 1.25rem;
  margin: 0;   
}
.receivedMessage
{
  align-self: start;
  justify-content: start;
  max-width: 70%;

  background-color: #222;
  padding: 0.5rem 1rem;
  border-style:groove;
  border-color: #710487;
  border-width: 0.12rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition:  200ms ease;
  &:hover
  {
    border-color: #470255;
    scale: calc(1.02);
  }
}

.sentMessage
{
  max-width: 70%;

  display: flex;
  flex-direction: row;

  align-items: right;
  background-color: #888;  
  padding: 0.5rem 1rem;

  border-style:groove;
  border-color: #710487;
  border-width: 0.12rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition:  200ms ease;

  &:hover
  {
    border-color: #470255;
    scale: calc(1.02);
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
`;

export default MessagesContainer
