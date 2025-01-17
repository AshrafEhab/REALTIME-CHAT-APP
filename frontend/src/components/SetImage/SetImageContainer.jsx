import styled from "styled-components"

const SetImageContainer = styled.div`
    min-height:100vh;
    background-color:#000;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    color:#fff;
    overflow: hidden;

    .image-container
    {
        display:flex;
        flex-direction:column;
        align-items: center;
        gap: 1rem;
       .fa-trash
        {
            font-size:2rem;
            color:red;
            cursor: pointer;
        }

        img
        {
            max-width:15vw;
            min-width:300px;
            border-radius:90%;
            border-width:0.3rem;
            border-style:solid;
            border-color:#A625BE;
            padding:0.1rem;
        }
    }

    h1
    {
        font-size:2.5rem;
    }
    .uploading-container
    {   
        color:#fff  ;
        cursor:pointer;
        font-size:2rem;
        .fa-upload
        {
            padding:1rem;
            color:#fff 
        }
    }
    .choice
    {
        display:flex;
        flex-direction:row;
        gap:2rem;
        button
        {
            background-color:#111;
            color:white;
            padding:1rem 2rem;
            cursor :pointer ;
            font-size:2rem;
            font-weight:bold;
            border-color:#A625BE;
            border-radius:2rem;
            &:hover{
                background-color: #2A2A2A;
            }
        }
        #skip
        {
            background-color: #000;
            &:hover{
                background-color: #333;
            }
        }
    }


`;
export default SetImageContainer;