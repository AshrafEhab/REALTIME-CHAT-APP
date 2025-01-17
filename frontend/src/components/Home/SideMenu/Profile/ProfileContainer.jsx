import styled from 'styled-components';
const ProfileContainer = styled.div`
  background-color:#A625BE;
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
    cursor: default;
    img
    {
      cursor: pointer;
      height:2.5rem;
      border-style:solid;
      border-color: #710487;
      border-width: 0.1rem;
      border-radius: 50%;
    }

    h2
    {
      color: white;
      text-transform:capitalize;
    }
  }
  .fa-solid
  {
    color:black;
    font-size:1.8rem;
    cursor: pointer;
  }
  @media(max-width:800px)
  {
    h2
    {
      font-size:1rem;
    }
  }

  @media(max-width:650px)
  {
    /* display: flex; */
    align-items: center;
    padding:0.1rem;
    .profile
    {
      display: flex;
      flex-direction: column;
      gap: 0rem;

      img
      {
        width:30px;
        height: auto;
      }
    }

    h2
    {
      font-size:0.8rem;
    }
    .fa-solid
    {
      margin-right: 0.8rem;
      font-size:1.3rem;
    }
  }
  @media(max-width:400px)
  {
    /* display: flex; */
    align-items: center;
    padding:0.1rem;
    .profile
    {
      display: flex;
      flex-direction: column;
      img
      {
        width:30px;
        height: auto;
      }
    }

    h2
    {
      font-size:0.65rem;
    }
    .fa-solid
    {
      margin-right: 0.8rem;
      font-size:1.3rem;
    }
  }
`;
export default ProfileContainer;