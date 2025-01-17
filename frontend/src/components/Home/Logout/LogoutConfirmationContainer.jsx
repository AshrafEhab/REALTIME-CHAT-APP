import styled from 'styled-components'
const LogoutConfirmationContainer = styled.div`
    background-color:rgba(11, 11, 11, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    h1
    {
        color:white;
    }
    .components
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color:#000;
        padding: 3.5rem;
        border-radius: 2rem;
        gap: 2.5rem;
        .btns
        {
            display:flex;
            flex-direction:row;
            gap:3.5rem;
            button
            {
                cursor:pointer;
                background-color:#050505;
                color:white;
                padding:1rem 2rem;
                            
                font-size:2rem;
                font-weight:bold;
                border-color:#A625BE;
                border-radius:2rem;
                &:hover
                {    
                    background-color:#1F1F1F;
                }
            }
            #logout
            {
                background-color:#111;
                &:hover
                {    
                    background-color:#333;
                }
                
            }
        
        }

    }
`;

export default LogoutConfirmationContainer

