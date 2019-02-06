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
    return (
        <>
            <Header />
            <TodoView />
        </>
    );
  }
}

export default TodoList;