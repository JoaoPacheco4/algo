import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from '../styles';

// AddTravel usa useNavigate para voltar à rota principal após salvar
function AddTravel({ addTravel }) {
const [titulo, setTitulo] = useState('');
const [descricao, setDescricao] = useState('');
const [local, setLocal] = useState('');
const navigate = useNavigate();

const handleSubmit = (e) => {
e.preventDefault();
if (!titulo.trim() || !descricao.trim()) return;

addTravel({ titulo: titulo.trim(), descricao: descricao.trim(), local: local.trim() });

// Após cadastrar, navega para a página inicial (listagem)
navigate('/');

};

return (
<Form onSubmit={handleSubmit} aria-label="form-cadastro-livro">
<Input type="text" placeholder="titulo" value={titulo} 
onChange={(e) => setTitulo(e.target.value)} aria-label="titulo" />
<Input type="text" placeholder="descricao" value={descricao}
onChange={(e) => setDescricao(e.target.value)} aria-label="descricao" />
<Input type="text" placeholder="local" value={local}
onChange={(e) => setLocal(e.target.value)} aria-label="local" />
<Button type="submit">Salvar</Button>
</Form>
);
}

export default AddTravel;