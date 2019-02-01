import * as React from "react";
import { observer, inject } from "mobx-react";
import EditListView from "./EditListView";
import { action } from "mobx";
import { ToDoStore, ToDoItem } from "../interface/interface";

@inject("toDoStore")
@observer
class TodoView extends React.Component<ToDoStore> {
    handleEditView(index: number) {
        if (this.props.toDoStore) {
            this.props.toDoStore.setToDoEditableProp(index);
        }
        
        // console.log(this.props.todos[index].editable);
    }
  render() {
    return (
        <ul>
            {
                this.props.toDoStore &&
                this.props.toDoStore.todos.map(
                    (todo: ToDoItem, index: number) => {
                        const {id, task, completed, editable} = todo;
                        return (
                            <li key={index}>
                                <span className={`item-state${completed ? ' item-state--completed' : ''}`}></span>
                                {task}
                                <button onClick={() => this.handleEditView(index)}>Edit</button>
                                {editable && <EditListView toDoId={id}/>}
                            </li>
                        );
                    }
                )
            }
        </ul>
    );
  }
}

export default TodoView;