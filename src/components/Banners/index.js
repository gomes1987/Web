import { styled } from "styled-components"

import foto from '../../assets/foto.jpg'

export function Banners() {
    return (
        <Container>
            <Box>
                <Title>
                    Best Place to Buy
                    Everything.
                </Title>
                <Texto>
                    At Bachira, you can shop for all your favorite beauty brands, clothes,
                    household products and more at a single place.
                </Texto>
                <Button>Shopping</Button>
            </Box>

            <Img src={foto} title="" />
        </Container>
    )
}

const Container = styled.div`
    max-width: 1280px;
    min-height: 350px;
    background-color: transparent;
    margin: .7rem auto;
    padding: 0.7rem;
    display: flex;
    gap: 2rem;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0.1rem 0.1rem  .2rem .1rem #666;
`

const Box = styled.div`
    width: 25rem;
    padding: 1rem;
`

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .9rem;
`
const Texto = styled.p`
    text-indent: 1rem;
    font-weight: 400;
    font-size: .9rem;
`
const Button = styled.button`
    background-color: #3C9379;
    height: 3.2rem;
    font-size: 1.1rem;
    width: 10rem;
    text-align: center;
    border-radius: 0.4rem;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    margin-top: 2.5rem;
`

const Img = styled.img`
    width: 40%;
    border-radius: 1rem;
`
