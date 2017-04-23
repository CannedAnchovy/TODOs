import React from 'react';

const TodoList = (props) => {
  const { listId, renderItems, handleListAddItem, handleListDelete } = props;
  return (
    <div className="todoList" id={`list${listId}`}>
      <div className="todoList-title">
        <input className="todoList-title-text" type="text" />
        <button className="todoList-title-addBtn" onClick={() => handleListAddItem(listId)} />
        <button className="todoList-title-deleteBtn" onClick={() => handleListDelete(listId)} />
      </div>
      <div className="todoList-items">
        {renderItems(listId)}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  listId: React.PropTypes.number.isRequired,
  renderItems: React.PropTypes.func.isRequired,
  handleListAddItem: React.PropTypes.func.isRequired,
  handleListDelete: React.PropTypes.func.isRequired,
};

export default TodoList;
