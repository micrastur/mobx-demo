export interface ToDoListView {
    setToDoEditableProp(index: number): void,
    todos: ToDoItem[]
}

export interface CompleteInterface {
    isCompleted: boolean
}

export interface ToDoItem {
    id: number,
    task: string,
    completed: boolean
}

export interface EditState {
    options: ToDoItem,
    isNewMode: boolean
}

export interface ToDoItemProps {
    todos: ToDoItem[]
}

export interface ToDoStore {
    toDoStore?: {
        todos: ToDoItem[],
        editedToDo: ToDoItem,
        isEditMode: boolean,
        pendingRequests: number,
        completedTodosCount: number,
        totalListItems: number,
        setToDoOptions(options: ToDoItem, index: number): void,
        getToDoList(): ToDoItem[]
        setEditedToDo(id: number): void,
        getEditedTodo(): ToDoItem
    }
}
