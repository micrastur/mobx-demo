import * as React from 'react'
import { observer, inject } from "mobx-react";
import { ToDoItem, ToDoStore } from "../../interface/interface";
import Header from '../Header';
import TodoView from "../ToDoView";

@inject("toDoStore")
@observer
class TodoList extends React.Component<ToDoStore> {
  render() {
    const store = this.props.toDoStore!;
    console.log(store);
    return (
        <>
            <Header />
            <TodoView />
            { store.pendingRequests > 0 ? 'Loading...' : null }
        </>
    );
  }
}

export default TodoList;