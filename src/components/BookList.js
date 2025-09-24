import React from 'react';
import { List, ListItem } from '../styles';

function BookList({ books }) {
return (
<section>
{books.length === 0 ? (
<p>Nenhum livro cadastrado ainda.</p>
) : (
<List aria-live="polite">
{books.map((book, index) => (
<ListItem key={index}>
<strong>{book.title}</strong> — {book.author}
</ListItem>
))}
</List>
)}
</section>
);
}

export default BookList;