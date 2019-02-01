export interface ToDoListView {
    setToDoEditableProp(index: number): void,
    todos: ToDoItem[]
}

export interface ToDoId {
    id: number
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
        report(): string,
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
