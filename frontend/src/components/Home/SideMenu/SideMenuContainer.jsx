import styled from 'styled-components'

const SideMenuContainer = styled.div`
    background-color: black;
    overflow: hidden;
    display: grid;
    grid-template-rows: 90% 10%;
    @media (max-width:650px)
    {    
      grid-template-rows: 85% 15%;
    }  
`

export default SideMenuContainer
