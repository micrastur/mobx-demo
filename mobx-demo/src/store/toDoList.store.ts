import { observable, computed, action } from "mobx";
import { ToDoItem } from "../interface/interface";
// import * as mobx from 'mobx';

class ObservableTodoStore {
    @observable todos = [
        {id: 0, task: 'test', completed: false, editable: false}
    ];
    @observable isEditMode = false;
    //@observable pendingRequests = 0;

    // constructor() {
    //     mobx.autorun(() => console.log(this.report));
    // }

    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @computed get totalListItems() {
        return this.todos.length;
    }

    @action
    setToDoEditableProp(index: number) {
        this.todos[index].editable = !this.todos[index].editable;
        console.log(this.todos[index].editable);
    }

    @action
    setToDoOptions(options: ToDoItem, index: number){
        const toDoIndex = index || this.todos.length - 1;
        this.todos.splice(toDoIndex, index ? 1 : 0, options);
    }
}

export const observableTodoStore = new ObservableTodoStore();