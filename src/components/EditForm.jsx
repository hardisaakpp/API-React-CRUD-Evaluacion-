import React, { useState } from 'react';

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
            <button type="submit">Save</button>
        </form>
    ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
    );
};

export default EditForm;
