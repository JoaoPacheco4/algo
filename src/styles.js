import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div  `max-width: 900px;   margin: 20px auto;   padding: 16px;`;

export const NavBar = styled.nav`
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
justify-content: space-between;

@media(min-width: 700px){
flex-direction: row;
}
`;

export const Title = styled.h1  `color: #2d6a4f;   margin: 0;`;

export const NavLinkStyled = styled(Link)`
margin-left: 8px;
text-decoration: none;
padding: 8px 12px;
border-radius: 8px;
background: #d8f3dc;
color: #1b4332;
font-weight: 600;

&:hover{
opacity: 0.9;
}
`;

export const Form = styled.form  `display: flex;   flex-direction: column;   gap: 12px;   margin-top: 20px;`;

export const Input = styled.input  `padding: 10px;   border: 1px solid #cfcfcf;   border-radius: 8px;   font-size: 16px;`;

export const Button = styled.button`
padding: 12px;
background: #40916c;
color: white;
border: none;
border-radius: 8px;
cursor: pointer;

&:hover{ background: #1b4332; }
`;

export const List = styled.ul  `margin-top: 20px;   padding: 0;   list-style: none;   display: grid;   gap: 12px;`;

export const ListItem = styled.li  `background: #f1f9f3;   padding: 12px;   border-radius: 8px;`;