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

export interface ToDoItemProps {
    todos: ToDoItem[]
}

interface EditorState {
    isEditorOpened: boolean,
    isUpdatedMode: boolean
}

export interface ToDoStore {
    toDoStore?: {
        todos: ToDoItem[],
        editedToDo: ToDoItem,
        editorState: EditorState,
        pendingRequests: number,
        completedTodosCount: number,
        totalListItems: number,
        setToDoOptions(options: ToDoItem, index: number): void,
        toDoList: ToDoItem[]
        setEditedToDo(id: number): void,
        editedTodoItem: ToDoItem,
        setEditorState(opened: boolean, updated: boolean): void,
        editorStateOption: EditorState
    }
}
