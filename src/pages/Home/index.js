import { styled } from "styled-components"
import { Header } from "../../components/Header"
import { Banners } from "../../components/Banners"

export function Home() {
    return (
        <Container>
            <Header />
            <Banners />
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
`