import { styled } from "styled-components"
import { Nav } from "../Nav"

export function Header() {
    return (
        <Container>
            <Box>
                <Logo>
                    <HL>Web</HL><HW>Leilão</HW>
                </Logo>
                <Nav />
            </Box>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: #101913;
`

const Box = styled.div`
    max-width: 1280px;
    background-color: transparent;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
`

const Logo = styled.div`
    
`
const HL = styled.span`
    font-size: 1.7rem;
    font-weight: 600;
    color: #535A56;
`

const HW = styled.span`
    font-size: 1.3rem;
    color: #3C9379;
`