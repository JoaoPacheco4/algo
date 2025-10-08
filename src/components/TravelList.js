import React from 'react';
import { List, ListItem } from '../styles';

function TravelList({ travels }) {
return (
<section>
{travels.length === 0 ? (
<p>Nenhuma viagem cadastrada ainda.</p>
) : (
<List aria-live="polite">
{travels.map((travel, index) => (
<ListItem key={index}>
<strong>{travel.titulo}</strong> — {travel.local} <br/>
{travel.descricao}
</ListItem>
))}
</List>
)}
</section>
);
}

export default TravelList;