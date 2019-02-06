import { observable, computed, action } from "mobx";
import { ToDoItem } from "../interface/interface";
import * as mobx from 'mobx';


class ObservableTodoStore {
    @observable private todos = [
        {id: 0, task: 'Create MobX demo', completed: false}
    ];
    @observable private editorState = {
        isEditorOpened: false,
        isUpdatedMode: false
    };
    @observable private editedToDo = {};

    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @computed get totalListItems() {
        return this.todos.length; 
    }

    @action
    setToDoOptions(options: ToDoItem, index: number){
        const isIndex = !isNaN(index),
            toDoIndex = isIndex ? index : this.todos.length;
        this.todos.splice(toDoIndex, isIndex ? 1 : 0, options);
    }

    @computed get toDoList() {
        return this.todos;
    }

    @action
    setEditedToDo(id: number) {
        let editedItem = {};
        const {todos} = this;
        for(let i = 0; i < todos.length; i++) {
            const item = todos[i];
            editedItem = item.id === id && item;
        }
        this.editedToDo = editedItem;
    }

    @computed get editedTodoItem() {
        return mobx.toJS(this.editedToDo);
    }

    @action
    setEditorState(opened: boolean, updated: boolean) {
        this.editorState.isEditorOpened = opened;
        this.editorState.isUpdatedMode = updated;
    }

    @computed get editorStateOption() {
        return this.editorState;
    }



}

export const 
observableTodoStore = new ObservableTodoStore();