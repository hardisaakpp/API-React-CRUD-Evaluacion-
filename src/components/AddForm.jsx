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
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddForm;
