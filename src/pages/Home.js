import React from 'react';
import BookList from '../components/TravelList';

// Home recebe os livros via props e mostra a listagem
function Home({ travels }) {
return (
<div>
<BookList travels={travels} />
</div>
);
}

export default Home;