import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from '../styles';

// AddBook usa useNavigate para voltar à rota principal após salvar
function AddBook({ addBook }) {
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const navigate = useNavigate();

const handleSubmit = (e) => {
e.preventDefault();
if (!title.trim() || !author.trim()) return;

addBook({ title: title.trim(), author: author.trim() });

// Após cadastrar, navega para a página inicial (listagem)
navigate('/');

};

return (
<Form onSubmit={handleSubmit} aria-label="form-cadastro-livro">
<Input
type="text"
placeholder="Título do livro"
value={title}
onChange={(e) => setTitle(e.target.value)}
aria-label="titulo"
/>
<Input
type="text"
placeholder="Autor do livro"
value={author}
onChange={(e) => setAuthor(e.target.value)}
aria-label="autor"
/>
<Button type="submit">Salvar</Button>
</Form>
);
}

export default AddBook;