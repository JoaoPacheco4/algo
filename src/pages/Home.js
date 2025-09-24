import React from 'react';
import BookList from '../components/BookList';

// Home recebe os livros via props e mostra a listagem
function Home({ books }) {
return (
<div>
<BookList books={books} />
</div>
);
}

export default Home;