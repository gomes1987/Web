import { Link } from "react-router-dom"
import { styled } from "styled-components"

export function Nav() {
    return (
        <Container>
            <NavUl>
                <NavLi><Link to="/" className="link">Home</Link></NavLi>
                <NavLi><Link to="/" className="link">Shop</Link></NavLi>
                <NavLi><Link to="/" className="link">Leilao</Link></NavLi>
                <NavLi><Link to="/" className="link">Sobre</Link></NavLi>
            </NavUl>
            <Button>Login</Button>
        </Container>
    )
}

const Container = styled.div`
    background-color: #101913;
    padding: 0.3rem;
    display: flex;
    gap: 2rem;
`
const NavUl = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
`
const NavLi = styled.li`
    font-size: 1.1rem;
    background-color: transparent;
    width: 9rem;
    padding: 0.5rem 1rem;
    text-align: center;
`

const Button = styled.button`
    background-color: #3C9379;
    font-size: 1.2rem;
    width: 8rem;
    text-align: center;
    border-radius: 0.4rem;
    cursor: pointer;
    color: #fff;
    font-weight: 700;

`

