import styled from 'styled-components'

const ErrorContainer = styled.div`   
    height:100vh; 
    background-color:#A625BE;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:1rem;

    h1
    {
        font-size:3rem;
        color:white;
    }

    p
    {
        font-size:1.8rem;
        color:white;
    }
    button
    {
        padding :1rem;
        border-radius: 1rem;
        border-color: #3b0645;
        font-weight: bold;
        color: #A625BE;
        box-shadow: none;
        cursor: pointer;
        transition:  200ms ease;
        &:hover
        {
            scale: 1.1;
        }
    }

    @media (max-width:470px)
    {
        h1
        {
            font-size:2rem;
        }
         p
        {
            font-size:1.5rem;
        }
    }
    
    @media (max-width:410px)
    {
        h1
        {
            font-size:1.7rem;
        }
         p
        {
            font-size:1.3rem;
        }
    }
`;

export default ErrorContainer;
