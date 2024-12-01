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

    return (
        <div className="App">
            <h1>CRUD App</h1>
            <AddForm onAdd={addItem} />
            <ItemList items={items} onDelete={deleteItem} onUpdate={updateItem} />
        </div>
    );
};

export default App;
