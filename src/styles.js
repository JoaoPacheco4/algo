import styled from 'styled-components';
import { Link } from 'react-router-dom';

// === ESTILOS GLOBAIS ===
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;

  /* Responsividade para tablets */
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%;
  }

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

// === COMPONENTES DE LAYOUT ===
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 2px solid #007bff;
  margin-bottom: 2rem;

  /* Responsividade para tablets */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 0;
    margin-bottom: 1.5rem;
  }

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const Title = styled.h1`
  color: #007bff;
  margin: 0;
  font-size: 2rem;

  /* Responsividade para tablets */
  @media (max-width: 768px) {
    font-size: 1.75rem;
    text-align: center;
  }

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const NavLinkStyled = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #007bff;
    color: white;
  }

  /* Responsividade para tablets */
  @media (max-width: 768px) {
    margin: 0 10px;
    padding: 6px 12px;
    font-size: 0.9rem;
  }

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    margin: 0 5px;
    padding: 5px 10px;
    font-size: 0.85rem;
    display: inline-block;
    text-align: center;
    min-width: 80px;
  }
`;

// === COMPONENTES DE FORMULÁRIO ===
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  /* Responsividade para tablets */
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1.5rem;
    gap: 1.25rem;
  }

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    max-width: 95%;
    padding: 1rem;
    gap: 1rem;
    border: none;
    background-color: transparent;
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    padding: 0.65rem;
    font-size: 16px; /* Previne zoom no iOS */
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  resize: vertical;
  min-height: 100px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    padding: 0.65rem;
    font-size: 16px; /* Previne zoom no iOS */
    min-height: 80px;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    padding: 0.85rem 1.5rem;
    font-size: 1.1rem; /* Melhor toque em mobile */
  }
`;

// === COMPONENTES DE LISTAGEM ===
export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

  /* Responsividade para tablets */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 0.875rem;
  }

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const ListItem = styled.li`
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }

  strong {
    color: #007bff;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  p {
    margin: 0.5rem 0 0 0;
    color: #666;
    line-height: 1.5;
  }

  /* Responsividade para tablets */
  @media (max-width: 768px) {
    padding: 1.25rem;
    
    strong {
      font-size: 1.1rem;
    }
  }

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    padding: 1rem;
    
    strong {
      font-size: 1rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

// === COMPONENTES ADICIONAIS PARA MELHOR UX ===
export const PageTitle = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;

  /* Responsividade para tablets */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 2rem;
  font-size: 1.1rem;

  /* Responsividade para mobile */
  @media (max-width: 480px) {
    padding: 1.5rem;
    font-size: 1rem;
  }
`;