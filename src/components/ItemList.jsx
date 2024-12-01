import PropTypes from 'prop-types';
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

ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default ItemList;