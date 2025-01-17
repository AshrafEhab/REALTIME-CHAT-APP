import styled from 'styled-components'
const WelcomeContainer = styled.div`

  border-style: solid;
  border-color: #333;
  border-width:0 0 0 0.5rem;
  background-color:black;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  img
  {
    position: relative;
    left:35px;
    max-height:67%;
    max-width: 90%;
  }
  .title
  {
  gap: 1rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1,h4
    {
      color:white;
      letter-spacing: 1.5px;
      span
      {
        color:#A625BE;
      }

      @media (max-width:1250px)
      {
        letter-spacing: 1px;
        font-size: 1.5rem;
      }
    }
    h3
    {
      color:white;
      letter-spacing: 1.5px;
      span
      {
        letter-spacing: 4px;
      }
      @media (max-width:1250px)
      {
        letter-spacing: 1px;
        font-size: 1rem;
      }
      @media (max-width:700px)
      {
        letter-spacing: 1px;
        font-size: 0.7rem;
      }
    }
  }
`;


export default WelcomeContainer
