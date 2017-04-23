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
    this.handleItemCheck = this.handleItemCheck.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
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
    this.setState({
      listArray: this.state.listArray,
      notDoneCount: this.state.notDoneCount + 1,
    });
  }

  handleListDelete(listId) {
    let doneCount = 0;
    let notDoneCount = 0;
    for (let i = 0; i < this.state.listArray[listId].items.length; i += 1) {
      if (this.state.listArray[listId].items[i].checked) {
        doneCount += 1;
      } else {
        notDoneCount += 1;
      }
    }
    delete this.state.listArray[listId];
    this.setState({
      listArray: this.state.listArray,
      doneCount: this.state.doneCount - doneCount,
      notDoneCount: this.state.notDoneCount - notDoneCount,
    });
  }

  handleItemCheck(itemId, listId) {
    const newListArray = this.state.listArray;
    if (newListArray[listId].items[itemId].checked) {
      newListArray[listId].items[itemId].checked = '';
      this.setState({
        notDoneCount: this.state.notDoneCount + 1,
        doneCount: this.state.doneCount - 1,
      });
    } else {
      newListArray[listId].items[itemId].checked = 'checked';
      this.setState({
        notDoneCount: this.state.notDoneCount - 1,
        doneCount: this.state.doneCount + 1,
      });
    }
    this.setState({ listArray: newListArray });
  }

  handleItemDelete(itemId, listId) {
    let isNotDone = true;
    if (this.state.listArray[listId].items[itemId].checked) {
      isNotDone = false;
    }
    delete this.state.listArray[listId].items[itemId];
    if (!isNotDone) {
      this.setState({ doneCount: this.state.doneCount - 1 });
    } else {
      this.setState({ notDoneCount: this.state.notDoneCount - 1 });
    }
    this.setState({ listArray: this.state.listArray });
  }

  renderItems(listId) {
    return this.state.listArray[listId].items.map((item, itemIndex) => (
      <TodoItem
        itemId={this.state.listArray[listId].items[itemIndex].itemId}
        listId={listId}
        checked={this.state.listArray[listId].items[itemIndex].checked}
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
    return (
      <div>
        <div className="todoApp-title">
          <h1 className="todoApp-title-text">TODOs</h1>
          <button className="todoApp-title-addBtn" onClick={this.handleAppAddList} />
        </div>
        <div className="todoApp-count">
          <h2 className="todoApp-count-notDoneCount">Not Done: {this.state.notDoneCount}</h2>
          <h2 className="todoApp-count-doneCount">Done: {this.state.doneCount}</h2>
        </div>
        <div className="todoApp-content">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default TodoApp;
