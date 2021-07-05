import styled from "styled-components"

const MainHeader = styled.header`
    background-color: #0077B6;
    margin: 0;
    padding: 0;
    
`

const MainTitle = styled.h1`
    color: #CAF0F8;
`

function Header() {
    return (
        <MainHeader>
            <MainTitle>BankOfBoolean</MainTitle>
        </MainHeader>
        
    )
}
export default Header