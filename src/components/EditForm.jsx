import PropTypes from 'prop-types';
import { useState } from 'react';

const EditForm = ({ item, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [body, setBody] = useState(item.body);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(item.id, { ...item, title, body });
        setIsEditing(false);
    };

    return isEditing ? (
        <form onSubmit={handleSubmit} className="edit-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button type="submit">Guardar</button>
        </form>
    ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
    );
};

EditForm.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default EditForm;