import * as React from "react";
import { observer, inject } from "mobx-react";
import EditListView from "../EditListView";
import { ToDoStore, ToDoItem } from "../../interface/interface";
import {
    TodoViewWrapper,
    TodoViewItem,
    TodoViewItemButton,
    TodoViewItemWrap,
    TodoViewItemName
} from "./indexStyles";

@inject("toDoStore")
@observer
class TodoView extends React.Component<ToDoStore> {
    handleEditView(index: number) {
        if (this.props.toDoStore) {
            this.props.toDoStore.setToDoEditableProp(index);
        }
    }
  render() {
    return (
        <TodoViewWrapper>
            {
                this.props.toDoStore &&
                this.props.toDoStore.todos.map(
                    (todo: ToDoItem, index: number) => {
                        const {id, task, completed, editable} = todo;
                        return (
                            <TodoViewItemWrap key={index}>
                                <TodoViewItem>
                                    <TodoViewItemName isCompleted={completed}>
                                        {task}
                                    </TodoViewItemName>
                                    <TodoViewItemButton
                                        onClick={() => this.handleEditView(index)}
                                    >
                                        Edit
                                    </TodoViewItemButton>
                                </TodoViewItem>
                                {editable && <EditListView toDoId={id}/>}
                            </TodoViewItemWrap>
                        );
                    }
                )
            }
        </TodoViewWrapper>
    );
  }
}

export default TodoView;