export interface ToDoListView {
    setToDoEditableProp(index: number): void,
    todos: ToDoItem[]
}

export interface ToDoId {
    id: number
}

export interface CompleteInterface {
    isCompleted: boolean
}

export interface ToDoItem {
    id: number,
    task: string,
    completed: boolean,
    editable: boolean
}

export interface ToDoItemProps {
    todos: ToDoItem[]
}

export interface ToDoStore {
    toDoStore?: {
        todos: ToDoItem[],        
        isEditMode: boolean,
        pendingRequests: number,
        completedTodosCount: number,
        totalListItems: number,
        setToDoEditableProp(index: number): void,
        setToDoOptions(options: ToDoItem, index: number): void
    }
}

export interface ToDoTask {
    id: number,
    task: string,
    completed: boolean,
    editable: boolean
}
