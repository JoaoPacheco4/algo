import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTravel from './pages/AddTravel';
import NotFound from './pages/NotFound';
import { Container, NavBar, NavLinkStyled, Title } from './styles';

function App() {
// Estado levantado (lifting state) para compartilhar entre rotas
const [travels, Travels] = useState([]);

const addTravel = (book) => {
Travels((prev) => [...prev, book]);
};

return (
<Container>
{/* Barra de navegação com links para as rotas */}
<NavBar>
<Title> Trajeto </Title>
<div>
<NavLinkStyled to="/">Home</NavLinkStyled>
<NavLinkStyled to="/add">Cadastrar</NavLinkStyled>
</div>
</NavBar>

  {/* Definição das rotas da aplicação */}
  <Routes>
    <Route path="/" element={<Home travels={travels} />} />
    {/* Passamos a função addTravel para a rota /add */}
    <Route path="/add" element={<AddTravel addTravel={addTravel} />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Container>

);
}

export default App;