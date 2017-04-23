import React from 'react';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      listArray: [],
      doneCount: 0,
      notDoneCount: 0,
    };
    this.handleAppAddList = this.handleAppAddList.bind(this);
    this.handleListAddItem = this.handleListAddItem.bind(this);
    this.handleListDelete = this.handleListDelete.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  handleAppAddList() {
    const newList = {
      listId: this.state.listArray.length,
      items: [],
    };
    this.state.listArray.push(newList);
    this.setState({ listArray: this.state.listArray });
  }

  handleListAddItem(listId) {
    const newItem = {
      itemId: this.state.listArray[listId].items.length,
      checked: '',
    };
    this.state.listArray[listId].items.push(newItem);
    this.setState({ listArray: this.state.listArray });
  }

  handleListDelete(listId) {
    delete this.state.listArray[listId];
    this.setState({ listArray: this.state.listArray });
  }

  renderItems(listIndex) {
    return this.state.listArray[listIndex].items.map((item, itemIndex) => (
      <TodoItem
        itemId={this.state.listArray[listIndex].items[itemIndex].itemId}
        checked={this.state.listArray[listIndex].items[itemIndex].checked}
        handleItemCheck={this.handleItemCheck}
        handleItemDelete={this.handleItemDelete}
      />
    ));
  }

  renderList() {
    return this.state.listArray.map((list, listIndex) => <TodoList
      listId={this.state.listArray[listIndex].listId}
      renderItems={this.renderItems}
      handleListAddItem={this.handleListAddItem}
      handleListDelete={this.handleListDelete}
    />);
  }

  render() {
    console.log(this.state.listArray);
    return (
      <div>
        <div className="todoApp-title">
          <h1 className="todoApp-title-text">TODOs</h1>
          <button className="todoApp-title-addBtn" onClick={this.handleAppAddList} />
        </div>
        <div className="todoApp-content">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default TodoApp;
