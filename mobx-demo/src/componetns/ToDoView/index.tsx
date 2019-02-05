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
        this.props.toDoStore!.setEditedToDo(index);
        this.props.toDoStore!.setEditMode();
    }
    render() {
        const toDoList = this.props.toDoStore!.getToDoList();
        return (
            <TodoViewWrapper>
                {
                    toDoList &&
                    toDoList.map(
                        (todo: ToDoItem, index: number) => {
                            const {id, task, completed} = todo;
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