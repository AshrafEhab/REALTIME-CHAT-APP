import styled from "styled-components"

const FormContainer = styled.div`
    min-height:100vh;
    background-color:black;
    display:flex;
    flex-direction:column;
    justify-content:center;  
    align-items:center;
    
    form 
    {
        display:flex;
        flex-direction:column;
        justify-content:space-between;  
        min-height: 90vh;
        font-size:1.7rem;
        font-weight:bold;
        background-color:#131b23;
        color: white;
        border-radius:1rem;
        padding: 2rem;
        gap: 1.5rem;

        .logo
        {
            display:flex;
            justify-content:center;  
            img
            {
                max-width:33%;
                height:auto;
            } 
        }

        .inputs
        {
            display:flex;
            flex-direction:column;
            justify-content:center;  
            gap:1.5rem;

            input
            {
                color:white;
                background-color:black;
                font-size:1.05rem;
                font-weight:700;
                border-style:solid;
                border-radius: 0.8rem;
                border-width: 0.2rem;
                padding: 0.6rem;
                &:focus 
                {
                    background-color: white;
                    color:black;
                }
            }
            .noErrorInput
            {
                border-color:#888888;
                &:focus 
                {
                    border-color:#888888;
                }                
            }
            .errorInput
            {
                border-style:double;
                
                border-color:red;
            }
        }
        

        button
        {
            font-size:1.3rem;
            font-weight:bold;
            border-radius: 0.8rem;
            padding:0.35rem 0.4rem;
            border-color:#888888;
            border-width: 0.2rem;
            background-color:#A625BE;
            color:white;
            cursor:pointer;

            transition: background-color 0.3s ease;
            &:hover
            {
                background-color: #43084E;
                transform: scale(1.01); 
            }
        }

        span
        {
            display:flex;
            flex-wrap:wrap;
            justify-content:space-around;
            a
            {
                color:#A625BE;
                text-decoration: none;
                &:hover
                {
                    color:#000;
                };
            }
        }
    }
`;

export default FormContainer;