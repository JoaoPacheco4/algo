import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';
import { Container, NavBar, NavLinkStyled, Title } from './styles';

function App() {
// Estado levantado (lifting state) para compartilhar entre rotas
const [books, setBooks] = useState([]);

const addBook = (book) => {
setBooks((prev) => [...prev, book]);
};

return (
<Container>
{/* Barra de navegação com links para as rotas */}
<NavBar>
<Title>📚 Biblioteca Online</Title>
<div>
<NavLinkStyled to="/">Home</NavLinkStyled>
<NavLinkStyled to="/add">Cadastrar</NavLinkStyled>
</div>
</NavBar>

  {/* Definição das rotas da aplicação */}
  <Routes>
    <Route path="/" element={<Home books={books} />} />
    {/* Passamos a função addBook para a rota /add */}
    <Route path="/add" element={<AddBook addBook={addBook} />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Container>

);
}

export default App;