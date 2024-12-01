import React from 'react';
import EditForm from './EditForm';

const ItemList = ({ items, onDelete, onUpdate }) => {
    return (
        <ul className="item-list">
            {items.map((item) => (
                <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <EditForm item={item} onUpdate={onUpdate} />
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
