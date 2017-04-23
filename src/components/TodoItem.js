import React from 'react';

const TodoItem = (props) => {
  const { itemId, checked, handleItemCheck, handleItemDelete } = props;
  return (
    <div className={`todoItem ${checked}`} id={`item-${itemId}`} >
      <button className="todoItem-checkBtn" onClick={handleItemCheck} />
      <input
        className="todoItem-text"
        type="text"
      />
      <button className="todoItem-deleteBtn" onClick={handleItemDelete} />
    </div>
  );
};

TodoItem.propTypes = {
  itemId: React.PropTypes.number.isRequired,
  checked: React.PropTypes.string.isRequired,
  handleItemCheck: React.PropTypes.func.isRequired,
  handleItemDelete: React.PropTypes.func.isRequired,
};

export default TodoItem;
