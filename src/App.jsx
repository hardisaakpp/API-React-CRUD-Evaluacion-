import { useState, useEffect } from 'react';
import api from './services/api';
import AddForm from './components/AddForm';
import ItemList from './components/ItemList';
import './App.css';

const App = () => {
    const [items, setItems] = useState([]);

    // Obtener datos
    const fetchItems = async () => {
        try {
            const response = await api.get('/');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // Crear nuevo ítem
    const addItem = async (item) => {
        try {
            const response = await api.post('/', item);
            setItems([...items, response.data]);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    // Actualizar ítem
    const updateItem = async (id, updatedItem) => {
        try {
            await api.put(`/${id}`, updatedItem);
            setItems(items.map((item) => (item.id === id ? updatedItem : item)));
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    // Borrar ítem
    const deleteItem = async (id) => {
        try {
            await api.delete(`/${id}`);
            setItems(items.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    // Efecto para el título
    useEffect(() => {
        const title = document.querySelector('h1');

        const handleMouseMove = (e) => {
            const rect = title.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const moveX = (x - rect.width / 2) / 10;
            const moveY = (y - rect.height / 2) / 10;

            title.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };

        const handleMouseLeave = () => {
            title.style.transform = 'translate(0, 0)';
        };

        title.addEventListener('mousemove', handleMouseMove);
        title.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            title.removeEventListener('mousemove', handleMouseMove);
            title.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="App">
            <h1>CRUD App</h1>
            <h3>Aplicación CRUD - API - React, desarrollada por Isaac.</h3>
            <AddForm onAdd={addItem} />
            <ItemList items={items} onDelete={deleteItem} onUpdate={updateItem} />
        </div>
    );


};

export default App;
