import React from 'react'
import { NavLink } from 'react-router-dom';
// import Button from '../../components/Button';
import { ButtonContainer, Container, Description, Title, StyledButton } from './styles';

function Button({backColor, children}) {
  return (
   <StyledButton backColor={backColor}>
     {children}
   </StyledButton>
  )
}


export default function Home() {
  return (
    <Container>
      <Title>Desafio #2 - Hiring Coders - Gama Academy</Title>
      <Description>Gestão de Cadastros</Description>
      <ButtonContainer>
        <NavLink to='/clients'><Button backColor='lime'>Clients</Button></NavLink>
        <NavLink to='/products'><Button backColor='blue'>Products</Button></NavLink>
      </ButtonContainer>
    </Container>
  )
}
