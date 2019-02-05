import { observable, computed, action } from "mobx";
import { ToDoItem } from "../interface/interface";
// import * as mobx from 'mobx';

class ObservableTodoStore {
    @observable todos = [
        {id: 0, task: 'test', completed: false}
    ];
    @observable isEditMode = false;
    @observable editedToDo = {};

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
        const toDoIndex = index || this.todos.length - 1;
        this.todos.splice(toDoIndex, index, options);
    }

    @action
    getToDoList() {
        return this.todos;
    }

    @action
    setEditedToDo(id: number) {
        let k = this.todos.filter(todo => todo.id === id);
        this.editedToDo = k;
    }

    @action
    getEditedTodo() {
        return this.editedToDo;
    }

    @action
    setEditMode() {
        this.isEditMode = !this.isEditMode;
    }

    @computed get getEditMode() {
        return this.isEditMode;
    }

}

export const 
observableTodoStore = new ObservableTodoStore();