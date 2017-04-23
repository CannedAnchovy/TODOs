import React from 'react';

const TodoItem = (props) => {
  const { itemId, listId, checked, handleItemCheck, handleItemDelete } = props;
  return (
    <div className={`todoItem ${checked}`} id={`item${itemId}`} >
      <button className={`todoItem-checkBtn check${checked}`} onClick={() => handleItemCheck(itemId, listId)} />
      <input
        className="todoItem-text"
        type="text"
      />
      <button className={`todoItem-deleteBtn ${checked}`} onClick={() => handleItemDelete(itemId, listId)} />
    </div>
  );
};

TodoItem.propTypes = {
  itemId: React.PropTypes.number.isRequired,
  listId: React.PropTypes.number.isRequired,
  checked: React.PropTypes.string.isRequired,
  handleItemCheck: React.PropTypes.func.isRequired,
  handleItemDelete: React.PropTypes.func.isRequired,
};

export default TodoItem;
