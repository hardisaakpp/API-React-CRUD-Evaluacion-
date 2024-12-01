import PropTypes from 'prop-types';
import { useState } from 'react';

const AddForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, body });
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <input
                type="text"
                placeholder="Nueva tarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Descripción"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button type="submit">Añadir</button>
        </form>
    );
};

AddForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default AddForm;