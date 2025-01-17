import styled from 'styled-components'

const HomePageLayout = styled.div`
    background-color: black;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 25% 75%;
    @media (max-width:1250px)
    {
        grid-template-columns: 40% 60%;    
    }
`

export default HomePageLayout
